import "./Content.css";
import img1 from "../images/content/img1.jpg";
import img2 from "../images/content/img2.jpg";
import img3 from "../images/content/img3.jpg";

export default function Content() {
  return (
    <div className="content">
      <div className="content1">
        <img src={img1} alt="" className="contentImg" />
        <h1 className="contentTitle">Fruit restaurant</h1>
        <p className="contentDescription">
          The Setouchi Fruit Cafe is full of seasonal fruits you can pick by
          hand, as well as a delicious menu of savory and sweet dishes.
        </p>
      </div>
      <div className="content2">
        <img src={img2} alt="" className="contentImg" />
        <h1 className="contentTitle">Fruit restaurant</h1>
        <p className="contentDescription">
          The Setouchi Fruit Cafe is full of seasonal fruits you can pick by
          hand, as well as a delicious menu of savory and sweet dishes.
        </p>
      </div>
      <div className="content3">
        <img src={img3} alt="" className="contentImg" />
        <h1 className="contentTitle">Fruit restaurant</h1>
        <p className="contentDescription">
          The Setouchi Fruit Cafe is full of seasonal fruits you can pick by
          hand, as well as a delicious menu of savory and sweet dishes.
        </p>
      </div>
    </div>
  );
}
