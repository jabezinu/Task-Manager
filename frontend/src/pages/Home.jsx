import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual backend API endpoint
    axios
      .get("http://localhost:5001/api/tasks")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome to Task Manager</h1>
      <h2>Task Summary</h2>
      <ul>
        <li>Total Tasks: {data.length}</li>
        <li>Completed: {data.filter((todo) => todo.completed).length}</li>
        <li>Pending: {data.filter((todo) => !todo.completed).length}</li>
      </ul>
    </div>
  );
}