import { storiesOf } from '@storybook/react-native'
import * as React from 'react'

import PageContainer from '@/components/pageContainer/PageContainer'

import Spinner from '.'

storiesOf('Components', module)
  .addDecorator((story) => (
    <PageContainer>
      {story()}
    </PageContainer>
  ))
  .add('Spinner', () => (
    <Spinner />
  ))
