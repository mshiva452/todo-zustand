import { TaskStatus } from "@/lib/constants";
import { format } from "date-fns";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export interface ITodos {
  id: string;
  title: string;
  desc: string;
  status: string;
  createdAt: string;
}
interface ITodoStore {
  todos: ITodos[];
  toggleAddTodo: boolean;
  selectedFilter: string;
  setTodo: (todo: ITodos) => void;
  setFilter: (status: string) => void;
  updateStatus: (id: string) => void;
  toggleTodoModal: () => void;
}
const useTodoStore = create<ITodoStore>()(
  devtools(
    persist(
      (set) => ({
        toggleAddTodo: false,
        selectedFilter: "All Task",
        todos: [
          {
            id: crypto.randomUUID(),
            title: "Learn Shadcn",
            desc: "It's a collection of re-usable components that you can copy and paste into your apps.",
            status: TaskStatus.PENDING,
            createdAt: format(new Date(), "MM/dd/yyyy"),
          },
          {
            id: crypto.randomUUID(),
            title: "Learn Lucide Icon",
            desc: "Lucide contains icons with different variants and states, allowing users to choose the most suitable icon for their needs.",
            status: TaskStatus.COMPLETED,
            createdAt: format(new Date(), "MM/dd/yyyy"),
          },
          {
            id: crypto.randomUUID(),
            title: "Learn Zustand",
            desc: "A small, fast, and scalable bearbones state management solution.",
            status: TaskStatus.PENDING,
            createdAt: format(new Date(), "MM/dd/yyyy"),
          },
          {
            id: crypto.randomUUID(),
            title: "Next Js",
            desc: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
            status: TaskStatus.PENDING,
            createdAt: format(new Date(), "MM/dd/yyyy"),
          },
          {
            id: crypto.randomUUID(),
            title: "Tailwind CSS",
            desc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            status: TaskStatus.PENDING,
            createdAt: format(new Date(), "MM/dd/yyyy"),
          },
          {
            id: crypto.randomUUID(),
            title: "Zod",
            desc: "Zod is a TypeScript-first schema declaration and validation library.",
            status: TaskStatus.PENDING,
            createdAt: format(new Date(), "MM/dd/yyyy"),
          },
          {
            id: crypto.randomUUID(),
            title: "Framer Motion",
            desc: "Framer Motion is a simple yet powerful motion library for React.",
            status: TaskStatus.PENDING,
            createdAt: format(new Date(), "MM/dd/yyyy"),
          },
        ],
        setTodo: (todo) => {
          set((state) => ({
            todos: [...state.todos, todo],
          }));
        },
        setFilter: (status: string) => {
          set(() => ({
            selectedFilter: status,
          }));
        },
        updateStatus: (id: string) => {
          set((state) => ({
            todos: state.todos.map((todo) => {
              if (todo.id === id && todo.id !== TaskStatus.COMPLETED) {
                todo.status = TaskStatus.COMPLETED;
              }
              return todo;
            }),
          }));
        },
        toggleTodoModal: () => {
          set((state) => ({
            toggleAddTodo: !state.toggleAddTodo,
          }));
        },
      }),
      {
        name: "todoStore",
      }
    )
  )
);

export default useTodoStore;
