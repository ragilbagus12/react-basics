import {  useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Belajar React", done: false },
        { id: 2, text: "Latihan useState", done: true },
    ]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");

    const tambah = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, { id:Date.now(), text: input.trim(), done: false }]);
        setInput("");
    };

    const hapus = (id) => setTodos(todos.filter((t) => t.id !== id));
    const toggle = (id) => setTodos(todos.map((t) => (t.id === id ? {...t, done: !t.done } : t)));

    const filteredTodos = todos.filter((t) => {
        if (filter === "active") return !t.done;
        if (filter === "done") return t.done;
        return true;
    });

    const sisa = todos.filter((t) => !t.done).length;

    return (
        <div className="p-6 mx-auto max-w-md  mt-6 bg-white shadow-lg rounded-lg ">
            <h2 className="text-2xl font-bold mb-3">Todo List</h2>
            <form onSubmit={tambah} className="flex- gap-2 mb-4">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Tugas Baru"
                    className="flex-1 border p-2 rounded mr-2"
                />
                <button className="bg-blue-400 text-white px-2 py-2 rounded cursor-pointer hover:bg-blue-500">+</button>
            </form>

            <div className="flex gap-2 mb-4">
                {["all", "active", "done"].map((f) => (
                    <button key={f} onClick={ () => setFilter(f) }
                    className={`px-3 py-1 rounded text-sm ${filter === f ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>
                        {f === "all" ? "Semua" : f === "active" ? "Aktif" : "Selesai" }
                    </button>
                ))}
            </div>
            {filteredTodos.length === 0 ? (
                <p className="text-center text-gray-400 py-4">
                    {filter === "done" ? "Belum ada yang selesai" : filter === "active" 
                    ? "Semua Tugas Sudah Selesai" : "Belum Ada Tugas"}
                </p>
            ) : (
                <ul className="space-y-2">
                    {filteredTodos.map((t) => (
                        <li key={t.id} className="flex items-center gap-2 p-2 border rounded hover:bg-blue-50">
                            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
                            <span className={`flex-1 ${t.done ? "line-through text-gray-400" : ""}`}>
                                {t.text}
                            </span>
                            <button onClick={() => hapus(t.id)} className="text-red-500 text-sm hover:underline">Hapus</button>
                        </li>
                    ))}
                </ul>
            )}
            
            {todos.length > 0 && (
                <p className="mt-4 text-sm text-gray-400 ext-center">
                    Sisa {sisa} dari {todos.length} tugas
                </p>
            )}
        </div>
    );
}

export default TodoApp;