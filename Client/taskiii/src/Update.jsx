import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Update = () => {
  const { idParam } = useParams();
  const [Thatone, SetThatone] = useState([]);
  const [updatedMessage, setUpdatedMessage] = useState("");
  useEffect(() => {
    button();
    console.log(Thatone);
  }, []);

  const button = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/todo/${idParam}`);
      SetThatone([res.data]);
      // console.log(Thatone);
    } catch (err) {
      console.log(err);
    }
  };
  const UpdateValue = (data) => {
    const fuck = {
      message: data,
    };
    axios.patch(`http://localhost:5000/api/todo/update/${idParam}`, fuck);
  };

  return (
    <>
      <button onClick={() => button}>btn</button>
      {/* {Thatone} */}
      {Thatone.map((e) => {
        return (
          <>
            <h1>{e.message}</h1>
            <input
              type="text"
              value={updatedMessage}
              onChange={(e) => setUpdatedMessage(e.target.value)}
            />
            <button onClick={() => UpdateValue(updatedMessage)}>Update</button>
          </>
        );
      })}
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default Update;
