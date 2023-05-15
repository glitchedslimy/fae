import glob from 'fast-glob'
import { existsSync } from 'fs'
import path from 'path'

export async function loadAllFiles(dirName: string): Promise<string[]> {
  const botFolder = path.join(process.cwd(), 'fae')
  const internalFilesPromise = glob(
    `${__dirname}/../../${dirName}/events/**/*.{js,ts}`
  )
  let externalFilesPromise
  if (process.env.NODE_ENV === 'production') {
    externalFilesPromise = glob(
      existsSync(botFolder)
        ? path.join(
            process.cwd(),
            'dist',
            'fae',
            'src',
            dirName,
            '**',
            '*.{js,ts}'
          )
        : path.join(process.cwd(), 'dist', 'src', dirName, '**', '*.{js,ts}')
    )
  } else {
    externalFilesPromise = glob(
      existsSync(botFolder)
        ? path.join(process.cwd(), 'fae', 'src', dirName, '**', '*.{js,ts}')
        : path.join(process.cwd(), 'src', dirName, '**', '*.{js,ts}')
    )
  }

  const [internalFiles, externalFiles] = await Promise.all([
    internalFilesPromise,
    externalFilesPromise,
  ])

  const allFiles = [...internalFiles, ...externalFiles]

  for (const file of allFiles) {
    delete require.cache[require.resolve(file)]
  }

  return allFiles
}
