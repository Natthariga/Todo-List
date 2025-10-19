"use client";
import { useState , useEffect} from "react";
import CardLayout from "./components/card-layout";
import TodoList from "./components/todo-list";

export default function Home() {
  const [theme , setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
      localStorage.setItem('theme' , theme);
  },[theme])

  return (
    <main className={`font-sans flex flex-col gap-3 justify-center items-center h-screen 
      ${theme === 'light' ? 'bg-gradient-to-r from-gray-100 to-purple-50' : 'bg-gradient-to-r from-gray-800 to-gray-700' }`}>
      <CardLayout theme={theme}>
        <TodoList  theme={theme} setTheme={setTheme}/>
      </CardLayout>
    </main>
  );
}