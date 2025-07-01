import morgan from 'morgan'
import chalk from 'chalk';
import { Request, Response } from 'express';

morgan.token('user-agent', function (req : Request) { return chalk.gray(req.headers['user-agent']) })
morgan.token('remote-addr', function (req : Request) { return chalk.black.bgWhite(req.headers['cf-connecting-ip'] ?? req.ip)  })
morgan.token('status', function (req : Request, res : Response) {
  req;
  return res.statusCode < 300 ?
    chalk.green(res.statusCode)
    : res.statusCode < 400 ?
      chalk.yellow(res.statusCode)
      : res.statusCode < 500 ?
        chalk.red(res.statusCode)
          :chalk.white.bgRed(res.statusCode)
})
morgan.token('response-time', function getResponseTimeToken (req : Request, res : Response) : any {
  // @ts-ignore:
  if (!req._startAt || !res._startAt) {
    return
  }

  // @ts-ignore:
  const t = parseFloat(((res._startAt[0] - req._startAt[0]) * 1e3 + (res._startAt[1] - req._startAt[1]) * 1e-6).toFixed(3))

  return t < 200 ?
    chalk.green(`${t}ms`)
    : t < 600 ?
      chalk.yellow(`${t}ms`)
        : chalk.red(`${t}ms`)

})


export default morgan('[:date[iso]] (:status) :method :url - :response-time - :remote-addr | :user-agent | :referrer')

