import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/home.css";
import Icon1 from "./images/garbage.png";
import Icon2 from "./images/home.png";
import Icon3 from "./images/people.png";
import Icon4 from "./images/logo-donation.png";

const Home = ({ user }) => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/donations", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await res.json();
        setDonations(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getData();
    }
  }, [user]);

  console.log("HERE", donations);

  return (
    <div className="container-home">
      <h1 className="header-home">Facts about food waste</h1>
      <div className="container-info">
        <div className="info-box1">
          <span>
            around 1.3 billion tons of food ends up in trash every year
            worldwide
          </span>
          <br />

          <span>
            <img src={Icon1} alt="Icon1" style={{ width: "70px" }} />
          </span>
        </div>
        <div className="info-box2">
          <span>
            around 75 kg of food one person in Germany throws away per year
          </span>

          <br />
          <span>
            <img src={Icon3} alt="Icon3" style={{ width: "70px" }} />
          </span>
        </div>
        <div className="info-box3">
          <span>
            in German households one in eight items of food is thrown away
          </span>
          <br />
          <span>
            <img src={Icon2} alt="Icon2" style={{ width: "70px" }} />
          </span>
        </div>
        <div className="info-box4">
          <span>
            around 6.7 million tons of still edible food are thrown away in
            German households
          </span>
          <br />
          <span></span>
        </div>
        <div className="info-box5">
          <span>
            about 52 percent of all food waste is generated in private
            households
          </span>
          <br />
          <span></span>
        </div>
        <div className="info-box6">
          <span>
            contribute inside the foodbär community and prevent food waste
          </span>
          <br />
          <span className="actionSpan">
            <Link to="/donation-form" id="takeAction">
              <span>&#8594;</span>
              Take action now
              <span>&#8592;</span>
            </Link>
          </span>
        </div>
      </div>
      {/* <Link to="/donation-form">donation-form</Link> */}
    </div>
  );
};
export default Home;
