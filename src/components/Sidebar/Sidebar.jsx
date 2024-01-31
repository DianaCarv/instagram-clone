import CreateIcon from "../Icons/CreateIcon";
import Explore from "../Icons/ExploreIcon";
import HomeIcon from "../Icons/HomeIcon";
import LetterInstagram from "../Icons/LetterInstagramIcon";
import MoreIcon from "../Icons/MoreIcon";
import NotificationsIcon from "../Icons/NotificationsIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import RealsIcon from "../Icons/RealsIcon";
import SearchIcon from "../Icons/SearchIcon";
import MessagesIcon from "../Icons/messagesIcon";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar linea-vertical">
      <div className="icons letra-instagram ">
        <LetterInstagram />
      </div>
      <div className="icons home-icon">
        <HomeIcon />
        <label style={{ color: "black" }}>Home</label>
      </div>
      <div className="icons search-icon">
        <SearchIcon />
        <label style={{ color: "black" }}>Search</label>
      </div>
      <div className="icons explore-icon">
        <Explore />
        <label style={{ color: "black" }}>Explore</label>
      </div>
      <div className="icons reals-icon">
        <RealsIcon />
        <label style={{ color: "black" }}>Reals</label>
      </div>
      <div className="icons messages-icon">
        <MessagesIcon />
        <label style={{ color: "black" }}>Messages</label>
      </div>
      <div className="icons notifications-icon">
        <NotificationsIcon />
        <label style={{ color: "black" }}>Notifications</label>
      </div>
      <div className="icons create-icon">
        <CreateIcon />
        <label style={{ color: "black" }}>Create</label>
      </div>

      <ProfileIcon />

      <div className=" more-icon ">
        <MoreIcon />

        <label style={{ color: "black" }}>Further</label>
      </div>
    </div>
  );
};
