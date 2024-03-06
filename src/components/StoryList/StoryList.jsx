
import HistoryImg1 from "../../assets/profile.jpg"
import HistoryImg2 from "../../assets/Nezuko.jpg"
import HistoryImg3 from "../../assets/Zeus.jpeg"
import ArrowIcon from "../Icons/ArrowIcon"
import Story from "../Story/Story"

export default function StoryList() {
  return (
    <div className="stories-list">

    <Story urlImg={HistoryImg1} label="Maria" />
    <Story urlImg={HistoryImg2} label="Nezuko Alvarez" />
    <Story urlImg={HistoryImg3} label="Ramon Alberto" />
    <Story urlImg={HistoryImg2} label="Nezu Killokacudo" />
    <Story urlImg={HistoryImg1} label="Diana" />
    <Story urlImg={HistoryImg3} label="Maria Carvajal" />
    <Story urlImg={HistoryImg1} label="Laura Zambrano" />

    <ArrowIcon height={25} width={25} className="stories-arrow-right" />
    </div>
  )
}
