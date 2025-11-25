import { NextFunction, Request, Response } from 'express';

export function LoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(
    `Metodo ${req.method} utilizado en Ruta ${req.url} el dia: ${new Date().toLocaleDateString()}. A las ${new Date().toLocaleTimeString()}`,
  );
  next();
}
