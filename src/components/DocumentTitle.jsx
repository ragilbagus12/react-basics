import { useState, useEffect } from "react";

function DocumentTitle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Total Klik : ${count}`;
    }, [count]);

    return (
        <div className="p-6 max-w-md mx-auto mt-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-2">Document Title</h2>
            <p className="text-gray-500 mb-3">
                Cek judul tab browser! Angka klik: <strong>{count}</strong>
            </p>
            <button onClick={() => setCount((c) => c + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
                +1
            </button>
        </div>
    )
}

export default DocumentTitle;