function Biodata({nama, umur, hobi, isStudent}) {
    return (
        <div className="p-6 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-600">{nama}</h1>
            <p className="text-gray-400">Umur: {umur}</p>
            <p className="text-gray-400">
                Status: {isStudent ? "Siswa Aktif" : "Bukan Siswa"}
            </p>
            <h2 className="mt-4 font-semibold">Hobi:</h2>
            <ul className="list-disc list-inside">
                {hobi.map((h) => (
                    <li key={h}>{h}</li>
                ))}
            </ul>
        </div>
    );
}

export default Biodata;