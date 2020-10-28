import React from "react";

function InputFiled(props) {
  const { arr, handleChange } = props;

  return (
    <div className="chat-area">
      {arr.map((el, index) => (
        <div key={index}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: 350,
              margin: "20px auto 20px auto",
            }}
          >
            <strong>{el.num}.</strong>
            <input
              type="text"
              name="val"
              onChange={(e) => handleChange(e, index)}
              value={el.val}
            />
          </li>
        </div>
      ))}
    </div>
  );
}

export default InputFiled;
