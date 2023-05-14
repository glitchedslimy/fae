import glob from 'fast-glob'
import { existsSync } from 'fs'

export async function loadFiles(dirName: string): Promise<string[]> {
  const botFolder = `${process.cwd().replace(/\\/g, '/')}/fae`
  const files = await glob(
    existsSync(botFolder)
      ? `${process.cwd().replace(/\\/g, '/')}/fae/src/${dirName}/**/*.{js,ts}`
      : `${process.cwd().replace(/\\/g, '/')}/src/${dirName}/**/*.{js,ts}`
  )

  for (const file of files) {
    delete require.cache[require.resolve(file)]
  }

  return files
}

export async function loadInternalFiles(dirName: string): Promise<string[]> {
  const files = await glob(`${__dirname}/../../${dirName}/events/**/*.{js,ts}`)

  for (const file of files) {
    delete require.cache[require.resolve(file)]
  }

  return files
}
