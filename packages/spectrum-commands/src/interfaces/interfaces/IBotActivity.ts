import { ActivityType } from 'discord.js'
export interface IBotActivity {
  type:
    | ActivityType.Playing
    | ActivityType.Streaming
    | ActivityType.Listening
    | ActivityType.Watching
    | ActivityType.Competing
    | undefined
  name: string
}
