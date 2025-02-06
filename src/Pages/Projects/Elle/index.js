import React, {useState} from "react";
import "./styles.css";

const Elle = () => {
    const [selectedElle, setSelectedElle] = useState(0);

    const ElleList = [
        {name:"01", image: "images/elle/bg-01.png", pdf: "pdf/elle/01.pdf"},
        {name:"02", image: "images/elle/bg-02.png", pdf: "pdf/elle/02.pdf"},
        {name:"03", image: "images/elle/bg-03.png", pdf: "pdf/elle/03.pdf"},
        {name:"04", image: "images/elle/bg-04.png", pdf: "pdf/elle/04.pdf"}
    ]

    return(
        <div className="elle-content">
            <div className="elle-background">
                {selectedElle != 0 && <img className="elle-img" src={ElleList[selectedElle-1].image} />}
            </div>
            <div className="elle-menu">
                <div className="elle-menu-item" onMouseEnter={()=>setSelectedElle(1)} onMouseLeave={()=>setSelectedElle(0)} onClick={()=>window.open(ElleList[selectedElle-1].pdf)}>
                    睿士2月2021 mx
                </div>
                <div className="elle-menu-item" onMouseEnter={()=>setSelectedElle(2)} onMouseLeave={()=>setSelectedElle(0)} onClick={()=>window.open(ElleList[selectedElle-1].pdf)}>
                    睿士3月2021 mx
                </div>
                <div className="elle-menu-item" onMouseEnter={()=>setSelectedElle(3)} onMouseLeave={()=>setSelectedElle(0)} onClick={()=>window.open(ElleList[selectedElle-1].pdf)}>
                    睿士3月2021 mx2
                </div>
                <div className="elle-menu-item" onMouseEnter={()=>setSelectedElle(4)} onMouseLeave={()=>setSelectedElle(0)} onClick={()=>window.open(ElleList[selectedElle-1].pdf)}>
                    睿士4月2021 mx
                </div>
            </div>
        </div>
    )
}

export default Elle;