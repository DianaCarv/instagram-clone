import { useState } from "react";
import "./MediaPreview.css";
import ArrowIcon from "../Icons/ArrowIcon";

export default function MediaPreview({ mediaList }) {
  const [indexMedia, setIndexMedia] = useState(0);

  const currentMedia = mediaList[indexMedia];

  return (
    <div className="media-preview">
      <img src={currentMedia.url} alt="PostCard" />

      <div className="media-preview-arrows">
        <ArrowIcon type="left"/>
        <ArrowIcon type="right"/>
      </div>
    </div>
  );
}
