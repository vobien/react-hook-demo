import { useState } from "react";
import "./App.css";
import Content from "./Content";

function DemoState() {
  const data = [1, 2, 3];
  const sum = data.reduce((total, val) => total + val);
  const [user, setUser] = useState(() => {
    return {
      name: "tri",
      age: sum,
    };
  });

  const handleClick = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        age: prevState.age + 1,
      };
    });
  };

  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={handleClick}>Click me</button>
      <hr />
    </div>
  );
}

function DemoCheckbox(props) {
  const choices = [
    {
      id: 1,
      value: "Java",
    },
    {
      id: 2,
      value: "Javascript",
    },
    {
      id: 3,
      value: "Python",
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedItems(prev => {
        if (selectedItems.includes(id)) {
            console.log("uncheck ", id);
            return prev.filter(itemId => itemId !== id)
        }
        return [...prev, id]
    });
  }


  return (
    <div>
      {choices.map(({id, value}) => {
        return (
          <div key={id}>
            <input type="checkbox" 
            checked={selectedItems.includes(id)}
            onChange={() => handleCheckboxChange(id)} />
            {value}
          </div>
        );
      })}
      <hr />
    </div>
  );
}

function DemoTodoList(props) {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const oldJobs = localStorage.getItem("jobs")
        return JSON.parse(oldJobs) ?? [];
    });

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job];
            localStorage.setItem('jobs', JSON.stringify(newJobs));
            return newJobs;
        });
        setJob('');
    }

    return (
        <div>
            <input value={job} type="text" onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {
                    jobs && jobs.map((task, id) => <li key={id}>{task}</li>)
                }
            </ul>
            <hr />
        </div>
    )
}

function DemoMount() {
    const [show, setShow] = useState(true);
    const handleClick = () => {
        setShow(prev => !prev);
    };
    return (
        <div>
            <button onClick={handleClick}>Hide/Show</button>
            {show && <Content />}
        </div>
    );
}


function App() {
  return (
    <>
      <DemoState />

      <DemoCheckbox />

      <DemoTodoList />

      <DemoMount />
    </>
  );
}

export default App;
