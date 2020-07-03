import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Response, Request, NextFunction, RequestHandler } from "express";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { bodyVal } from "./bodyVal";

export function bodyValidator(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) return res.status(422).send("Invalid req");

    for (let key of keys) {
      if (!req.body[key]) return res.status(422).send("Invalid req");
    }

    next();
  };
}

export function controller(routerPrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routerHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidator(requiredBodyProps);

      if (path) {
        router[method](
          routerPrefix + path,
          ...middlewares,
          validator,
          routerHandler
        );
      }
    }
  };
}
