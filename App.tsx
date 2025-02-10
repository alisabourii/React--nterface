//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/SideBar"
import Toolbar from "./components/Toolbar";


function App() {
  const items = ["Favoriler", "Cari", "Stok", "Alış","Satış","Banka","Kasa","Çek-Senet","Raporlar","Üretim","WEB","Araçlar","Ayarlar"];
  const icons = ["⭐","👤","📦","🛒","💰","🏦","💳","📝","📊","🏭","🌐","🛠","⚙"];
  return (
    <>
      <SideBar items={items} icons={icons} logo="../src\assets\logo.svg"></SideBar>
      <Toolbar></Toolbar>
    </>
  )
}

export default App
