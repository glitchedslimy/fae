import { getServerLanguage, logger } from '@spectrumcommands'
import glob from 'fast-glob'
import { existsSync, readFileSync } from 'fs'

const langCache: { [serverId: string]: { [key: string]: any } } = {}

export async function getLanguageFile(
  serverId: string
): Promise<{ [key: string]: any }> {
  const langFolder = `${process.cwd().replace(/\\/g, '/')}/fae/src/lang`
  const lang = await getServerLanguage(serverId)

  if (!existsSync(langFolder)) {
    logger.error('Language folder does not exist', { service: 'Bot Language' })
    return {}
  }

  if (!lang || !lang.language) {
    logger.error(`Language not found for server ${serverId}`, {
      service: 'Bot Language',
    })
    return {}
  }

  if (langCache[serverId] && langCache[serverId][lang.language]) {
    return langCache[serverId][lang.language]
  }

  const files = await glob(`${langFolder}/**/${lang.language}.json`)

  if (files.length === 0) {
    logger.error(`Language file for ${lang.language} not found`, {
      service: 'Bot Language',
    })
    return {}
  }

  const langfile = readFileSync(files[0], 'utf8')
  const langObj = JSON.parse(langfile)

  if (!langCache[serverId]) {
    langCache[serverId] = {}
  }

  langCache[serverId][lang.language] = langObj

  return langObj
}
