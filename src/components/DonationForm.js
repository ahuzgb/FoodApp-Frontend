import React, { useState } from "react";
import moment, { months } from "moment";
import InstSelection from "./InstSelection";

const DonationForm = ({ user, token }) => {
  const [articleName, setArticleName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [weight, setWeight] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment());
  const [isGood, setIsGood] = useState(false);
  const [signal, setSignal] = useState(false);
  const [institution, setInstitution] = useState("");

  console.log("TOKEN", token);

  const categories = [
    "Bread",
    "Milk(haltbare)",
    "Coffee",
    "Pasta",
    "Cup Noodles/Cup Soup",
    "Rice",
    "Canned goods",
    "Chocolate",
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
      alert("Donation successfully added");
      resetForm();
    }
  };
  const resetForm = () => {
    setArticleName("");
    setExpirationDate("");
    setWeight(0);
    setQuantity(0);
    setCategory("");
  };

  return (
    <>
      <form className="donation-form" onSubmit={handleSubmit}>
        <h3>Donation Form</h3>
        <label>Article name: </label>
        <input
          required
          type="text"
          onChange={(e) => setArticleName(e.target.value)}
          value={articleName}
        />

        <label>Expiration date: </label>
        <input
          required
          type="date"
          onChange={(e) => setExpirationDate(e.target.value)}
          value={expirationDate}
        />

        <label>Weight: </label>
        <input
          required
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />

        <label>Quantity: </label>
        <input
          required
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />

        <label>Category: </label>
        {categories.map((cat) => (
          <div key={cat}>
            <input
              type="radio"
              name="category"
              id={cat}
              value={cat}
              checked={category === cat}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor={cat}>{cat}</label>
          </div>
        ))}
        {articleName && expirationDate && weight && quantity && category && (
          <span className="checkFood" onClick={checkEverything}>
            Check food
          </span>
        )}

        {error && <div className="error">{error}</div>}
        {isGood && (
          <div>
            <p>All possible locations</p>
          </div>
        )}
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
      </form>
    </>
  );
};

export default DonationForm;
