import React, { useState } from "react";
import moment, { months } from "moment";

const DonationForm = () => {
  const [articleName, setArticleName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [weight, setWeight] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment());
  const [isGood, setIsGood] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    console.log(category);
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
    console.log(checkExpiration(currentTime, expirationDate));

    const response = await fetch("http://localhost:8080/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        article_name: articleName,
        expiration_date: expirationDate,
        weight,
        quantity,
        category,
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
      setIsGood(true);
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
          type="text"
          onChange={(e) => setArticleName(e.target.value)}
          value={articleName}
        />

        <label>Expiration date: </label>
        <input
          type="date"
          onChange={(e) => setExpirationDate(e.target.value)}
          value={expirationDate}
        />

        <label>Weight: </label>
        <input
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />

        <label>Quantity: </label>
        <input
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
        <button>Submit</button>
        {error && <div className="error">{error}</div>}
        {isGood && (
          <div>
            <p>All possible locations</p>
          </div>
        )}
      </form>
    </>
  );
};

export default DonationForm;
