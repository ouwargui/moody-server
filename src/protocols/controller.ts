import type {NextFunction, Request, Response} from 'express';

type IController = (req: Request, res: Response) => Promise<Response>;

export function Controller(controller: IController) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await controller(req, res);
    } catch (error) {
      return next(error);
    }
  };
}
