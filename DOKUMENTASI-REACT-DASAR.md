# Dokumentasi Pembelajaran Tahap 6 — Dasar React JS

**Program:** Magang Hummatech — Divisi Front-end Web
**Tahap:** 6 (Dasar React JS)
**Project:** `latihan-react-dasar`
**Repository:** <https://github.com/ragilbagus12/react-basics>

Dokumen ini menjelaskan materi React dasar yang dipelajari pada tahap 6 beserta contoh component yang benar-benar ada di dalam project ini. Seluruh contoh kode diambil dari file project tanpa mengubah kode aslinya.

---

## 1. Tujuan Pembelajaran

Setelah menyelesaikan tahap ini, peserta mampu:

1. Memahami pengertian React JS dan cara kerjanya.
2. Membuat project React menggunakan Vite.
3. Memahami struktur project React.
4. Menulis JSX dan membuat functional component.
5. Mengirim data antar component menggunakan props.
6. Mengelola data yang berubah menggunakan state (`useState`).
7. Menjalankan efek samping menggunakan `useEffect`.
8. Menangani event (klik, submit, input, dll).
9. Menampilkan UI secara kondisional.
10. Merender list data beserta `key` yang benar.

---

## 2. Ringkasan Materi dan Implementasi

| No | Materi | Implementasi di Project | Status |
|----|--------|--------------------------|--------|
| 1 | Pengertian React JS | Bagian 3 dokumen ini | Selesai |
| 2 | Setup dengan Vite | `vite.config.js`, `package.json`, `index.html` | Selesai |
| 3 | Struktur project | Bagian 5 dokumen ini | Selesai |
| 4 | JSX | Semua file di `src/components` | Selesai |
| 5 | Functional component | `Biodata`, `ColorBox`, `Timer`, dll | Selesai |
| 6 | Props | `Biodata`, `ColorBox`, `UserCard` | Selesai |
| 7 | State (`useState`) | `ColorBox`, `Timer`, `TodoApp`, `StatusDemo`, `UserManager` | Selesai |
| 8 | Hooks (`useEffect`) | `DocumentTitle`, `Timer`, `UserFromAPI` | Selesai |
| 9 | Event handling | `ColorBox`, `Timer`, `TodoApp`, `UserForm` | Selesai |
| 10 | Conditional rendering | `StatusDemo`, `UserFromAPI`, `ProfileCard`, `TodoApp` | Selesai |
| 11 | List & key | `Biodata`, `UserList`, `UserFromAPI`, `TodoApp` | Selesai |

---

## 3. Pengertian React JS

React JS adalah **library JavaScript** untuk membangun antarmuka (user interface) web. React dibuat oleh Meta (Facebook) dan saat ini menjadi salah satu library frontend paling banyak digunakan.

Konsep utama React:

- **Component-based** — UI dipecah menjadi bagian-bagian kecil yang mandiri dan dapat digunakan ulang (contoh: `Biodata`, `UserCard`, `Timer`).
- **Declarative** — kita mendeskripsikan *bagaimana UI seharusnya terlihat* untuk suatu state, lalu React yang mengurus pembaruan DOM.
- **State-driven** — ketika state berubah, React otomatis merender ulang bagian UI yang terdampak.
- **Virtual DOM** — React menghitung perubahan minimal lalu memperbaruinya secara efisien.
- **One-way data flow** — data mengalir dari parent ke child melalui props.

Pada project ini React dijalankan di sisi client menggunakan **Vite** sebagai build tool dan **Tailwind CSS** untuk styling.

---

## 4. Setup Project dengan Vite

### 4.1 Membuat project baru

Langkah sesuai panduan:

```bash
npm create vite@latest
```

Kemudian pilih:

- **Project name:** `latihan-react-dasar`
- **Framework:** `React`
- **Variant:** `JavaScript` (bukan varian `SWC`)

Setelah itu jalankan:

