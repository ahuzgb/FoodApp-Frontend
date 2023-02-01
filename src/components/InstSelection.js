import { useState, useEffect } from "react";
import allLocations from "./data/locations.json";

export default function InstSelection({
  setSignal,
  setInstitution,
  institution,
  user,
  token,
}) {
  const [currentUser, setCurrentUser] = useState(null);

  const url = `http://localhost:8080/users/${user._id}`;

  function onChangeValue(event) {
    setInstitution(event.target.value);
    console.log(event.target.value);
    setSignal(true);
  }

  useEffect(() => {
    const getCurrentUser = async () => {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await response.json();

      setCurrentUser(user);
    };
    getCurrentUser();
  }, []);

  console.log("CURRENT USER FULL", currentUser);

  const locations = allLocations.filter(
    (location) => location.city === currentUser.city
  );

  return (
    <>
      <h2>institutions</h2>
      <div className="locationPicker" onChange={onChangeValue}>
        {locations?.map((location) => (
          <div className="singleLocation">
            <input
              id={location.name}
              type="radio"
              checked={institution == location.id}
              name="inst"
              value={location.id}
              required
            />
            <label htmlFor={location.name}>{location.name}</label>
            <span>Street: some street name</span>
          </div>
        ))}
      </div>
    </>
  );
}
