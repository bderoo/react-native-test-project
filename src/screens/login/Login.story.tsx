import { storiesOf } from '@storybook/react-native'
import * as React from 'react'

import Login from './Login'

storiesOf('Screens > Auth', module)
  .add('Login', () => (
    <Login />
  ))
