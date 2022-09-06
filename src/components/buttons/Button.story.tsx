import SvgIcon from '@components/svgIcon/SvgIcon'
import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import PageContainer from '@/components/pageContainer/PageContainer'
import { Icons } from '@/constants/images'
import { Colors } from '@/theme'

import { PrimaryButton, SecondaryButton, WhiteBorderButton } from './Button'

const styles = StyleSheet.create({
  separator: {
    marginBottom: 20,
  },
})

storiesOf('Components', module)
  .addDecorator((story) => (
    <PageContainer>
      {story()}
    </PageContainer>
  ))
  .add('Primary Button', () => (
    <>
      <View style={styles.separator}>
        <PrimaryButton
          title="Hello"
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <PrimaryButton
          title=""
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <PrimaryButton
          title="Really really really really long button title"
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <PrimaryButton
          title="Button with right icon"
          rightComponent={<SvgIcon image={Icons.arrowRight} color={Colors.black} />}
          onPress={() => {
          }}
        />
      </View>
    </>
  ))
  .add('Secondary Button', () => (
    <>
      <View style={styles.separator}>
        <SecondaryButton
          title="Hello"
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <SecondaryButton
          title=""
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <SecondaryButton
          title="Really really really really long button title"
          onPress={() => {
          }}
        />
      </View>
    </>
  ))
  .add('White Border Button', () => (
    <>
      <View style={styles.separator}>
        <WhiteBorderButton
          title="Hello"
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <WhiteBorderButton
          title=""
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <WhiteBorderButton
          title="Really really really really long button title"
          onPress={() => {
          }}
        />
      </View>
    </>
  ))
