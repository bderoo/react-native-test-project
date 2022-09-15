type ValueOf<T> = T[keyof T]

type GenericComponent = React.ReactElement
  | Array<React.ReactElement
  | null>
  | null
  | ReactNode
