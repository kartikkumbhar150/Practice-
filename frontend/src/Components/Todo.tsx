import { useEffect, useState } from "react";

interface Task{
    id : number;
    title : string;
    completed : boolean;
}

const api_url = "http://localhost:3000/tasks";

function todo(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState("");

    const fetchTasks = async () => {
        const response = await fetch(api_url);
        const data = await.reponse.json();

        setTasks(data);
    }
    const addTask = async () => {
        if(title.trim() === "") return;

        const response = await fetch(api_url, {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({title})
        });
        
    }
}