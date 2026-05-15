import { Request, Response } from "express";
import { User} from "../model/user";

let user : User [] = [];
export const getUser = (req : Request, res : Response) => {
    res.json(user);

}

export const newUser = (req : Request , res : Response) => {
    const{name, age} = req.body();

    const newUser : User = {
        name : name,
        age : age,

    };

    user.push(newUser);

    res.status(201);
}

