export interface IEvent {
  event: string
  once: boolean
  rest?: boolean
  run: (...args: any) => void
}
