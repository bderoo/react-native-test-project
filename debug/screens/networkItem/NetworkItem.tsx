import NetworkRequestInfo from '@components/networkRequestInfo'
import PageContainer from '@components/pageContainer/PageContainer'
import { RouteProp } from '@react-navigation/native'
import React from 'react'

import { Roots, RootStackParamList } from '@/navigation'

type Props = {
  route: RouteProp<RootStackParamList, Roots.__RequestInfo>
}

const NetworkItem = ({ route }: Props) => (
  <PageContainer>
    <NetworkRequestInfo request={route.params.request} />
  </PageContainer>
)

export default NetworkItem
