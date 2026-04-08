import {DragDropContext, Droppable, Draggable} from "@hello-pangea/dnd";
import { useState } from "react";
import {Link} from "react-router-dom";
import "../styles/board.css";

type Task = {
    id: string;
    title: string;
};

type TasksType = {
    pending: Task[];
    progress: Task[];
    completed: Task[];
};

const initialData: TasksType = {
    pending: [
        {id: "1", title: "Install windows"},
        {id: "2", title: "Install Linux"},
        {id: "3", title: "Setup network"}
    ],
    progress: [
        {id: "4", title: "Build React App"},
    ],
    completed: [
        {id: "5", title: "Install Android"},
    ]
};

const Board = () => {
    const [tasks, setTasks] = useState(initialData);

    const onDragEnd = (result: any) => {
        const {source, destination} = result;

        if(!destination) return;

        const sourceCol = source.droppableId as keyof TasksType;
        const destCol = destination.droppableId as keyof TasksType;

        const sourceItems = [...tasks[sourceCol]];
        const destItems = [...tasks[destCol]];

        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);

        setTasks({
            ...tasks,
            [sourceCol]: sourceItems,
            [destCol]: destItems
        });
    };

    return(
        <>
        <div className="board-header">
            <h2>Internship Activity Board</h2>
            <Link to="/add-task" className="add-btn"> + Add Task</Link>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">
                {Object.entries(tasks).map(([columnId, items]) => (
                    <Droppable droppableId={columnId} key={columnId}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="column"
                            >
                                <h3>
                                    {columnId === "pending" && "Pending"}
                                    {columnId === "progress" && "In Progress"}
                                    {columnId === "completed" && "Completed"}
                                </h3>

                                {items.map((task, index) => (
                                    <Draggable
                                     key={task.id}
                                     draggableId={task.id}
                                     index={index}
                                     >
                                        {(provided) => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                            >
                                                {task.title}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
        </>
    );
};

export default Board;