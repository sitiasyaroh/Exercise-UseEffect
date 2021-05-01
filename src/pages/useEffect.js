import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Async = () => {
  const [pikachu, setPikachu] = useState({ name: "" });
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("");
      const data = await response.json();
      console.log(data);
      setPikachu(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>ini adalah halaman {id}</div>
      <br></br>
      <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>Sudah diklik {count} kali</p>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
        <button onClick={(pikachu.name)}>OK</button>
      <div>
        <p>nama pokemon: {pikachu.name}</p>
      </div>
    </div>
  );
};

export default Async;