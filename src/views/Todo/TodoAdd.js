import React from "react";

const TodoAdd = ({ job, input, onChangeJob, onSubmit }) => {
  return (
    <>
      <input
        type="text"
        value={job}
        ref={input}
        onChange={onChangeJob}
        className="relative mb-96 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 text-black"
      />
      <button
        onClick={onSubmit}
        className="ml-4 px-4 py-2 mb-96 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
      >
        Add
      </button>
    </>
  );
};

export default TodoAdd;
