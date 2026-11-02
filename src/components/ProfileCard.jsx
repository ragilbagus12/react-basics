function ProfileCard() {
    const user = {
        name: "Ragil Bagus Nugroho",
        age: 17,
        role: "Front-end Developer",
        avatar: "/fotoku.jpg",
        isOnline: true,
        skills: ["HTML", "CSS", "JavaScript", "Laravel", "React"],
        contact: {
            github: "https://github.com/ragilbagus12",
            whatsapp: "https://wa.me/6285259859686",
        },
    };

    return (
        <div className="mb-3 mx-auto max-w-md bg-slate-800 rounded-xl shadow-lg p-6 overflow-hidden">
            <div className="max-w-md mx-auto flex flex-col">
                <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mx-auto object-cover mb-4 shadow" />
                <h2 className="text-white">Hello There, I'am {user.name}</h2>
                <p className="text-gray-500">I'am a {user.role}</p>
                <p className="text-white">Status: { user.isOnline ? (
                    <span className="text-green-500">● Online</span>
                ) : (
                    <span className="text-red-500">○ Offline</span>)
                }</p>
                <ul className="list-disc pl-5">
                    {user.skills.map((skill) => (
                        <li key={skill} className="text-gray-400">{skill}</li>
                    ))}
                </ul>
                <div className="mt-6 flex flex-row gap-4">
                    <nav className="p-3 bg-indigo-400 hover:bg-indigo-500 rounded-md cursor-pointer">
                        <a href={user.contact.github} className="no-underline text-white">Github</a>
                    </nav>
                    <nav className="p-3 bg-indigo-400 hover:bg-indigo-500 rounded-md cursor-pointer">
                        <a href={user.contact.whatsapp} className="no-underline text-white">Whatsapp</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard