import "./FlatDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const FlatDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate= useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      // fetch(` http:localhost:4500/flat/${id}`)
      fetch(`https://apartment-flat-manager.herokuapp.com/flat/${id}`)
     
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const backToPrev = () => {
    navigate(-1);
  }

  return (
    <div id="flatDetailDiv">
      <button id="backBtn" onClick={backToPrev}>🡰</button>
      <div id="imgDiv">
        <img src={data.image} alt="NA" />
      </div>
      <div id="flatData">
        <p>
          <b>Block : </b> {data.block}
        </p>
        <p>
          <b>Flat Number : </b> {data.flat_number}
        </p>
        <p>
          <b>Type : </b> {data.type}
        </p>
        <p>
          <b>No. of Residents : {data?.residents?.length} </b> {}
        </p>

        <ol>
          {" "}
          <b> Resident Details :</b>
          {data?.residents?.map((e, i) => (
            <li>
              <b>Name: </b> {e.name} <br /> <b>Age: </b>
              {e.age} <br /> <b>Gender: </b>
              {e.gender}{" "}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};