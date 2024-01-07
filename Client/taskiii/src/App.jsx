import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "./Update";
import { Link } from "react-router-dom";
const App = () => {
  const [getAll, setGetAll] = useState([]);
  const [pushTask, SetPushTask] = useState("");
  const [workdone, SetWorkdon] = useState(false);
  const [rerender, SetRerender] = useState(false);
  console.log(workdone);
  const GetAll = () => {
    axios
      .get("http://localhost:5000/api/todo/")
      .then((res) => {
        setGetAll(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetAll();
  }, [rerender]);

  const AddTask = (edata) => {
    const ronaldo = {
      message: edata,
      completed: workdone,
    };
    axios
      .post("http://localhost:5000/api/todo/Create/", ronaldo)
      .then((res) => {
        console.log("data bhej diya", res);
        SetRerender(!rerender);
      })
      .catch((err) => console.log(err));
  };

  const TaskDelete = (e) => {
    const Id = {};
    axios
      .delete(`http://localhost:5000/api/todo/delete/${e}`)
      .then((res) => {
        console.log("Deleted");
        SetRerender(!rerender);
      })
      .catch((err) => console.log(err));
  };

  const ChnageButtonvalue = () => {
    SetWorkdon(!workdone);
  };

  return (
    <div className="Container">
      <h1>TASKIII</h1>
      <input type="text" onChange={(e) => SetPushTask(e.target.value)} />
      <p>
        Completed
        <input
          // value={workdone}
          checked={workdone}
          onChange={ChnageButtonvalue}
          type="checkbox"
        />
      </p>
      <button onClick={() => AddTask(pushTask)}>Add Task</button>

      {/* <button onClick={GetAll}>GetAll</button> */}

      <div className="allget">
        {getAll.map((e) => {
          return (
            <div key={e._id}>
              <h1>
                {e.message}
                <input type="checkbox" checked={e.completed} />

                <button onClick={() => TaskDelete(e._id)}>Delete</button>
                <Link to={`/Update/${e._id}`}>
                  <button> Update</button>
                </Link>

                {/* {isVisible && <Update value={e._id}></Update>} */}
                {/* <button onClick={() => TaskUpdate(e._id)}>Update</button> */}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
