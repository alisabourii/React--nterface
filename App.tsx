//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/SideBar"


function App() {
  const items = ["Favoriler", "Cari", "Stok", "Alış","Satış","Banka","Kasa","Çek-Senet","Raporlar","Üretim","WEB","Araçlar","Ayarlar"];
  const icons = ["⭐","👤","📦","🛒","💰","🏦","💳","📝","📊","🏭","🌐","🛠","⚙"];
  return (
    <>
      <SideBar items={items} icons={icons} logo="../src\assets\logo.svg"></SideBar>
      
    </>
  )
}

export default App
