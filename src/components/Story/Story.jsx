import "./Story.css"

export default function Story({ urlImg, label, className }) {
  return (
    <div className={["history-img", "section1", className].join(" ")}>
      <img src={urlImg} alt="history" />

      {label && (
          <label className="short-name-story"> {label} </label>
      )} 
    </div>
  );
}
