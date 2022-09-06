import NetworkRequestBasicInfo from '@components/networkRequestBasicInfo'
import { navigate } from '@stores/NavigationStore'
import { NetworkRequest } from '@stores/NetworkRequestStore'
import React from 'react'
import { Pressable, View } from 'react-native'

import { Roots } from '@/navigation'

import styles from './styles'

type Props = {
  request: NetworkRequest,
}

const NetworkRequestCard = ({ request }: Props) => (
  <Pressable onPress={() => navigate(Roots.__RequestInfo, { request })}>
    <View style={styles.wrapper}>
      <NetworkRequestBasicInfo request={request} />
    </View>
  </Pressable>
)

export default NetworkRequestCard
