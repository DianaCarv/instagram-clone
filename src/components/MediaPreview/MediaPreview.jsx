import { useState } from "react";
import "./MediaPreview.css";
import ArrowIcon from "../Icons/ArrowIcon";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function MediaPreview({ mediaList }) {
  const [indexMedia, setIndexMedia] = useState(0);

  const currentMedia = mediaList[indexMedia];

  console.log("🚀 ~ MediaPreview ~ currentMedia:", currentMedia)

  const nextMedia = () => {
    setIndexMedia((prevIndex) => (prevIndex + 1) % mediaList.length);
  };

  const prevMedia = () => {
    setIndexMedia ((prevIndex) => 
    prevIndex === 0 ? mediaList.length - 1 : prevIndex -1);
  };

  const isLastPosition = () => indexMedia === mediaList.length - 1;
  const isFirstPosition = () => indexMedia === 0;

  return (
    <div className="media-preview">

      {currentMedia.type === "picture" && (
        <img src={currentMedia.url} alt="PostCard" />
      )}

    {currentMedia.type === "video" && (
      <VideoPlayer url= {currentMedia.url} />
      
    )}
      
      <div className="media-preview-arrows">
        {!isFirstPosition() && (
          <ArrowIcon type="left" className="arrow-left" onClick={prevMedia} />
          )}
        
        {!isLastPosition() && (
          <ArrowIcon type="right" className="arrow-right" onClick={nextMedia} />
        )}
      </div>
    </div>
  );
}
 