import logo from "../assets/Pageimage/Logo.png"
import "./footer.css";

export const Footer = () => {
  return (
    <div className="container footer-add">
      <div className="footer-adres">
        <div className="footer-text">
          <img src={logo} alt="" />
          <p>We are always open to discuss your project and improve your online presence.</p>
        </div>
        <div className="footer-email">
          <div className="call-us">
            <h4>Email me at</h4>
            <p>contact@website.com</p>
          </div>
          <div className="call-us">
            <h4>Call</h4>
            <p>0927 6277 28525</p>
          </div>
        </div>
      </div>
      <div className="footer-talk">
        <h1>Lets Talk!</h1>
        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
      </div>
    </div>
  )
};
