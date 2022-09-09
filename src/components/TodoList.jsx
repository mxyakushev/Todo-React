import {TodoItem} from "components";

export default function TodoList({todos, toggleTodoComplete, removeTodo}){
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
                    )
                })
            }
        </ul>
    )
}