```bash
npm install
npm run dev
```

### 4.2 Menambahkan Tailwind CSS

Tailwind yang digunakan adalah **Tailwind CSS v4** dengan plugin Vite. Referensi: <https://tailwindcss.com/docs/installation/using-vite>

Dependency yang terpasang pada `package.json`:

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "react": "^19.3.1",
    "react-dom": "^19.3.1",
    "tailwindcss": "^4.3.3"
  }
}
```

Konfigurasi Vite pada `vite.config.js`:

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Tailwind diimpor pada file CSS, yaitu `src/index.css`:

```css
@import "tailwindcss";
```

### 4.3 Entry point aplikasi

`index.html` menyediakan elemen root:

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

`src/main.jsx` merender component `App` ke dalam elemen tersebut:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

> `StrictMode` membantu mendeteksi masalah pada kode saat mode development. Ia tidak merender UI tambahan.

---

## 5. Struktur Project

```
latihan-react-dasar/
├── public/
│   ├── favicon.svg
│   ├── fotoku.jpg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Biodata.jsx
│   │   ├── ColorBox.jsx
│   │   ├── DocumentTitle.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── StatusDemo.jsx
│   │   ├── Timer.jsx
│   │   ├── TodoApp.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserFromAPI.jsx
│   │   ├── UserList.jsx
│   │   └── UserManager.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

Keterangan:

- `src/main.jsx` — entry point React.
- `src/App.jsx` — component utama yang menyusun seluruh component latihan.
- `src/components/` — kumpulan component latihan.
- `src/assets/` — aset yang diimpor melalui JavaScript (gambar).
- `public/` — aset statis yang diakses langsung lewat URL (contoh `/fotoku.jpg`).

`App.jsx` menyusun semua component latihan:

```jsx
function App() {
  return (
    <div className='min-h-screen bg-gray-100 py-10'>
      <Biodata 
        nama="Ragil Bagus"
        umur={17}
        hobi={["Membaca", "Ngoding", "Gaming"]}
        isStudent={true}
      />
      <Biodata 
        nama="Budi Sukejang"
        umur={35}
        hobi={["Mancing", "Gaming", "Membaca"]}
        isStudent={false}
      />
      <ColorBox label={"Kotak warna."} /> 
      <UserList />
      <DocumentTitle />
      <Timer />
      <UserFromAPI />
      <UserManager />
      <StatusDemo />
      <TodoApp />
    </div>
  )
}
```

---

## 6. JSX (JavaScript XML)

JSX adalah sintaks yang memungkinkan kita menulis markup mirip HTML di dalam JavaScript. JSX **bukan** HTML dan **bukan** string — ia dikompilasi menjadi pemanggilan `React.createElement`.

Aturan penting JSX:

1. Setiap component harus mengembalikan **satu** elemen root (atau fragment `<>...</>`).
2. Atribut HTML ditulis dalam camelCase (contoh `className`, `onClick`).
3. Ekspresi JavaScript dimasukkan dengan kurung kurawal `{}`.
4. Tag harus ditutup dengan benar (`<img />`, `<input />`).
5. `class` diganti `className`, `for` diganti `htmlFor`.

Contoh JSX di `Biodata.jsx`:

```jsx
<div className="p-6 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold text-gray-600">{nama}</h1>
    <p className="text-gray-400">Umur: {umur}</p>
</div>
```

`{nama}` dan `{umur}` adalah ekspresi JavaScript yang ditampilkan ke layar.

---

## 7. Functional Component

Functional component adalah fungsi JavaScript yang mengembalikan JSX. Nama component **wajib diawali huruf kapital** agar React membedakannya dari tag HTML biasa.

Contoh paling sederhana, `UserCard.jsx`:

```jsx
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
```

Component dapat digunakan seperti tag HTML:

```jsx
<UserCard user={user} onPilih={handlePilih} />
```

---

## 8. Props

