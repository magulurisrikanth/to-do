import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function TodoFilters() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <label className="mr-2">Show: </label>
      <button className={`text-gray-100 mx-3 px-3 py-1 bg-layoutBlue hover:text-gray-500 ${filter === "ALL" ? "font-bold" : ""}`} onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}>
        All
      </button>
      <button className={`text-gray-100 mx-3 px-3 py-1 bg-layoutBlue hover:text-gray-500 filter === "ACTIVE" ? "font-bold" : ""}`} onClick={() => dispatch({ type: "SET_FILTER", payload: "ACTIVE" })}>
        Active
      </button>
      <button className={`text-gray-100 mx-3 px-3 py-1 bg-layoutBlue hover:text-gray-500  ${filter === "COMPLETED" ? "font-bold" : ""}`} onClick={() => dispatch({ type: "SET_FILTER", payload: "COMPLETED" })}>
        Completed
      </button>
    </div>
  );
}
