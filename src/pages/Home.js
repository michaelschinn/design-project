import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <div className="decor-NW"></div>
      <div className="decor-NE"></div>
      <div className="decor-SW"></div>
      <div className="decor-SE"></div>
      <div class="img-container">
        <div className="img-wrapper">
          <img
            className="img"
            alt="profile"
            src="https://practicaltyping.com/wp-content/uploads/2020/09/vegeta2.jpg"
          />
        </div>
      </div>
      <div className="heroText">
        <h2>Full-Stack Web Development</h2>
        <p>
          Proin ac lorem sem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Suspendisse facilisis lorem
          sed ligula finibus, eget efficitur risus fringilla.
        </p>
      </div>
      <div className="port-slices">
        <div className="port-slice1"></div>
        <div className="port-slice2"></div>
        <div className="port-slice3"></div>
        <div className="button">
          <Link to="/portfolio">View Portfolio</Link>
        </div>
      </div>
      <div className="hero_bg"></div>
    </div>
  );
}
