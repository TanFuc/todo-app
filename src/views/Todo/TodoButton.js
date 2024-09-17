import React from "react";

const TodoButton = ({
  visited,
  jobs,
  editIndex,
  editValue,
  handleUpdate,
  handleCancel,
  handleEdit,
  handleDelete,
  handleVisited,
  setEditValue,
}) => {
  return (
    <>
      {visited && (
        <div class="absolute p-6">
          <table class="min-w-full bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
            <thead>
              <tr>
                <th class="py-2 px-4 border-b border-gray-600">
                  Tên Công Việc
                </th>
                <th class="py-2 px-4 border-b border-gray-600">Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="text-black p-1 border border-gray-300 rounded-md"
                      />
                    ) : (
                      job
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {editIndex === index ? (
                      <>
                        <button
                          onClick={handleUpdate}
                          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
                        >
                          Lưu
                        </button>
                        <button
                          onClick={handleCancel}
                          className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200 ml-2"
                        >
                          Hủy
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(index)}
                          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200 ml-2"
                        >
                          Xóa
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={handleVisited}
        className="absolute mt-96 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        {visited ? "Ẩn" : "Hiện"}
      </button>
    </>
  );
};

export default TodoButton;
