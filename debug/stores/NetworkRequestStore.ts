// @ts-ignore
import XHRInterceptor from 'react-native/Libraries/Network/XHRInterceptor'
import { proxy } from 'valtio'

import Config from '@/config'

export type Headers = {
  [key: string]: string
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface NetworkRequest {
  id: string
  type: string
  url: string
  method: RequestMethod
  status?: number
  dataSent?: string
  responseContentType?: string
  responseSize?: number
  requestHeaders?: Headers
  responseHeaders?: Headers
  response?: string
  responseURL?: string
  responseType?: string
  timeout?: string
  closeReason?: string
  messages?: string
  serverClose?: unknown
  serverError?: unknown
  startTime?: number
  endTime?: number
  gqlOperation?: string
}

type XHR = {
  _index: number;
  responseHeaders?: Headers;
};

type NetworkRequestStore = {
  requests: Array<NetworkRequest>
  currentXHRId: number
  xhrIdMap: { [key: string]: number }
  startInterceptor: () => void
  addRequest: (method: RequestMethod, url: string, xhr: XHR) => void
  getRequest: (id?: number) => NetworkRequest | undefined
  updateRequest: (index: number, update: Partial<NetworkRequest>) => void
  setRequestHeader: (header: string, value: string, xhr: XHR) => void
  setResponseHeader: (responseContentType: string, responseSize: number, responseHeaders: Headers, xhr: XHR) => void
  sendCallback: (data: string, xhr: XHR) => void
  setResponse: (status: number, timeout: string, response: string, responseURL: string, responseType: string, xhr: XHR) => void
}

const urlAliases = {
  [Config.API_URL]: 'api',
}

const simplifyUrl = (url: string) => {
  const aux = Object.keys(urlAliases)
    .find((key) => url.startsWith(key))
  if (aux) {
    return url.replace(aux, urlAliases[aux])
  }
  return url
}

export const networkRequestStore: NetworkRequestStore = proxy<NetworkRequestStore>({
  requests: [],
  currentXHRId: 0,
  xhrIdMap: {},
  startInterceptor() {
    XHRInterceptor.setOpenCallback(networkRequestStore.addRequest)
    XHRInterceptor.setRequestHeaderCallback(networkRequestStore.setRequestHeader)
    XHRInterceptor.setHeaderReceivedCallback(networkRequestStore.setResponseHeader)
    XHRInterceptor.setSendCallback(networkRequestStore.sendCallback)
    XHRInterceptor.setResponseCallback(networkRequestStore.setResponse)
    XHRInterceptor.enableInterception()
  },
  addRequest(method: RequestMethod, url: string, xhr: XHR) {
    const updatedXHRId = networkRequestStore.currentXHRId
    xhr._index = networkRequestStore.currentXHRId
    networkRequestStore.xhrIdMap[updatedXHRId] = networkRequestStore.requests.length
    networkRequestStore.currentXHRId = updatedXHRId + 1
    const newUrl = simplifyUrl(url)
    const newRequest: NetworkRequest = {
      id: updatedXHRId.toString(),
      type: 'XMLHttpRequest',
      method,
      url: newUrl,
    }
    networkRequestStore.requests.push(newRequest)
  },
  getRequest(id: number | undefined) {
    if (id === undefined) return undefined
    const requestIndex = networkRequestStore.requests.length - networkRequestStore.xhrIdMap[id] - 1
    return networkRequestStore.requests[requestIndex]
  },
  updateRequest(index: number, update: Partial<NetworkRequest>) {
    const networkInfo = networkRequestStore.getRequest(index)
    if (networkInfo) {
      networkRequestStore.requests = networkRequestStore.requests.map((request, i) => {
        if (i === index) {
          return {
            ...request,
            ...update,
          }
        }
        return request
      })
    }
  },
  setRequestHeader(header: string, value: string, xhr: XHR) {
    const networkInfo = networkRequestStore.getRequest(xhr._index)
    const oldRequest = networkRequestStore.requests.find((request) => request.id === networkInfo?.id)
    if (oldRequest) {
      const update = {
        requestHeaders: {
          ...oldRequest.requestHeaders,
          [header]: value,
        },
      }
      networkRequestStore.updateRequest(xhr._index, update)
    }
  },
  setResponseHeader(responseContentType: string, responseSize: number, responseHeaders: Headers, xhr: XHR) {
    networkRequestStore.updateRequest(xhr._index, {
      responseContentType,
      responseSize,
      responseHeaders: xhr.responseHeaders,
    })
  },
  sendCallback(data: string, xhr: XHR) {
    networkRequestStore.updateRequest(xhr._index, {
      startTime: Date.now(),
      dataSent: data,
    })
  },
  setResponse(status: number, timeout: string, response: string, responseURL: string, responseType: string, xhr: XHR) {
    networkRequestStore.updateRequest(xhr._index, {
      endTime: Date.now(),
      status,
      timeout,
      response,
      responseURL,
      responseType,
    })
  },
})