Props (properties) adalah data yang dikirim dari **parent component** ke **child component**. Props bersifat **read-only** — child tidak boleh mengubahnya.

### 8.1 Mengirim props

Dari `App.jsx`, component `Biodata` dipanggil dua kali dengan data berbeda:

```jsx
<Biodata 
  nama="Ragil Bagus"
  umur={17}
  hobi={["Membaca", "Ngoding", "Gaming"]}
  isStudent={true}
/>
<Biodata 
  nama="Budi Sukejang"
  umur={35}
  hobi={["Mancing", "Gaming", "Membaca"]}
  isStudent={false}
/>
```

- `nama="Ragil Bagus"` → props bertipe string.
- `umur={17}` dan `isStudent={true}` → props bertipe number/boolean (memakai `{}`).
- `hobi={[...]}` → props bertipe array.

### 8.2 Menerima props dengan destructuring

`Biodata.jsx` menerima props langsung sebagai parameter fungsi:

```jsx
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
```

### 8.3 Props berupa function (callback)

`UserCard` menerima props `onPilih` yang berupa function, lalu memanggilnya saat tombol diklik:

```jsx
<button onClick={() => onPilih(name)} className="text-xs text-blue-500 hover:underline">
    Pilih
</button>
```

Parent (`UserList`) yang menentukan apa yang terjadi:

```jsx
const handlePilih = (nama) => {
    setSelectedUser(nama);
}
```

Pola ini disebut **lifting state up**: state disimpan di parent, child hanya mengirim event ke atas.

---

## 9. State dan `useState`

State adalah data yang dimiliki sebuah component dan dapat berubah seiring interaksi. Ketika state berubah, React merender ulang component tersebut.

Format dasar:

```jsx
const [nilai, setNilai] = useState(nilaiAwal);
```

- `nilai` — nilai state saat ini.
- `setNilai` — function untuk mengubah state.
- `nilaiAwal` — nilai awal saat component pertama kali dirender.

### 9.1 Contoh: `ColorBox.jsx`

```jsx
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
```

Poin penting:

- Component memiliki **dua state**: `warna` dan `count`.
- `setCount((prev) => prev + 1)` memakai **functional update** agar nilai selalu berdasarkan state terbaru.
- Mengubah state memicu render ulang, sehingga warna kotak dan angka ikut berubah.

### 9.2 Contoh state dengan array/object: `TodoApp.jsx`

`TodoApp` mengelola list todo sebagai state dan memperbaruinya tanpa memutasi array lama:

```jsx
const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React", done: false },
    { id: 2, text: "Latihan useState", done: true },
]);

const tambah = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id:Date.now(), text: input.trim(), done: false }]);
    setInput("");
};

const hapus = (id) => setTodos(todos.filter((t) => t.id !== id));
const toggle = (id) => setTodos(todos.map((t) => (t.id === id ? {...t, done: !t.done } : t)));
```

- Menambah data → `[...todos, itemBaru]`.
- Menghapus data → `filter`.
- Mengubah data → `map` + spread object.

React mendeteksi perubahan karena kita membuat **array/object baru**, bukan mengubah yang lama.

---

## 10. Hooks `useEffect`

`useEffect` dipakai untuk menjalankan **efek samping** setelah render, misalnya mengubah `document.title`, memasang timer, atau mengambil data dari API.

Format dasar:

```jsx
useEffect(() => {
    // efek
    return () => {
        // cleanup (opsional)
    };
}, [dependency]);
```

### 10.1 Efek dengan dependency: `DocumentTitle.jsx`

```jsx
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
```

Karena dependency-nya `[count]`, efek berjalan saat pertama render dan setiap kali `count` berubah.

### 10.2 Efek dengan cleanup: `Timer.jsx`

```jsx
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
```

Poin penting:

