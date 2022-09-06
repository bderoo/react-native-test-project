/**
 * @format
 */

import { fireEvent, render, screen } from '@testing-library/react-native'
import * as React from 'react'

import { PrimaryButton, SecondaryButton } from './Button'

describe('Buttons', () => {
  it('shows the correct title text', () => {
    const strings = [
      'this is my very specific button text',
      'this is my very specific secondary button text',
    ]
    render(
      <>
        <PrimaryButton
          title={strings[0]}
          onPress={() => {
          }}
        />
        <SecondaryButton
          title={strings[1]}
          onPress={() => {
          }}
        />
      </>,
    )

    const textViews = strings.map((str) => screen.getByText(str).parent)

    strings.forEach((str, i) => {
      const textView = textViews[i]
      if (textView === null) {
        throw new Error(`no text view found for ${i}`)
      }

      const button = textView.parent
      if (button === null) {
        throw new Error(`no button view found for ${i}`)
      }
    })
  })

  it('calls the correct event on press', () => {
    const str = 'this is my very specific button text'
    const baseString = 'my string'
    const changedString = 'my changed string'
    let stringToChange = baseString
    render(<PrimaryButton
      title={str}
      onPress={() => {
        stringToChange = changedString
      }}
    />)

    const textView = screen.getByText(str).parent
    if (textView === null) {
      throw new Error('No text view found')
    }
    const button = textView.parent
    if (button === null) {
      throw new Error('No button view found')
    }
    expect(stringToChange)
      .toBe(baseString)
    fireEvent(button, 'press')
    expect(stringToChange)
      .toBe(changedString)
  })
})
