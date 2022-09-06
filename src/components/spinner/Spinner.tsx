import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { Colors } from '@/theme'

import styles from './styles'

type Props = {
  isTransparent?: boolean,
}

const Spinner = ({ isTransparent }: Props) => (
  <View style={[styles.wrapper, isTransparent ? styles.transparentBackground : styles.solidBackground]}>
    <ActivityIndicator size="large" color={Colors.primary} />
  </View>
)

export default Spinner
