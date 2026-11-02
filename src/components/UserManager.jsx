import { useState } from 'react';
import UserForm from './UserForm';
import UserCard from './UserCard';

function UserManager() {
    const [users, setUsers] = useState([
        { id: 1, name: "Ragil Nugraha", role: "Front-end Developer", isActive: true },
        { id: 2, name: "Budi Jang", role: "Back-end Developer", isActive: false },
    ]);

    const tambahUser = (userBaru) => {
        setUsers([...users, userBaru]);
    }

    const hapusUser = (id) => {
        setUsers(users.filter((u) => u.id !== id));
    };

    const toggleAktif = (id) => {
        setUsers(
            users.map((u) => u.id === id ? { ...u, isActive: !u.isActive } : u)
        );
    };
    return (
    <div>
        <h2>User Manager</h2>
        <UserForm onAdd={tambahUser} />

        {users.length === 0 ? (
            <p>Belum ada user.</p>
        ) : (
            <div className='space-y-3'>
                {users.map((user) => (
                    <div key={user.id} className='flex gap-2 items-start'>
                        <div className='flex-1'>
                            <UserCard user={user} onPilih={() => {}} />
                        </div>
                        <button onClick={() => toggleAktif(user.id)} className='text-xs bg-yellow-400 px-2 py-1'>
                            Toggle
                        </button>
                        <button onClick={() => hapusUser(user.id)} className='text-xs bg-red-400 text-white px-2 py-1 rounded'>
                            Hapus
                        </button>
                    </div>
                ))}
            </div>
        )}
    </div>
    )
};

export default UserManager;

