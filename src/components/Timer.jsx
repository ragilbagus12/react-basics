import { useState, useEffect } from "react";

function Timer() {
    const [detik, setDetik] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const intereval = setInterval(() => {
            setDetik((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intereval);
    }, [isRunning]);

    return (
        <div className="p-6 max-w-md mx-auto mt-6 bg-white shadow rounded-lg">
            <h2 className="text-lg font-bold mb-2 ">Timer</h2>
            <p className="text-3xl text-center my-3">{detik}</p>
            <div className="flex gap-2 justify-center">
                <button onClick={() => setIsRunning(!isRunning)} className={`px-4 py-2 text-white ${isRunning ? "bg-yellow-500" : "bg-green-500"}`}>
                    {isRunning ? "Pause" : "Mulai"}
                </button>
                <button onClick={() => {
                    setIsRunning(false);
                    setDetik(0);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer;