function UserCard({ user, onPilih }) {
    const { name, email, role, isActive } = user;

    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center">
            <div>
                <h3>{ name }</h3>
                <p>{ email }</p>
                <p>{ role }</p>
            </div>
            <div className="flex flex-col items-end gap-2">
                <span className={`text-xs px-2 py-1 rounded ${isActive ? "bg-green-200 text-green-700" : "bg-gray-200 text-gray-700"}`}>
                    { isActive ? "Active" : "Inactive" }
                </span>
                <button onClick={() => onPilih(name)} className="text-xs text-blue-500 hover:underline">
                    Pilih
                </button>
            </div>
        </div>
    );
}

export default UserCard;