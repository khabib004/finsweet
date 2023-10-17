import "./Pricing.css"
import teacher from "../../assets/Pageimage/teacher.png"


const Pricing = () => {
  return (
    <div className="container section-table" >
      <main>
        <div className="main-text">
          <h2>Goal focussed</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="main-text">
          <h2>Continuous improvement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </main>
      <img src={teacher} alt="" />
    </div>
  )
}

export default Pricing