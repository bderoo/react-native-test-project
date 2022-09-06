import { proxy, snapshot } from 'valtio'

export type Log = {
  level: 'log' | 'warn' | 'error' | 'silent',
  message: any[]
  date: Date
}

type LoggerStore = {
  logs: Array<Log>
  errorCount: number
}

export const loggerStore = proxy<LoggerStore>({
  logs: [],
  errorCount: 0,
})

const printLog = console.log
const printWarn = console.warn
const printError = console.error

const log = (level: 'log' | 'warn' | 'error' | 'silent', ...args: any) => {
  const {
    logs,
    errorCount,
  } = snapshot(loggerStore)
  loggerStore.logs = [{
    level,
    message: args,
    date: new Date(),
  }, ...logs.slice(0, 250)
    .map((log) => log as Log)]
  switch (level) {
  case 'warn':
    printWarn(...args)
    break
  case 'error':
    loggerStore.errorCount = errorCount + 1
    printError(...args)
    break
  case 'silent':
    break
  case 'log':
  default:
    printLog(...args)
    break
  }
}

console.log = log.bind(this, 'log')
console.warn = log.bind(this, 'warn')
console.error = log.bind(this, 'error')
export const addEvent = log.bind(this, 'silent')
