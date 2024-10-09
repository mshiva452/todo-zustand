import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import TaskModel from "@/Components/TaskModel";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App using nextjs, antd, zustand, tailwind, jest",
};

export default function RootLayout({
  children,
  sidebar,
  todolist
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  todolist: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row bg-black w-full h-screen p-2 gap-5 overflow-y-auto">
          <div className="flex flex-col bg-gray-800 text-slate-50 w-1/5 items-center justify-center rounded-md">
            {sidebar}
          </div>
          <div className="flex flex-col bg-gray-800 text-slate-50 w-full items-start p-2 rounded-md">
            <Header />
            {children}
            {todolist}
            <TaskModel />
          </div>
        </div>
      </body>
    </html>
  );
}
