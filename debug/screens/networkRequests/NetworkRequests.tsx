import NetworkRequestCard from '@components/networkRequestCard'
import PageContainer from '@components/pageContainer/PageContainer'
import { H1 } from '@components/text'
import { networkRequestStore } from '@stores/NetworkRequestStore'
import React from 'react'
import { View } from 'react-native'
import { useSnapshot } from 'valtio'

import styles from './styles'

const NetworkRequests = () => {
  const { requests } = useSnapshot(networkRequestStore)
  return (
    <PageContainer>
      {requests.length > 0 ? (
        requests.map((request) => (
          <View style={styles.itemWrapper} key={request.id}>
            <NetworkRequestCard request={request} key={request.id} />
          </View>
        ))
      ) : (
        <View style={styles.emptyWrapper}>
          <H1>No Requests</H1>
        </View>
      )}
    </PageContainer>
  )
}

export default NetworkRequests
