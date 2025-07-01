import type { Request, Response } from 'express';
import express from 'express';


const validators: any = [
];

const handler = async (req: Request, res: Response) => {
  const { app, event } = req.params
  const dataset = {
    "@timestamp": new Date().getTime(),
    "app": app,
    "event": event,
    "headers": req.headers,
    "ip": req.ip,
    "payload": req.body,
  }
  return res.status(200).json(dataset);
};

export const post = [
  express.json(),
  express.urlencoded({ extended: true }),
  ...validators,
  handler
];
