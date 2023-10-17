import "./title.css"
import kam from "../../assets/Pageimage/kampiyuter.png"

const Title = () => {
  return (
    <div className="title-page">
      <div className="title-text">
        <h4>About us</h4>
        <h1>Our designs solve problems</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      <div className="title-img">
        <img src={kam} alt="" />
      </div>
    </div>
  )
}

export default Title