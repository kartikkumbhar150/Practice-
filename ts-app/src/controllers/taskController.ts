import {Request, Response} from "express";
import { Task } from "../models/task";

let tasks: Task[] = [];
let idCounter = 1;


export const getTasks = (req : Request , res : Response) => {
    res.json(tasks);
};

export const createTask = (req: Request , res : Response) => {

    const cachedTasks = caches.get<Task[]> ("tasks");
    const {title} = req.body;

    const newTask : Task = {
        id: idCounter++,
        title,
        completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};
export const updateTask = (req : Request , res : Response) => {
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);

    if(!task){
        return res.status(404).json({
            message : "Task not found"
        })
    }
    task.completed = !task.completed;
    res.json(task);
};

export const deleteTask = (req : Request, res : Response) => {
    const id = Number(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message : "Task Deleted"
    });
}


