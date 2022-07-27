import React, { useEffect, useState } from "react";
import TextField from "../atoms";
import Anya from "../../constants/images/Anya.jpg";
import Yor from "../../constants/images/Yor.jpg";
import Tsunade from "../../constants/images/Tsunade.jpg";
import Gon from "../../constants/images/Gon.jpg";
import Chrollo from "../../constants/images/Chrollo.jpg";
import Netero from "../../constants/images/Netero.jpg";
import male from "../../constants/images/male.png";
import female from "../../constants/images/female.png";

function Homepage() {
  const [isName, setIsName] = useState<boolean>(false);
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState<any>(0);
  useEffect(() => {}, [isName, gender, age]);
  return (
    <div>
      <TextField label="Name" onKeyPress={() => setIsName(true)}></TextField>
      {isName && (
        <TextField
          label="Age"
          value={age}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></TextField>
      )}
      <span style={{ padding: "20px 5px 0px 0px" }}>
        {isName && gender === "male" && (
          <img
            src={male}
            alt={"male"}
            style={{
              height: "15px",
              width: "15px",
            }}
          />
        )}
        {isName && gender === "female" && (
          <img
            src={female}
            alt={"female"}
            style={{
              height: "15px",
              width: "15px",
            }}
          />
        )}
      </span>
      {isName && (
        <select
          value={gender}
          onChange={(event) => {
            setGender(event.target.value);
          }}
        >
          <option value="male"> Male</option>
          <option value="female">Female</option>
        </select>
      )}
      <div>
        {age > 0 && age <= 10 && gender === "female" && (
          <img alt={"image"} src={Anya} />
        )}
        {age > 0 && age > 10 && age <= 30 && gender === "female" && (
          <img alt={"image"} src={Yor} />
        )}
        {age > 0 && age > 30 && gender === "female" && (
          <img alt={"image"} src={Tsunade} />
        )}

        {age > 0 && age <= 10 && gender === "male" && (
          <img alt={"image"} src={Gon} />
        )}

        {age > 0 && age > 10 && age <= 30 && gender === "male" && (
          <img alt={"image"} src={Chrollo} />
        )}
        {age > 0 && age > 30 && gender === "male" && (
          <img alt={"image"} src={Netero} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
