import ProfileImg from "../../assets/profile.jpg"
import "./icons.css";


export default function ProfileIcon() {
  return (
    <div className="profile-container">
        <img className="profile-img" src={ProfileImg} alt="Picture" />
        <label  className="icon-label" style={{ color: 'black' }}>Profile</label>
    </div>
  )
}

