"use client";
import { useState } from "react";

export default function AddList({ data }) {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        data(input); 
        setInput("");  
    };

    return (
        <div className="w-full flex flex-col md:flex-row justify-between gap-2 mb-4">
            <input
                className="rounded bg-white pl-5 h-11 md:w-full border border-gray-100"
                type="text"
                placeholder="add todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="flex justify-center items-center cursor-pointer rounded bg-green-500 text-white text-sm p-3 w-full md:w-32"
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    );
}
