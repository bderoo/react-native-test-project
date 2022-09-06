import PageContainer from '@components/pageContainer'
import { H1 } from '@components/text'
import React from 'react'
import { View } from 'react-native'

import Strings from '@/localization'

const Login = () => (
  <PageContainer>
    <View>
      <H1>{Strings._examples.home}</H1>
    </View>
  </PageContainer>
)

export default Login
