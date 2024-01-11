import {Request, Response} from 'express';

export default class Health {
   static healthChecker(_req:Request, res: Response,):void {
      res.json({ running: true, code: 0, message: "Server working correctly" });
   }
}