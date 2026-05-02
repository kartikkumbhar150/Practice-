import {Request, Response} from "express";
import { Task } from "../models/task";

let tasks: Task[] = [];
let idCounter = 1;

export const getTasks = (req : Request , res : Response) => {
    res.json(tasks);
};

export const createTask = (req: Request , res : Response) => {
    const {title} = req.body;

    const newTask : Task = {
        id: idCounter++,
        title,
        completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
}
