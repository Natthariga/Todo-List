"use client";
import { useState, useEffect } from "react";
import AddList from "./add-list";
import Search from "./search";
import { ClockIcon, MoonIcon, SunIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function TodoList({ theme, setTheme }) {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("filter");

    useEffect(() => {
        const stored = localStorage.getItem("todos");
        if (stored) setTodos(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // add todo
    const addTodo = (text) => {
        if (!text.trim()) return;
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text,
            done: false,
            createdAt: new Date().toLocaleDateString()
        };
        setTodos([newTodo, ...todos]);
    };

    // toggle done
    const toggleDone = (id) => {
        const done = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        });
        setTodos(done);
    };

    // filter
    const filteredTodos = todos.filter((t) => {
        if (filter === "done") return t.done;
        if (filter === "notdone") return !t.done;
        return true;
    });

    // theme
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className="space-y-5 flex flex-col w-full h-[70vh] ">
            <div className="flex justify-between items-center">
                <h1 className={`text-4xl font-bold text-start 
                ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>
                    Todo List
                </h1>
                <div
                    onClick={toggleTheme}
                    className={`flex justify-center items-center p-2 w-12 rounded-sm cursor-pointer 
              ${theme === "light" ? "bg-yellow-100" : "bg-gray-800"}`}
                >
                    {theme === "light" ? (
                        <SunIcon className="w-5 h-5 text-orange-900" />
                    ) : (
                        <MoonIcon className="w-5 h-5 text-white" />
                    )}
                </div>
            </div>

            <Search filter={filter} setFilter={setFilter} />
            <AddList data={addTodo} />

            {/* list */}
            <ul className="space-y-2 overflow-y-auto">
                {filteredTodos.map((todo) => (
                    <li
                        key={todo.id}
                        className="grid grid-cols-[1fr_1fr_auto] items-center bg-white px-4 py-3 rounded shadow-sm hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div
                            className={`flex items-center gap-3 ${todo.done ? "line-through text-gray-400" : "text-gray-800"
                                }`}
                            onClick={() => toggleDone(todo.id)}
                        >
                            <input
                                type="checkbox"
                                readOnly
                                checked={todo.done}
                            />
                            {todo.text}
                        </div>

                        <p className="flex items-center gap-2 rounded-md p-2 text-xs text-gray-500">
                            <ClockIcon className="w-5 h-5" />
                            {todo.createdAt}
                        </p>

                        <button
                            onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                            className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 text-xs"
                        >
                            <TrashIcon className="w-4 h-4" />
                        </button>
                    </li>
                ))}
            </ul>
            {filteredTodos.length === 0 && (
                <p className="text-center text-gray-400">Not found.</p>
            )}
        </div>
    );

}