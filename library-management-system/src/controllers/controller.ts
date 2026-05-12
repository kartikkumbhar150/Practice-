import { Request, Response } from "express";
import { Book } from "../models/model"


let book : Book[] = [];
export const getBook = (req : Request, res : Response) => {
    res.json(book);
}
let idCounter = 1;

export const addBook = (req : Request, res : Response) => {
    
    const{title} = req.body();

    const newBook : Book = {
        id: idCounter++,
        title,
        available: false,
    };
    book.push(newBook);
    res.status(201);
}