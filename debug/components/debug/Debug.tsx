import Accordion from '@components/accordion/Accordion'
import { PrimaryButton } from '@components/buttons/Button'
import Logs from '@components/debug/logs'
import JsonRepresentation from '@components/jsonRepresentation'
import PageContainer from '@components/pageContainer/PageContainer'
import SvgIcon from '@components/svgIcon/SvgIcon'
import { Body, H3 } from '@components/text'
import { Icons } from '@constants/images'
import Clipboard from '@react-native-community/clipboard'
import { Log, loggerStore } from '@stores/LoggerStore'
import { navigationStore } from '@stores/NavigationStore'
import React, { useCallback, useMemo } from 'react'
import {
  Modal, Pressable, ScrollView, View,
} from 'react-native'
import Draggable from 'react-native-draggable'
import { useSnapshot } from 'valtio'

import config from '@/config'
import Strings from '@/localization'
import { Colors, Metrics } from '@/theme'

import styles from './styles'

const {
  version,
  APP_ENV,
  appName,
} = config

const functionName = 'function'

type Props = {
  actions: Array<{ title: string, onPress: () => void }>,
}

const valueOrNA = (label: string, value: string | undefined) => {
  const text = value || ' n/a'
  return `${label} - ${text}`
}

const toNiceObject = (obj: Record<string, unknown>) => {
  const entries = Object.keys(obj)
  const filtered = entries.filter((key) => typeof obj[key as keyof typeof obj] !== functionName)
    .map((key) => ({ [key]: obj[key as keyof typeof obj] }))
  return filtered.reduce((obj, item) => ({ ...obj, ...item }), {})
}

const Debug = ({ actions }: Props) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const size = 50

  const navigationStoreSnap = useSnapshot(navigationStore)
  const navigationStoreContent = toNiceObject(navigationStoreSnap)

  const { logs } = useSnapshot(loggerStore)

  const toggleModalVisible = useCallback(() => {
    setModalVisible(!modalVisible)
  }, [modalVisible])

  const customActions = useMemo(() => {
    if (actions.length > 0) {
      return (
        <>
          <H3>Debug Actions</H3>
          {actions.map(({
            title,
            onPress,
          }) => (
            <View key={title}>
              <PrimaryButton
                title={title}
                onPress={() => {
                  onPress()
                  toggleModalVisible()
                }}
              />
            </View>
          ))}
        </>
      )
    }
    return null
  }, [actions, toggleModalVisible])

  const appInfo = {
    appName,
    version,
    env: APP_ENV,
  }

  return (
    <>
      <Draggable
        renderSize={42}
        renderColor={Colors.primary}
        x={Metrics.screenWidth - size * 2}
        y={Metrics.screenHeight - size * 2}
        renderText={version}
        animatedViewProps={{ height: Metrics.screenHeight }}
        onShortPressRelease={toggleModalVisible}
      >
        <Body style={styles.box}>
          {version}
        </Body>
      </Draggable>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModalVisible}
      >
        <PageContainer viewWrapperStyle={{ paddingHorizontal: Metrics.xxxSmall }}>
          <ScrollView>
            <View>
              <Pressable onPress={toggleModalVisible}>
                <SvgIcon image={Icons.arrowLeft} />
              </Pressable>
              <H3 style={styles.header}>{appName}</H3>
              <Body>{valueOrNA('App Version', version)}</Body>
              <Body>{valueOrNA('App Environment', APP_ENV)}</Body>
              <View>
                {customActions}
                <H3 style={styles.header}>Data</H3>
                <View style={styles.actionItem}>
                  <PrimaryButton
                    title="Copy stores and logs"
                    onPress={() => {
                      console.warn('Copied to clipboard')
                      Clipboard.setString(JSON.stringify({ appInfo, stores: {}, logs }, null, 2))
                      Clipboard.setString(JSON.stringify({
                        appInfo, stores: { }, logs,
                      }, (key, value) => {
                        if (key === 'sb') {
                          return undefined
                        }
                        return value
                      }, 2))
                    }}
                  />
                </View>
                <View style={styles.actionItem}>
                  <Accordion
                    headerContent={(
                      <H3>{Strings.internal.navigationStore}</H3>
                    )}
                    hiddenContent={(
                      <JsonRepresentation data={navigationStoreContent} />
                    )}
                  />
                </View>
                <View style={styles.actionItem}>
                  <Accordion
                    headerContent={(
                      <H3>Logs</H3>
                    )}
                    hiddenContent={(
                      <Logs logs={logs as Array<Log>} />
                    )}
                    bottomContainerStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </PageContainer>
      </Modal>
    </>
  )
}

export default Debug
