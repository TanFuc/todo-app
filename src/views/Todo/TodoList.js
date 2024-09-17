import TodoHeader from "./TodoHeader";
import TodoAdd from "./TodoAdd";
import TodoButton from "./TodoButton";
import { useRef, useState } from "react";

const TodoList = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = localStorage.getItem("jobs");
    return storageJobs ? JSON.parse(storageJobs) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [visited, setVisited] = useState(false);
  const input = useRef(null);

  const handleVisited = () => {
    setVisited(!visited);
    console.log(visited);
  };

  const handleSubmit = () => {
    if (job === "") {
      const error = alert("Nhập thông tin không hợp lệ!");
      return error;
    }

    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
    if (input.current) {
      input.current.focus();
    }
    console.log("added");
  };

  const handleDelete = (indexDelete) => {
    setJobs((prev) => {
      const updatedJobs = prev.filter((job, index) => index !== indexDelete);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
    console.log("deleted");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(jobs[index]);
  };

  const handleUpdate = () => {
    if (editValue === "") {
      alert("Nhập thông tin không hợp lệ!");
      return;
    }

    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs];
      updatedJobs[editIndex] = editValue;
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
    setEditIndex(null);
    setEditValue("");
    console.log("updated");
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <>
      <div className="relative bg-gray-900 text-white flex items-center justify-center min-h-screen ">
        <TodoHeader />
        <TodoAdd
          job={job}
          onChangeJob={(e) => setJob(e.target.value)}
          input={input}
          onSubmit={handleSubmit}
        />
        <TodoButton
          visited={visited}
          jobs={jobs}
          editIndex={editIndex}
          editValue={editValue}
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleVisited={handleVisited}
          setEditValue={setEditValue}
        />
      </div>
    </>
  );
};

export default TodoList;
