import { Body } from '@components/text'
import { NetworkRequest } from '@stores/NetworkRequestStore'
import React from 'react'
import { View } from 'react-native'

import { Colors } from '@/theme'

import styles from './styles'

type Props = {
  request: NetworkRequest,
}

const NetworkRequestBasicInfo = ({ request }: Props) => {
  let color: string = Colors.error
  if (request.status) {
    switch (true) {
    case request.status >= 200 && request.status < 300:
      color = Colors.success
      break
    case request.status >= 500:
      color = Colors.error
      break
    default:
      color = Colors.warning
      break
    }
  }

  let duration = ''
  if (request.startTime && request.endTime) {
    const newDuration = request.endTime - request.startTime
    if (newDuration > 59999) {
      const a = (newDuration / 60000) + Number.EPSILON
      duration = `${Math.round(a * 1000) / 1000}m`
    } else if (newDuration > 9999) {
      duration = `${newDuration / 1000}s`
    } else {
      duration = `${newDuration}ms`
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.horizontalContent}>
        <View style={styles.info}>
          <Body style={styles.method}>{request.method}</Body>
          <View style={[styles.statusWrapper, { borderColor: color }]}>
            <Body style={[styles.statusText, { color }]}>{request.status}</Body>
          </View>
          {duration && (
            <Body>{duration}</Body>
          )}
        </View>
        <View style={[styles.verticalContent, styles.flex]}>
          <Body numberOfLines={3}>{request.url}</Body>
        </View>
      </View>
    </View>
  )
}

export default NetworkRequestBasicInfo
