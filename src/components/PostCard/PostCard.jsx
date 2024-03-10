import Story from "../Story/Story";
import HistoryImg1 from "../../assets/profile.jpg";
import VerifyButton from "../VerifyButton/VerifyButton";
import MoreOptionsPoints from "../MoreOptionsPoints/MoreOptionsPoints";
import PanelInteraction from "../PanelInteraction/PanelInteraction";
import CommentButton from "../CommentButton";
import ShareButton from "../ShareButton";
import LikeButton from "../LikeButton";
import SaveButton from "../SaveButton";
import NumberLikes from "../NumberLikes";
import CommentSection from "../CommentSection/CommentSection";
import HappyFace from "../HappyFace";
import MediaPreview from "../MediaPreview/MediaPreview";
import "./PostCard.css";

export const PostCard = ({ mediaList }) => {
  return (
    <div className="post-card">
      <div className="post-card-header">
        
        <Story urlImg={HistoryImg1} className="img-story-post-card" />
        <div className="userName">
          <label>Global Sport</label>
        </div>

        <VerifyButton className="verify-button" />
        <label className="last-time">12h</label>
        <MoreOptionsPoints className="points" />
      </div>

      <MediaPreview mediaList={mediaList} />

      <div className="interaction-button-container">
        <LikeButton className="like-button" />
        <CommentButton className="comment-button" />
        <ShareButton className="share-button" />
        <SaveButton className="save-button" />
      </div>
      <NumberLikes likes={152580} />
      <label>
        
        {" "}
        <b> Global Sport</b> March😊{" "}
      </label>
      <CommentSection commentNumber={67} />
      <div className="container-happy-face">
      <label className="add-comment">Add a comment...</label> <HappyFace/>
      </div>
      <PanelInteraction />
    </div>
  );
};
