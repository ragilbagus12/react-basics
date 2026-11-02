import { useState, useEffect } from "react";

function UserFromAPI() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchusers = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) throw new Error("Gagal mengambil data");
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchusers();
    }, []);

    if (loading) {
        return (
            <div className="p-6 text-center text-blue-500 font-semibold">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 text-center text-red-500 font-semibold">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="p-6 max-w-md mx-auto mt-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">User dari API</h2>
                <ul className="space-y-2">
                    {users.map((u) => (
                        <li key={u.id} className="p-3 border rounded hover:bg-blue-50 transition">
                            <p className="font-semibold">{u.name}</p>
                            <p className="text-sm text-gray-500">{u.email}</p>
                            <p className="text-xs text-gray-400">{u.company.name}</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default UserFromAPI;