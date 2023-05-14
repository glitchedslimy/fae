import { ClientEvents } from 'discord.js'

export class SpectrumEvent<Key extends keyof ClientEvents> {
  constructor(
    public event: Key,
    public run: (...args: ClientEvents[Key]) => any
  ) {}

  public get eventName(): string {
    return this.event
  }

  public get listener(): (...args: ClientEvents[Key]) => any {
    return this.run
  }
}
