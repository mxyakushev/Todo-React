import {useState} from "react";
import {TodoList, InputField} from "components";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    function addTodo() {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ]);
            setText('');
        }
    }

    function removeTodo(todoId){
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    function toggleTodoComplete(todoId){
        setTodos(
            todos.map(todo => {
                if(todo.id !== todoId) return todo;

                return (
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                )
            })
        )
    }

    return (
        <div className="App">
            <InputField text={text} handleChange={setText} handleSubmit={addTodo}/>
            <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
        </div>
    );
}