- `return () => clearInterval(intereval)` adalah **cleanup** untuk mencegah timer ganda/leak saat `isRunning` berubah atau component dilepas.
- Dependency `[isRunning]` membuat efek dipasang saat timer dimulai dan dibersihkan saat di-pause.

### 10.3 Efek untuk fetch data: `UserFromAPI.jsx`

```jsx
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
```

Dependency `[]` (array kosong) membuat efek hanya berjalan **sekali** setelah render pertama.

> Materi fetch API sebenarnya ada di tahap 9. Contoh ini disertakan sebagai latihan tambahan karena sudah diimplementasikan pada project.

---

## 11. Event Handling

React menangani event dengan atribut camelCase seperti `onClick`, `onChange`, `onSubmit`. Nilai yang diberikan adalah **function**, bukan string.

### 11.1 Event klik

```jsx
<button onClick={gantiWarna} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500">
    Ganti Warna
</button>
```

Jika butuh mengirim argumen, bungkus dengan arrow function:

```jsx
<button onClick={() => onPilih(name)} className="text-xs text-blue-500 hover:underline">
    Pilih
</button>
```

### 11.2 Event submit form

`UserForm.jsx`:

```jsx
import { useState } from "react";

function UserForm({ onAdd }) {
    const [nama, setNama] = useState("");
    const [role, setRole] = useState("Front-end Developer");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nama.trim()) {
            alert("Nama tidak boleh kosong!");
            return; 
        }

        onAdd({
            id: Date.now(),
            name: nama.trim(),
            role,
            isActive: true,
        });

        setNama("");
        setRole("Front-end Developer");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow mb-4">
            <h3 className="font-bold text-xl mb-3">Tambah User</h3>
            <div className="flex flex-col gap-2">
                <input 
                    type="text" 
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan nama" 
                    className="border p-2 rounded"  
                />
                <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 rounded">
                    <option value="Front-end Developer">Front-end Developer</option>
                    <option value="Back-end Developer">Back-end Developer</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                </select>
                <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500">
                    Tambah Pengguna
                </button>
            </div>
        </form>
    );
}

export default UserForm;
```

Poin penting:

- `e.preventDefault()` mencegah halaman reload saat form disubmit.
- `onChange={(e) => setNama(e.target.value)}` membuat **controlled input**, yaitu nilai input dikendalikan state.
- Setelah submit, form di-reset dengan `setNama("")` dan `setRole(...)`.

### 11.3 Event dari child ke parent

`UserManager.jsx` mengirim function `tambahUser` ke child:

```jsx
const tambahUser = (userBaru) => {
    setUsers([...users, userBaru]);
}

...

<UserForm onAdd={tambahUser} />
```

Saat form disubmit, `UserForm` memanggil `onAdd(...)`, sehingga state `users` di parent bertambah.

---

## 12. Conditional Rendering

Conditional rendering adalah menampilkan UI berbeda berdasarkan kondisi. React memakai JavaScript biasa (if/ternary/`&&`), bukan directive khusus.

### 12.1 Early return: `StatusDemo.jsx`

```jsx
if (status === "loading") {
    return (
        <div className='p-6 max-w-md mx-auto mt-6 bg-white shadow rounded-lg text-center'>
            <div className='animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-3' />
            <p className='text-blue-500 font-semibold'>Loading...</p>
        </div>
    );
}
```

### 12.2 Ternary: `StatusDemo.jsx`

```jsx
{status === "success" ? (
    <span className=' text-green-500 font-bold'>Sukses</span>
) : status === "error" ? (
    <span className='text-red-500 font-bold'>Error</span>
) : (
    <span className='text-gray-500'>Idle</span>
)}
```

### 12.3 `&&` untuk tampil/sembunyi: `TodoApp.jsx`

```jsx
{todos.length > 0 && (
    <p className="mt-4 text-sm text-gray-400 ext-center">
        Sisa {sisa} dari {todos.length} tugas
    </p>
)}
```

