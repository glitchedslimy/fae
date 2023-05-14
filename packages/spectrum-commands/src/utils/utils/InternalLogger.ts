import winston from 'winston'
import kleur from 'kleur'

const customFormat = winston.format.printf((data) => {
  const { level, message, timestamp, service } = data
  return `${timestamp} ${kleur.cyan(`[${level}]`)} on ${kleur.yellow(
    `[${service}]`
  )}: ${kleur.white(message)}`
})

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    customFormat
  ),
  defaultMeta: { service: 'service' },
  transports: [new winston.transports.Console()],
  silent: process.env.NODE_ENV === 'test',
  handleExceptions: true,
  exitOnError: false,
})
