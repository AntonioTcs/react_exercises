import { useState } from "react";

function useForm() {
  const [data, setData] = useState({ username: "", password: "" });

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setData((data) => {
      {
      }
    });
  }
}
