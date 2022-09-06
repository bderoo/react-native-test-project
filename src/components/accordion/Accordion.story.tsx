import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import PageContainer from '@/components/pageContainer/PageContainer'
import { H3 } from '@/components/text'

import Accordion from './Accordion'

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
  .add('Accordion', () => (
    <View style={styles.separator}>
      <Accordion
        headerContent={(
          <>
            <H3>Keanu Reeves</H3>
            <H3>123 North Wells Street</H3>
            <H3>Chicago, Illinois 60647</H3>
            <H3>United States of America</H3>
          </>
        )}
        hiddenContent={(
          <>
            <H3>Laurence Fishburne</H3>
            <H3>1014 W. George St.</H3>
            <H3>Chicago, Illinois 60647</H3>
            <H3>United States of America</H3>
          </>
        )}
      />
    </View>
  ))
