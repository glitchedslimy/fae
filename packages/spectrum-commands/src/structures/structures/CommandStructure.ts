import { TCommand } from '../../types'

export class SpectrumCommand {
  constructor(commandOptions: TCommand) {
    Object.assign(this, commandOptions)
  }
}
