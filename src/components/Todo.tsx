import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchParticularTodo, fetchTodos } from "../store/todo-actions";
import "./Todo.css"

const Todo = () => {
    const [todo_id, setTodo_id] = useState(1);
    const dispatch = useAppDispatch();
    const allTodos = useAppSelector(state => state.todo.all_todos);
    const particularTodo = useAppSelector(state => state.todo.particular_todo);

    const clickHandler = () => [ dispatch(fetchTodos()) ];
    const searchHandler = () => {
        dispatch(fetchParticularTodo(todo_id))
    }

    const checkTodo = ():boolean => {
        return !(allTodos.length === 0)
    }

    const checkParticularTodo = ():boolean => {
        return !(particularTodo.id === 0)
    }

    return(
        <>
            <div>
                <label>Enter the todo id: </label>
                <input onChange={(event) => {setTodo_id(parseInt(event.target.value))}}></input>

                <button onClick={searchHandler}> Find </button>
                <div>
                    <h3>Particular TODO </h3>
                    {checkParticularTodo() && 
                        (
                            <div className="todo-container" key={particularTodo.id}>
                                <p className="todo-child1">{particularTodo.id}</p>
                                <p className="todo-child2">{particularTodo.userId}</p>
                                <p className="todo-child3">{particularTodo.title}</p>
                                <p className="todo-child4">{particularTodo.completed}</p>
                            </div>
                        )
                    }
                </div>

                <div>
                    <button onClick={clickHandler}> All Todos </button>
                    <div>
                        <h3>TODO list </h3>
                        <div className="todo-container">
                            <p className="todo-child1">ID</p>
                            <p className="todo-child2">USER ID</p>
                            <p className="todo-child3">TITLE</p>
                        </div>
                        {checkTodo() && 
                            allTodos.map((todo) => (
                                <div className="todo-container" key={todo.id}>
                                    <p className="todo-child1">{todo.id}</p>
                                    <p className="todo-child2">{todo.userId}</p>
                                    <p className="todo-child3">{todo.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;