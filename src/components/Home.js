import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    /*     <div className="donations">
      {donations.length ? (
        donations.map((donation) => (
          <div key={donation._id}>
            <h2>{donation.title}</h2>
            <p>
              <strong>title: </strong>
              {donation.title}
            </p>
            <p>
              <strong>text: </strong>
              {donation.body}
            </p>
          </div>
        ))
      ) : (
        <h1 style={{ color: "red" }}>No donations found</h1>
      )}
    </div> */
    <div>
      <div>
        <p>Some text about donations and stuff</p>
      </div>

      <Link to="/donation-form">donation-form</Link>
    </div>
  );
};
export default Home;
