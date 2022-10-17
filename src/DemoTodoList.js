import { useState } from "react";

export default function DemoTodoList(props) {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const oldJobs = localStorage.getItem("jobs");
    return JSON.parse(oldJobs) ?? [];
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob("");
  };

  return (
    <div>
      <input value={job} type="text" onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>{jobs && jobs.map((task, id) => <li key={id}>{task}</li>)}</ul>
      <hr />
    </div>
  );
}
