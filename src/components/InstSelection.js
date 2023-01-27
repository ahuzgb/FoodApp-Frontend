import { useState } from "react";

export default function InstSelection() {
  const [institution, setInstitution] = useState();

  const locations = {
    location1: {
      name: "Tafel Bad Cannstadt",
      id: "63d291d8a0e806f7a75726a5",
    },
    location2: {
      name: "other place",
      id: "63d291d8a0e806f7a75726a5",
    },
    location3: {
      name: "another place",
      id: "63d291d8a0e806f7a75726a5",
    },
  };

  function onChangeValue(event) {
    setInstitution(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <h2>institutions</h2>
      <div onChange={onChangeValue}>
        <input
          id={locations.location1.name}
          type="radio"
          checked={institution == locations.location1.name}
          name="inst"
          value={locations.location1.name}
        />
        <label htmlFor={locations.location1.name}>
          {locations.location1.name}
        </label>

        <input
          id={locations.location2.name}
          type="radio"
          checked={institution == locations.location2.name}
          name="inst"
          value={locations.location2.name}
        />
        <label htmlFor={locations.location2.name}>
          {locations.location2.name}
        </label>

        <input
          id={locations.location3.name}
          type="radio"
          checked={institution == locations.location3.name}
          name="inst"
          value={locations.location3.name}
        />
        <label htmlFor={locations.location3.name}>
          {locations.location3.name}
        </label>
      </div>
    </>
  );
}
