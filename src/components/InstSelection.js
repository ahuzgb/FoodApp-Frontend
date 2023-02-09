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
    (location) => location.city === currentUser?.city
  );

  return (
    <>
      <h2 style={{ color: "#c32121", marginTop: "10px" }}>foodbär spots</h2>
      <div className="spots">
        <div className="locationPicker" onChange={onChangeValue}>
          {locations?.map((location) => (
            <label htmlFor={location.name}>
              <div className="singleLocation">
                <input
                  id={location.name}
                  type="radio"
                  checked={institution == location.id}
                  name="inst"
                  value={location.id}
                  required
                />
                {location.name}
                <div className="location_address">
                  <p>{location.street}</p>
                  <p>{location.zip}</p>
                  <p>{location.city}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