### 12.4 Kondisi bertingkat berdasarkan data: `UserFromAPI.jsx`

```jsx
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
// jika lolos dua kondisi di atas, render daftar user
```

Pola `loading → error → data` adalah pola umum saat mengambil data dari API.

> `ProfileCard.jsx` juga memakai ternary untuk status online/offline, namun component ini belum di-import/dirender di `App.jsx`.

---

## 13. List dan `key`

Merender list dilakukan dengan `Array.map()`. Setiap item **wajib** memiliki prop `key` yang unik dan stabil agar React dapat mengidentifikasi item dengan efisien.

### 13.1 List sederhana: `Biodata.jsx`

```jsx
<ul className="list-disc list-inside">
    {hobi.map((h) => (
        <li key={h}>{h}</li>
    ))}
</ul>
```

Di sini `h` (nama hobi) dipakai sebagai key karena nilainya unik dalam array.

### 13.2 List component: `UserList.jsx`

```jsx
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
```

Poin penting:

- `key={user.id}` memakai id unik dari data.
- `user={user}` mengirim seluruh object sebagai props.
- `onPilih={handlePilih}` mengirim callback.

### 13.3 List dari API: `UserFromAPI.jsx`

```jsx
{users.map((u) => (
    <li key={u.id} className="p-3 border rounded hover:bg-blue-50 transition">
        <p className="font-semibold">{u.name}</p>
        <p className="text-sm text-gray-500">{u.email}</p>
        <p className="text-xs text-gray-400">{u.company.name}</p>
    </li>
))}
```

**Jangan gunakan index array sebagai key** jika list bisa berubah urutan/ditambah/dihapus, karena dapat menyebabkan bug pada state internal item. Gunakan id unik seperti contoh di atas.

---

## 14. Studi Kasus Gabungan: `TodoApp.jsx`

`TodoApp` menggabungkan hampir seluruh materi tahap 6: state, event handling, conditional rendering, list & key, serta controlled input.

```jsx
import {  useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Belajar React", done: false },
        { id: 2, text: "Latihan useState", done: true },
    ]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");

    const tambah = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, { id:Date.now(), text: input.trim(), done: false }]);
        setInput("");
    };

    const hapus = (id) => setTodos(todos.filter((t) => t.id !== id));
    const toggle = (id) => setTodos(todos.map((t) => (t.id === id ? {...t, done: !t.done } : t)));

    const filteredTodos = todos.filter((t) => {
        if (filter === "active") return !t.done;
        if (filter === "done") return t.done;
        return true;
    });

    const sisa = todos.filter((t) => !t.done).length;

    return (
        <div className="p-6 mx-auto max-w-md  mt-6 bg-white shadow-lg rounded-lg ">
            <h2 className="text-2xl font-bold mb-3">Todo List</h2>
            <form onSubmit={tambah} className="flex- gap-2 mb-4">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Tugas Baru"
                    className="flex-1 border p-2 rounded mr-2"
                />
                <button className="bg-blue-400 text-white px-2 py-2 rounded cursor-pointer hover:bg-blue-500">+</button>
            </form>

            <div className="flex gap-2 mb-4">
                {["all", "active", "done"].map((f) => (
                    <button key={f} onClick={ () => setFilter(f) }
                    className={`px-3 py-1 rounded text-sm ${filter === f ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>
                        {f === "all" ? "Semua" : f === "active" ? "Aktif" : "Selesai" }
                    </button>
                ))}
            </div>
            {filteredTodos.length === 0 ? (
                <p className="text-center text-gray-400 py-4">
                    {filter === "done" ? "Belum ada yang selesai" : filter === "active" 
                    ? "Semua Tugas Sudah Selesai" : "Belum Ada Tugas"}
                </p>
            ) : (
                <ul className="space-y-2">
                    {filteredTodos.map((t) => (
                        <li key={t.id} className="flex items-center gap-2 p-2 border rounded hover:bg-blue-50">
                            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
                            <span className={`flex-1 ${t.done ? "line-through text-gray-400" : ""}`}>
                                {t.text}
                            </span>
                            <button onClick={() => hapus(t.id)} className="text-red-500 text-sm hover:underline">Hapus</button>
                        </li>
                    ))}
                </ul>
            )}
            
            {todos.length > 0 && (
                <p className="mt-4 text-sm text-gray-400 ext-center">
                    Sisa {sisa} dari {todos.length} tugas
                </p>
            )}
        </div>
    );
}

