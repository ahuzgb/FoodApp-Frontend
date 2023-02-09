import React, { useState } from "react";
import moment, { months } from "moment";
import { useNavigate } from "react-router-dom";
import InstSelection from "./InstSelection";
import "../components/donationForm.css";
import svg1 from "./images/bread.svg";
import svg2 from "./images/milk.svg";
import svg3 from "./images/coffee.svg";
import svg4 from "./images/pasta.svg";
import svg5 from "./images/noodles.svg";
import svg6 from "./images/rice.svg";
import svg7 from "./images/canned.svg";
import svg8 from "./images/chocolate.svg";

const DonationForm = ({ user, token }) => {
  const [articleName, setArticleName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [weight, setWeight] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment());
  const [isGood, setIsGood] = useState(false);
  const [signal, setSignal] = useState(false);
  const [institution, setInstitution] = useState("");

  console.log("TOKEN", token);

  const navigate = useNavigate();

  const categories = [
    {
      name: "Bread",
      pic: svg1,
    },

    {
      name: "Milk(haltbare)",
      pic: svg2,
    },

    {
      name: "Coffee",
      pic: svg3,
    },

    {
      name: "Pasta",
      pic: svg4,
    },

    {
      name: "Cup Noodles/Cup Soup",
      pic: svg5,
    },

    {
      name: "Rice",
      pic: svg6,
    },

    {
      name: "Canned goods",
      pic: svg7,
    },

    {
      name: "Chocolate",
      pic: svg8,
    },
  ];

  const checkExpiration = (currentDate, articleDate) => {
    return currentDate.diff(articleDate, "days");
  };

  const checkEverything = () => {
    if (
      category === "Bread" &&
      checkExpiration(currentTime, expirationDate) > 10
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    if (
      category === "Milk(haltbare)" &&
      checkExpiration(currentTime, expirationDate) > 90
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    if (
      category === "Coffee" &&
      checkExpiration(currentTime, expirationDate) > 365
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    if (
      category === "Pasta" &&
      checkExpiration(currentTime, expirationDate) > 365
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    if (
      category === "Cup noodles/Cup Soup" &&
      checkExpiration(currentTime, expirationDate) > 365
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    if (
      category === "Rice" &&
      checkExpiration(currentTime, expirationDate) > 365
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    if (
      category === "Canned goods" &&
      checkExpiration(currentTime, expirationDate) > 720
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    if (
      category === "Chocolate" &&
      checkExpiration(currentTime, expirationDate) > 365
    ) {
      return alert("according to our parametes, food can not be donated");
    }
    setIsGood(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        article_name: articleName,
        expiration_date: expirationDate,
        weight,
        quantity,
        category,
        institution,
        user: user._id,
        user_id: user._id,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      setIsLoading(false);
      resetForm();
      alert("Donation successfully added");
      navigate("../donation-form");
    }
  };
  const resetForm = () => {
    setArticleName("");
    setExpirationDate("");
    setWeight(0);
    setQuantity(0);
    setCategory("");
    setInstitution("");
    setIsGood(false);
  };

  return (
    <>
      <form className="donation-form" onSubmit={handleSubmit}>
        <div className="daddy-container">
          <div className="donation-fields">
            <span className="inputField_label"></span>
            <div className="donation_fields_child">
              {/* MAKE A DIV FOR EACH INPUT AND LABEL */}
              <fieldset id="fieldset">
                <legend id="legend">THE foodbär TOOL</legend>
                <div className="single_inp">
                  <div>
                    <label>Article name: </label>
                  </div>
                  <input
                    required
                    type="text"
                    onChange={(e) => setArticleName(e.target.value)}
                    value={articleName}
                  />
                </div>
                <div className="single_inp">
                  <div>
                    <label>Expiration date: </label>
                  </div>
                  <input
                    required
                    type="date"
                    onChange={(e) => setExpirationDate(e.target.value)}
                    value={expirationDate}
                  />
                </div>
                <div className="single_inp">
                  <div>
                    <label>Weight: </label>
                  </div>
                  <input
                    required
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                    placeholder="Insert weight"
                  />
                </div>
                <div className="single_inp">
                  <div>
                    <label>Quantity: </label>
                  </div>
                  <input
                    required
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Insert quantity"
                    value={quantity || null}
                  />
                </div>
                {articleName &&
                  expirationDate &&
                  weight &&
                  quantity &&
                  category && (
                    <span className="checkFood" onClick={checkEverything}>
                      Check food
                    </span>
                  )}
              </fieldset>
            </div>
            {isGood && (
              <InstSelection
                setSignal={setSignal}
                setInstitution={setInstitution}
                institution={institution}
                user={user}
                token={token}
              />
            )}
            {isGood && signal ? (
              <button>Donate</button>
            ) : (
              <button disabled></button>
            )}
          </div>

          <div className="donation-categories">
            <span className="categeory_label"></span>
            {categories.map((cat) => (
              <label htmlFor={cat.name}>
                <div className="single_category" key={cat.name}>
                  <input
                    className="checkfield"
                    type="radio"
                    name="category"
                    id={cat.name}
                    value={cat.name}
                    checked={category === cat.name}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <span className="label_cat">{cat.name}</span>
                  <span className="logo_cat">
                    <img
                      src={cat.pic}
                      alt={cat.name}
                      style={{ width: "70px" }}
                    />
                  </span>
                </div>
              </label>
              // HERE
            ))}
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </>
  );
};

export default DonationForm;
