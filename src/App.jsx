import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Biodata from './components/Biodata'
import ColorBox from './components/ColorBox'
import ProfileCard from './components/ProfileCard'
import UserList from './components/UserList'
import DocumentTitle from './components/DocumentTitle'
import Timer from './components/Timer'
import UserFromAPI from './components/UserFromAPI'
import UserManager from './components/UserManager'

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
    </div>
  )
}


export default App;