import type {NextFunction, Request, Response} from 'express';

type IMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export function Middleware(middleware: IMiddleware) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await middleware(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
}
