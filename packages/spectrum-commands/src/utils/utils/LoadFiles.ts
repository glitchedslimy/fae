import glob from 'fast-glob'
import { existsSync } from 'fs'

export async function loadAllFiles(dirName: string): Promise<string[]> {
  const botFolder = `${process.cwd().replace(/\\/g, '/')}/fae`
  const internalFiles = await glob(
    `${__dirname}/../../${dirName}/events/**/*.{js,ts}`
  )
  const externalFiles = await glob(
    existsSync(botFolder)
      ? `${process.cwd().replace(/\\/g, '/')}/fae/src/${dirName}/**/*.{js,ts}`
      : `${process.cwd().replace(/\\/g, '/')}/src/${dirName}/**/*.{js,ts}`
  )

  const allFiles = [...internalFiles, ...externalFiles]

  for (const file of allFiles) {
    delete require.cache[require.resolve(file)]
  }

  return allFiles
}
