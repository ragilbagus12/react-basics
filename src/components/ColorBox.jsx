import { useState } from "react";

function ColorBox({ label }) {
    
    const daftarWarna = [
        "bg-blue-500",
        "bg-red-500",
        "bg-pink-500",
        "bg-green-500",
        "bg-yellow-500",
    ];

    const [warna, setWarna] = useState(daftarWarna[0]);
    const [count, setCount] = useState(0);

    const gantiWarna = () => {
        const randomIndex = Math.floor(Math.random() * daftarWarna.length);
        setWarna(daftarWarna[randomIndex]);
        setCount((prev) => prev + 1);
    };

    const reset = () => {
        setWarna(daftarWarna[0]);
        setCount(0);
    }

    return (
        <div className="p-6 max-w-md mx-auto mt-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-bold mb-2">{ label }</h2>
            <div className={`w-full h-32 rounded-lg transition-all ${ warna }`} />
            <p className="text-gray-500 mt-2">Total Klik: {count}</p>
            <div className="mt-4 flex gap-2">
                <button onClick={gantiWarna} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500">
                    Ganti Warna
                </button>
                <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500">
                    Reset Button
                </button>
            </div>
        </div>
    )
}

export default ColorBox;