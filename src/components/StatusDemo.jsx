import { useState } from 'react';

function StatusDemo() {
    const [status, setStatus] = useState("idle");
    const [isExpanded, setIsExpanded] = useState(false);

    const simulasi = () => {
        setStatus("loading");
        setTimeout(() => {
            const sukses = Math.random() > 0.3;
            setStatus(sukses ? "success" : "error");
        }, 1500);
    };

    if (status === "loading") {
        return (
            <div className='p-6 max-w-md mx-auto mt-6 bg-white shadow rounded-lg text-center'>
                <div className='animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-3' />
                <p className='text-blue-500 font-semibold'>Loading...</p>
            </div>
        );
    }

    return (
        <div className='p-6 max-w-md mx-auto mt-6 bg-white shadow rounded-lg'>
            <h2 className='text-xl font-bold mb-3'>Status Demo</h2>
            <div className='mb-3'>
                <span className='text-sm text-gray-500'>Status: </span>
                {status === "success" ? (
                    <span className=' text-green-500 font-bold'>Sukses</span>
                ) : status === "error" ? (
                    <span className='text-red-500 font-bold'>Error</span>
                ) : (
                    <span className='text-gray-500'>Idle</span>
                )}
            </div>
            <button onClick={simulasi} disabled={status === "loading"}
            className='bg-blue-500 text-white px-4 py-2 rounded mb-3 disabled:bg-gray-400'>
                Simulasi Request
            </button>

            <div>
                <button onClick={() => setIsExpanded(!isExpanded)} className='text-blue-500 underline text-sm'>
                    { isExpanded ? "Sembunyikan Detail" : "Tampilkan Detail" }
                </button>
                { isExpanded && (
                    <p className='mt-2 text-sm text-gray-500 bg-gray-50  rounded'>
                        Ini konten detail yang hanya muncul saat diperluas. Klik tombol diatas untuk menyembunyikan.
                    </p>
                )}
            </div>
        </div>
    );
}

export default StatusDemo;