import { PrimaryButton } from '@components/buttons/Button'
import PageContainer from '@components/pageContainer'
import { H3 } from '@components/text'
import React from 'react'
import { View } from 'react-native'

import Strings from '@/localization'
import { Roots } from '@/navigation'
import { login } from '@/stores/AuthStore'
import { navigate } from '@/stores/NavigationStore'

import styles from './styles'

const Login = () => {
  const handleLogin = () => {
    login('test_user')
      .then(() => {
        navigate(Roots.Home)
      })
  }
  return (
    <PageContainer>
      <View style={styles.headerWrapper}>
        <H3>{Strings._examples.hello}</H3>
      </View>
      <PrimaryButton title={Strings._examples.login} onPress={handleLogin} />
    </PageContainer>
  )
}

export default Login
