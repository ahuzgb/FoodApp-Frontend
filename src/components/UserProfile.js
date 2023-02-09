import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import svg1 from "./images/bread.svg";
import svg2 from "./images/milk.svg";
import svg3 from "./images/coffee.svg";
import svg4 from "./images/pasta.svg";
import svg5 from "./images/noodles.svg";
import svg6 from "./images/rice.svg";
import svg7 from "./images/canned.svg";
import svg8 from "./images/chocolate.svg";

const UserProfile = ({ user }) => {
  const [donations, setDonations] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);

  const liveUrl = "https://foodbar-eux4.onrender.com";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(liveUrl + "/donations", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await res.json();
        setDonations(data.allDonations);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getData();
    }
  }, [user]);

  useEffect(() => {
    setTotalWeight(
      donations.reduce((acc, donation) => acc + donation.weight, 0)
    );
  }, [donations]);
  const totalDonations = donations.length;

  console.log("HERE", donations);

  return (
    <div className="centerContainer">
      <div className="donations">
        {donations &&
          donations.map((donation) => (
            <div key={donation._id}>
              <h2>{donation.article_name}</h2>
              <h3>{donation.category}</h3>
              <h3>{new Date(donation.createdAt).toLocaleDateString()}</h3>
              <h3>{donation.quantity}</h3>
              <h3>{donation.weight + " kg"}</h3>
              <br />
              <img
                src={
                  donation.category == "Milk(haltbare)"
                    ? svg2
                    : donation.category == "Coffee"
                    ? svg3
                    : donation.category == "Cup Noodles/Cup Soup"
                    ? svg5
                    : donation.category == "Chocolate"
                    ? svg8
                    : donation.category == "Pasta"
                    ? svg4
                    : donation.category == "Canned goods"
                    ? svg7
                    : donation.category == "Rice"
                    ? svg6
                    : donation.category == "Bread"
                    ? svg1
                    : ""
                }
                style={{ height: "60px" }}
              />
            </div>
          ))}
      </div>
      <button className="bottom-link">
        <Link to="/donation-form" className="bottom-link">
          <div>
            <h3>Total Number of Donations: {totalDonations}</h3>
            <br />
            <h3>Total Weight Donated: {totalWeight} kg</h3>
          </div>
          <br />
          Press For a New Donation
        </Link>
      </button>
      <br />
      {/*<button className="bottom-link">
        <a
          href="https://pamelaanderson.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-link"
        >
          <h3>Total Number of Donations: {totalDonations}</h3>

          <h3>Total Weight Donated: {totalWeight} kg</h3>

          <h3>Press For Pamela Anderson</h3>
          <br />
        </a>
      </button>*/}
    </div>
  );
};

export default UserProfile;
