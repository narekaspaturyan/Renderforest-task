import React, { useState } from "react";
import InputFiled from "./inputFiled";

function Pros() {
  const [arr, setArr] = useState([
    {
      val: "",
      num: 1,
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newArr = [...arr];
    newArr[index][name] = value;
    setArr(newArr);

    if (arr.length === 1) {
      const newArr = [...arr, { val: "", num: arr.length + 1 }];
      setArr(newArr);
    }
    if (arr[arr.length - 1].val !== "") {
      const newArr = [...arr, { val: "", num: arr.length + 1 }];
      setArr(newArr);
    }

    if (arr.length > 1) {
      const list = [...arr];
      const filtered = list.filter((el) => {
        if (el.num === list[list.lenght + 1]) {
          return false;
        }
        return el.val !== "";
      });
      filtered.push({ val: "", num: arr.length + 1 });
      filtered.map((el, ind) => (el.num = ind + 1));
      setArr(filtered);
    }
  };

  return (
    <div className="pros">
      <h1>Pros</h1>
      <div className="input">
        <InputFiled arr={arr} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Pros;
