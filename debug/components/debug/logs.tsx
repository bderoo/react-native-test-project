import { PrimaryButton } from '@components/buttons/Button'
import JsonRepresentation from '@components/jsonRepresentation'
import { Body } from '@components/text'
import Clipboard from '@react-native-community/clipboard'
import { NavigationAction } from '@react-navigation/native'
import { Log as LogType } from '@stores/LoggerStore'
import { AxiosError } from 'axios'
import { format } from 'date-fns'
import React from 'react'
import {
  SafeAreaView, View,
} from 'react-native'

import { Colors } from '@/theme'

import { LevelView } from './styles'

type Props = {
  logs: Array<LogType>,
}

type State = {
  search: string,
}

const isNavigationAction = (a: any): a is NavigationAction => a.type !== undefined && typeof a.type === 'string'

const formatMessage = (message: AxiosError | NavigationAction | Array<string> | string, level: 'info' | 'error' | 'warn' | 'log' | 'silent' = 'log'): React.ReactElement => {
  const textColor = Colors.white
  if (typeof message === 'string') {
    return <Body key={Math.random()} color={textColor}>{message}</Body>
  }
  if (Array.isArray(message)) {
    // @ts-ignore
    return message.map((m) => formatMessage(m, level))
  }
  if (message instanceof AxiosError) {
    if (message.response) {
      return (
        <View key={Math.random()}>
          <Body color={textColor}>Error</Body>
          <Body color={textColor}>{`Url - ${message.request._url}}`}</Body>
          <Body color={textColor}>Response</Body>
          {/* @ts-ignore */}
          <JsonRepresentation data={message.response} />
        </View>
      )
    }
  }
  if (isNavigationAction(message)) {
    return (
      <View key={Math.random()}>
        <Body color={textColor}>{`Navigation Event: ${message.type}`}</Body>
        {message.payload && (
          // @ts-ignore
          <JsonRepresentation data={message.payload} />
        )}
        {message.source && (
          <Body color={textColor}>{message.source}</Body>
        )}
        {message.target && (
          <Body color={textColor}>{message.target}</Body>
        )}
      </View>
    )
  }
  // @ts-ignore
  return <JsonRepresentation key={Math.random()} data={message} />
}

class Logs extends React.Component<Props, State> {
  static renderLog({
    item: log,
    index: idx,
  }: { item: LogType, index: number }): JSX.Element {
    const {
      message,
      level,
    } = log
    return (
      // @ts-ignore
      <LevelView key={idx} level={log.level}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            {formatMessage(format(log.date, 'HH:mm:ss.SSSS'))}
          </View>
          <PrimaryButton
            onPress={() => {
              Clipboard.setString(JSON.stringify(message, null, 2))
            }}
            title="Copy"
            style={() => ({
              height: 24,
              width: 80,
            })}
          />
        </View>
        {formatMessage(message, level)}
      </LevelView>
    )
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      search: '',
    }
  }

  render(): JSX.Element {
    const { logs } = this.props
    const { search } = this.state

    const searchedLogs = search ? logs.filter((i) => `${i.message}`.indexOf(search) >= 0) : logs

    return (
      <SafeAreaView>
        {
          searchedLogs.map((l, i) => Logs.renderLog({
            item: l,
            index: i,
          }))
        }
      </SafeAreaView>
    )
  }
}

export default Logs
