import { useState } from "react";

export default function InstSelection() {
  const [institution, setInstitution] = useState();

  const locations = {
    location1: {
      name: "Tafel Bad Cannstadt",
      id: "63d291d8a0e806f7a75726a5",
    },
    location2: {
      name: "Tafel Baden-Württemberg e.V.",
      id: "63d3dd170a6fff7320b63af7",
    },
    location3: {
      name: "Tafel Feuerbach",
      id: "63d3dd2c0a6fff7320b63af9",
    },
    location4: {
      name: "Tafel Stuttgart",
      id: "63d3dd480a6fff7320b63afb",
    },
    location5: {
      name: "Gautinger Tafel e.V.",
      id: "63d3dd5a0a6fff7320b63afd",
    },
    location6: {
      name: "Grünwalder Tafel",
      id: "63d3de260a6fff7320b63b00",
    },
    location7: {
      name: "Münchner Tafel e.V.",
      id: "63d3de5d0a6fff7320b63b02",
    },
    location8: {
      name: "Frankfurter Tafel e.V.",
      id: "63d3ded80a6fff7320b63b04",
    },
    location9: {
      name: "Tafel Bad Vilbel",
      id: "63d3df130a6fff7320b63b06",
    },
    location10: {
      name: "Tafel Hochtaunus",
      id: "63d3df450a6fff7320b63b08",
    },
    location11: {
      name: "Tafel Maintal",
      id: "63d3df7a0a6fff7320b63b0a",
    },
    location12: {
      name: "Tafel Offenbach e.V.",
      id: "63d3dfac0a6fff7320b63b0c",
    },
    location13: {
      name: "Hürther Tafel e.V.",
      id: "63d3dffd0a6fff7320b63b0e",
    },
    location14: {
      name: "Tafel Frechen",
      id: "63d3e02d0a6fff7320b63b10",
    },
    location15: {
      name: "Tafel Brühl Rheinland e.V.",
      id: "63d3e0690a6fff7320b63b12",
    },
    location16: {
      name: "Tafel Erfstadtm",
      id: "63d3e0950a6fff7320b63b14",
    },
    location17: {
      name: "Tafel Köln e.V.",
      id: "63d3e0c70a6fff7320b63b16",
    },
    location18: {
      name: "Wesselinger Tafel e.V.",
      id: "63d3e0f40a6fff7320b63b18",
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

        <input
          id={locations.location4.name}
          type="radio"
          checked={institution == locations.location4.name}
          name="inst"
          value={locations.location4.name}
        />
        <label htmlFor={locations.location4.name}>
          {locations.location4.name}
        </label>

        <input
          id={locations.location5.name}
          type="radio"
          checked={institution == locations.location5.name}
          name="inst"
          value={locations.location5.name}
        />
        <label htmlFor={locations.location5.name}>
          {locations.location5.name}
        </label>

        <input
          id={locations.location6.name}
          type="radio"
          checked={institution == locations.location6.name}
          name="inst"
          value={locations.location7.name}
        />
        <label htmlFor={locations.location7.name}>
          {locations.location7.name}
        </label>

        <input
          id={locations.location8.name}
          type="radio"
          checked={institution == locations.location8.name}
          name="inst"
          value={locations.location8.name}
        />
        <label htmlFor={locations.location8.name}>
          {locations.location8.name}
        </label>

        <input
          id={locations.location1.name}
          type="radio"
          checked={institution == locations.location9.name}
          name="inst"
          value={locations.location9.name}
        />
        <label htmlFor={locations.location9.name}>
          {locations.location9.name}
        </label>

        <input
          id={locations.location10.name}
          type="radio"
          checked={institution == locations.location10.name}
          name="inst"
          value={locations.location10.name}
        />
        <label htmlFor={locations.location10.name}>
          {locations.location10.name}
        </label>

        <input
          id={locations.location11.name}
          type="radio"
          checked={institution == locations.location11.name}
          name="inst"
          value={locations.location11.name}
        />
        <label htmlFor={locations.location11.name}>
          {locations.location11.name}
        </label>

        <input
          id={locations.location12.name}
          type="radio"
          checked={institution == locations.location12.name}
          name="inst"
          value={locations.location12.name}
        />
        <label htmlFor={locations.location12.name}>
          {locations.location12.name}
        </label>

        <input
          id={locations.location13.name}
          type="radio"
          checked={institution == locations.location13.name}
          name="inst"
          value={locations.location13.name}
        />
        <label htmlFor={locations.location13.name}>
          {locations.location13.name}
        </label>

        <input
          id={locations.location14.name}
          type="radio"
          checked={institution == locations.location14.name}
          name="inst"
          value={locations.location14.name}
        />
        <label htmlFor={locations.location14.name}>
          {locations.location14.name}
        </label>

        <input
          id={locations.location14.name}
          type="radio"
          checked={institution == locations.location14.name}
          name="inst"
          value={locations.location14.name}
        />
        <label htmlFor={locations.location14.name}>
          {locations.location14.name}
        </label>

        <input
          id={locations.location15.name}
          type="radio"
          checked={institution == locations.location15.name}
          name="inst"
          value={locations.location15.name}
        />
        <label htmlFor={locations.location15.name}>
          {locations.location15.name}
        </label>

        <input
          id={locations.location16.name}
          type="radio"
          checked={institution == locations.location16.name}
          name="inst"
          value={locations.location16.name}
        />
        <label htmlFor={locations.location16.name}>
          {locations.location16.name}
        </label>

        <input
          id={locations.location17.name}
          type="radio"
          checked={institution == locations.location17.name}
          name="inst"
          value={locations.location17.name}
        />
        <label htmlFor={locations.location17.name}>
          {locations.location17.name}
        </label>

        <input
          id={locations.location18.name}
          type="radio"
          checked={institution == locations.location18.name}
          name="inst"
          value={locations.location18.name}
        />
      </div>
    </>
  );
}
