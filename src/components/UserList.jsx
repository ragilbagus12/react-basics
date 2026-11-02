import { useState } from "react";
import UserCard from "./UserCard";

function UserList() {
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { id: 1, name: "Ragil Bagus", email: "ragilbagus2211@gmail.com", role: "Front-end Developer", isActive: true },
        { id: 2, name: "Budi Sukejang", email: "budisukejang12@gmail.com", role: "Back-end Developer", isActive: false },
        { id: 3, name: "Siti Nurhaliza", email: "sitinurhaliza@gmail.com", role: "UI/UX Designer", isActive: true },
        { id: 4, name: "Ahmad Fauzi", email: "fauzijos@gmail.com", role: "Quality Assurance", isActive: false },
    ];

    const handlePilih = (nama) => {
        setSelectedUser(nama);
    }

    return (
        <div className="p-6 mx-w-md mx-auto mt-6">
            <h2 className="text-xl font-bold mb-4">Daftar Pengguna</h2>
            <div className="space-y-3">
                {users.map((user) => (
                    <UserCard 
                    key = {user.id}
                    user = {user}
                    onPilih = {handlePilih}
                    />
                ))}
            </div>
            {selectedUser && (
                <p className="mt-4 text-green-700 font-semibold">
                    User Dipilih: {selectedUser}
                </p>
            )}
        </div>
    );
}

export default UserList;