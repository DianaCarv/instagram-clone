
import "./Header.css"
import HistoryImg1 from "../../assets/profile.jpg"
import HistoryImg2 from "../../assets/Nezuko.jpg"
import HistoryImg3 from "../../assets/Zeus.jpeg"


export const Header = () => {
  return (
    <div className="header  "  >
      <div className="history-img ">
        <img src={HistoryImg1} alt="history" />
     
        <label>Maria</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg2} alt="history" />
        <label>Nezuko</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg3} alt="history" />
        <label>Ramon</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg2} alt="history" />
        <label>Nezu</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg1} alt="history" />
        <label>Diana</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg3} alt="history" />
        <label>Mar</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg1} alt="history" />
        <label>Lau</label>
        <button className="my-button">></button>
      </div>
      
    </div>
  )
}
