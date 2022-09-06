import * as React from 'react'
import {
  Pressable, StyleProp, View, ViewStyle,
} from 'react-native'

import SvgIcon from '@/components/svgIcon/SvgIcon'
import { Icons } from '@/constants/images'

import styles from './styles'

interface Props {
  headerContent: JSX.Element | Array<JSX.Element>
  hiddenContent: JSX.Element | Array<JSX.Element>
  bottomContainerStyle?: StyleProp<ViewStyle>
}

export const Accordion = ({
  headerContent,
  hiddenContent,
  bottomContainerStyle,
}: Props) => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => setOpen(!open)}
      >
        <View style={styles.headerContainer}>
          <View style={styles.customContentContainer}>
            {headerContent}
          </View>
          <View style={styles.arrowButtonContainer}>
            <SvgIcon image={open ? Icons.chevronUp : Icons.chevronDown} />
          </View>
        </View>
      </Pressable>
      {open && (
        <View style={[styles.bottomContainer, bottomContainerStyle]}>
          {hiddenContent}
        </View>
      )}
    </>
  )
}

export default Accordion
