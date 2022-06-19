import React from "react";

function NumberInput({ label, value, setValue, id }) {
  return (
    <div className="my-2 w-full flex flex-col">
      <label for={label + "-" + id}>{label}:</label>
      <input
        className="border border-black rounded p-1"
        id={"temperature-" + id}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default NumberInput;
