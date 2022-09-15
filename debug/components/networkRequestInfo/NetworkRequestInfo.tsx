import { PrimaryButton } from '@components/buttons/Button'
import JsonRepresentation from '@components/jsonRepresentation'
import NetworkRequestBasicInfo from '@components/networkRequestBasicInfo'
import { Body, H3 } from '@components/text'
import Clipboard from '@react-native-community/clipboard'
import { NetworkRequest } from '@stores/NetworkRequestStore'
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react'
import { View } from 'react-native'
// @ts-ignore
import BlobFileReader from 'react-native/Libraries/Blob/FileReader'

import Strings from '@/localization'

import styles from './styles'

type Props = {
  request: NetworkRequest,
}

const NetworkRequestInfo = ({ request }: Props) => {
  const [response, setResponse] = useState<string>()
  const escapeQuotes = useCallback((str: string) => (
    str.replace?.(/'/g, '\\\'')
  ), [])

  const curl = useMemo(() => {
    let headersPart = request.requestHeaders
      && Object.entries(request.requestHeaders)
        .map(([key, value]) => `'${key}: ${escapeQuotes(value)}'`)
        .join(' -H ')
    headersPart = headersPart ? `-H ${headersPart}` : ''

    const body = request.dataSent && escapeQuotes(request.dataSent)

    const methodPart = request.method !== 'GET'
      ? `-X${request.method.toUpperCase()}` : ''
    const bodyPart = body ? `-d '${body}'` : ''

    const parts = [
      'curl',
      methodPart,
      headersPart,
      bodyPart,
      `'${request.url}'`,
    ]

    return parts.filter(Boolean).join(' ')
  }, [request])

  const renderString = useCallback((
    jsonString: string | undefined,
    responseBodyType: string | null,
  ) => {
    if (jsonString) {
      if (responseBodyType === 'application/json') {
        try {
          const parsed = JSON.parse(jsonString)
          return (
            <JsonRepresentation data={parsed} />
          )
        } catch (e) {
          return <Body>{jsonString}</Body>
        }
      }
      return <Body>{jsonString}</Body>
    }
    return null
  }, [])

  const parseBlob = useCallback(async (blob?: string) => {
    const blobReader = new BlobFileReader()
    blobReader.readAsText(blob)
    return new Promise<string>((resolve, reject) => {
      const handleError = () => {
        reject(blobReader.error)
      }

      blobReader.addEventListener('load', () => {
        resolve(blobReader.result)
      })
      blobReader.addEventListener('error', handleError)
      blobReader.addEventListener('abort', handleError)
    })
  }, [])

  const fromEntries = useCallback((arr: any[]) => {
    arr.reduce((acc, [k, v]) => {
      acc[k] = v
      return acc
    }, {})
  }, [])

  const parseData = useCallback((data: any) => {
    try {
      if (data?._parts?.length) {
        return fromEntries(data?._parts)
      }
      return JSON.parse(data)
    } catch (e) {
      return { data }
    }
  }, [])

  const stringify = useCallback((str?: string) => (
    JSON.stringify(parseData(str), null, 2)
  ), [])

  const responseBodyString = useCallback(async () => {
    if (request.responseType === 'blob') {
      const blob = await parseBlob(request.response)
      return stringify(blob)
    }
    return stringify(request.response)
  }, [request])

  useEffect(() => {
    const f = async () => {
      setResponse(await responseBodyString())
    }
    f()
  }, [request])

  const requestBody = useMemo(() => {
    const requestBodyType = request.method === 'POST'
    && request.requestHeaders
    && request.requestHeaders['Content-Type']
      ? request.requestHeaders['Content-Type'] : null
    return renderString(request.dataSent, requestBodyType)
  }, [request.dataSent, request.method, request.requestHeaders])

  return (
    <View>
      <NetworkRequestBasicInfo request={request} />
      {request.requestHeaders
        && Object.keys(request.requestHeaders).length > 0 && (
        <>
          <View style={styles.header}>
            <H3>{Strings.internal.requestHeaders}</H3>
          </View>
          <View>
            {Object.keys(request.requestHeaders).map((key) => (
              <View key={key} style={styles.headerWrapper}>
                <Body style={styles.headerTitle}>
                  {key}
                  :&nbsp;
                </Body>
                <Body>{request.requestHeaders?.[key]}</Body>
              </View>
            ))}
          </View>
        </>
      )}
      {request.responseHeaders
        && Object.keys(request.responseHeaders).length > 0 && (
        <>
          <View style={styles.header}>
            <H3>{Strings.internal.responseHeaders}</H3>
          </View>
          <View>
            {Object.keys(request.responseHeaders).map((key) => (
              <View key={key} style={styles.headerWrapper}>
                <Body style={styles.headerTitle}>
                  {key}
                  :&nbsp;
                </Body>
                <Body>{request.responseHeaders?.[key]}</Body>
              </View>
            ))}
          </View>
        </>
      )}
      {request.dataSent && (
        <>
          <View style={styles.header}>
            <H3>{Strings.internal.requestBody}</H3>
          </View>
          <View>
            {requestBody}
          </View>
        </>
      )}
      {request.response && (
        <>
          <View style={styles.header}>
            <H3>{Strings.internal.responseBody}</H3>
          </View>
          {response && (
            <View>
              <JsonRepresentation data={JSON.parse(response)} />
            </View>
          )}
        </>
      )}
      <View>
        <PrimaryButton
          title="Copy as JSON"
          onPress={() => {
            const json = JSON.stringify(request, null, 2)
            console.warn('Copied to clipboard')
            Clipboard.setString(json)
          }}
        />
        <PrimaryButton
          title="Copy as curl"
          onPress={() => {
            console.warn('Copied to clipboard')
            Clipboard.setString(curl)
          }}
        />
      </View>
    </View>
  )
}

export default NetworkRequestInfo
