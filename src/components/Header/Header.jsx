
import "./Header.css"
import HistoryImg1 from "../../assets/profile.jpg"
import HistoryImg2 from "../../assets/Nezuko.jpg"
import HistoryImg3 from "../../assets/Zeus.jpeg"
import ArrowRightIcon from "../Icons/ArrowRightIcon"


export const Header = () => {
  return (
    <div className="header"  >
      <div className="stories-list">

      <div className="history-img  section1 ">
        <img src={HistoryImg1} alt="history" />
     
        <label className="short-name-story">Maria</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg2} alt="history" />
        <label className="short-name-story">Nezuko Alvarez</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg3} alt="history" />
        <label className="short-name-story">Ramon Alberto</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg2} alt="history" />
        <label className="short-name-story">Nezu Killokacudo</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg1} alt="history" />
        <label className="short-name-story">Diana </label>
      </div>
      <div className="history-img">
        <img src={HistoryImg3} alt="history" />
        <label className="short-name-story">Maria Carvajal</label>
      </div>
      <div className="history-img">
        <img src={HistoryImg1} alt="history" />
        <label className="short-name-story">Laura Zambrano</label>
      </div>
      <ArrowRightIcon height={25} width={25} className="stories-arrow-right" />
      </div>
    </div>
  )
}
