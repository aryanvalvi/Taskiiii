import React from "react";
import { useParams } from "react-router-dom";

const Update = (props) => {
  const { userId } = useParams();
  return (
    <div>
      hello
      {userId}
    </div>
  );
};

export default Update;
