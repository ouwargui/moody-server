import type {NextFunction, Request, Response} from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const dateAndHour = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
  console.log(`[${dateAndHour}]: ${req.method.toUpperCase()} ${req.url}`);
  next();
}
