import React, {useContext, useState} from 'react'
import {useTodoLayerValue} from "./context/TodoContext.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
    const [{todos}, dispatch] = useTodoLayerValue();
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!content) return;
        const newTodo = {
            id: Math.floor(Math.random() * 123213),
            content,
            isCompleted: false
        };

        dispatch({
            type: "ADD_TODO",
            payload: newTodo,
        });

        setContent(" ");
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" className="todo-input" onChange={event => setContent(event.target.value)}
                       value={content}/>
                <button className="todo-button">
                    ADD
                </button>
            </form>
            <TodoList todos={todos}>

            </TodoList>
        </div>
    );
};
export default App
