import "bootstrap/dist/css/bootstrap.min.css";
function Toolbar() {
  return (
    <div  style={{ textAlign: "left", alignItems:"left", marginLeft:"9%", marginTop: "0px", color: "white", backgroundColor: "" }}>
       
                <button id="geriyedonbutton_rc" title="Geri" className="bottom-btn">
                    <i className="ion-ios-arrow-left"></i>
                    <img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/circled-chevron-left.png" alt="circled-chevron-left"/>
                </button>
                <button id="ileriyegitbutton_bg" title="İleri" className="bottom-btn hidden-md-down" style={{marginLeft:"10px"}}>
                    <i className="ion-ios-arrow-right"></i>
                    <img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/circled-chevron-right.png" alt="circled-chevron-right"/>
                </button>

                <button title="Yenile" className="bottom-btn" style={{marginLeft:"10px"}}>
                    <i className="ion-ios-refresh-empty"></i>
                    <img width="30" height="30" src="https://img.icons8.com/sf-black/64/available-updates.png" alt="available-updates"/>
                </button>
                <button title="Tam Ekran" className="bottom-btn hidden-md-down" style={{marginLeft:"10px"}} onClick={() => {document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()}}>
                    <i className="ion-arrow-expand"></i>
                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/full-screen.png" alt="full-screen"/>
                </button>
                <input style={{marginLeft:"10px", width:"8%"}} type="text" height={30} width={10} placeholder="Kısayol"  readOnly={true} />
                <input style={{marginLeft:"10px"}} type="text" height={30} placeholder="NE ARAMAK ISTERSEN?"/>
                <button title="Yenile" className="bottom-btn" style={{marginLeft:"10px"}}>
                    <i className="ion-ios-refresh-empty"></i>
                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/search.png" alt="search"/>
                </button>
                <button style={{marginLeft:"10px"}} title="Yenile" className="bottom-btn">
                    <i className="ion-ios-refresh-empty"></i>
                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/filter--v1.png" alt="filter--v1"/>
                </button>
                
                

    </div>
  );
}

export default Toolbar;