import { useState } from "react";

function UserForm({ onAdd }) {
    const [nama, setNama] = useState("");
    const [role, setRole] = useState("Front-end Developer");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nama.trim()) {
            alert("Nama tidak boleh kosong!");
            return; 
        }

        onAdd({
            id: Date.now(),
            name: nama.trim(),
            role,
            isActive: true,
        });

        setNama("");
        setRole("Front-end Developer");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow mb-4">
            <h3 className="font-bold text-xl mb-3">Tambah User</h3>
            <div className="flex flex-col gap-2">
                <input 
                    type="text" 
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan nama" 
                    className="border p-2 rounded"  
                />
                <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 rounded">
                    <option value="Front-end Developer">Front-end Developer</option>
                    <option value="Back-end Developer">Back-end Developer</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                </select>
                <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500">
                    Tambah Pengguna
                </button>
            </div>
        </form>
    );
}

export default UserForm;