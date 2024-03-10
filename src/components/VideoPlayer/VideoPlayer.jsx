
import "./VideoPlayer.css"

export default function VideoPlayer({url} ) {
  return (
    <div className="video-player-container">
        <video  className="video-player" src={url} controls loop></video>

    </div>
  )
}