export default TodoApp;
```

Alur yang dipelajari:

1. **State** — `todos`, `input`, `filter`.
2. **Controlled input** — `value={input}` + `onChange`.
3. **Event submit** — `onSubmit={tambah}` + `preventDefault`.
4. **Immutability** — spread array/object saat update.
5. **Derived state** — `filteredTodos` dan `sisa` dihitung dari `todos`, bukan state terpisah.
6. **Conditional rendering** — pesan kosong vs daftar.
7. **List & key** — `key={f}` dan `key={t.id}`.

---

## 15. Cara Menjalankan Project

```bash
# install dependency
npm install

# jalankan development server
npm run dev

# cek lint
npm run lint

# build production
npm run build

# preview hasil build
npm run preview
```

Development server biasanya berjalan di `http://localhost:5173`.

---

## 16. Git dan Publikasi

Repository remote:

```
https://github.com/ragilbagus12/react-basics.git
```

Riwayat commit project:

```
e9a62b4 feat: add TodoApp
af5aa80 feat: StatusDemo (just practice)
1707aa2 feat: add UserForm and UserManager components
c5aaa36 first commit
```

Pesan commit mengikuti **Conventional Commits** (<https://www.conventionalcommits.org/en/v1.0.0/>), contoh:

- `feat: add TodoApp` — menambah fitur/component baru.
- `feat: StatusDemo (just practice)` — latihan component.
- `first commit` — commit awal.

Perintah push:

```bash
git add .
git commit -m "docs: add dokumentasi react dasar"
git push origin main
```

---

## 17. Catatan dan Temuan

1. `ProfileCard.jsx` sudah dibuat tetapi belum di-import dan belum dirender di `App.jsx`. Component ini tetap valid sebagai latihan props, conditional rendering, dan list.
2. `UserFromAPI.jsx` sudah melakukan fetch data dari API. Materi ini sebenarnya berada di tahap 9, sehingga menjadi nilai tambah untuk tahap 6.
3. `UserManager.jsx` dan `UserForm.jsx` menunjukkan pola **lifting state up** (state di parent, callback ke child).
4. Styling memakai utility class Tailwind CSS v4 yang diaktifkan melalui plugin `@tailwindcss/vite`.
5. Seluruh component berada di `src/components` dan dirender dari `src/App.jsx`.

---

## 18. Checklist Ketercapaian Tahap 6

- [x] Memahami pengertian React JS
- [x] Setup project React dengan Vite
- [x] Memahami struktur project React
- [x] Menulis JSX
- [x] Membuat functional component
- [x] Menggunakan props
- [x] Menggunakan state dengan `useState`
- [x] Menggunakan `useEffect`
- [x] Menangani event (`onClick`, `onChange`, `onSubmit`)
- [x] Menerapkan conditional rendering
- [x] Merender list dengan `key` yang benar
- [x] Project di-push ke GitHub

---

## 19. Referensi

- Dokumentasi React: <https://react.dev/>
- Vite: <https://vite.dev/>
- Tailwind CSS: <https://tailwindcss.com/docs/installation/using-vite>
- Conventional Commits: <https://www.conventionalcommits.org/en/v1.0.0/>
- Frontend Engineer Handbook: <https://www.fe.engineer/handbook/>
- React Bits: <https://reactbits.dev/>
