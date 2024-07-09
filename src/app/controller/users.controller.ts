import { Request, Response } from "express";
const User = {
  getUser: async (req: Request, res: Response) => {
    res.send("Succesfully");
  },
};

export default User;
