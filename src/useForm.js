import { useState } from "react";

export function useForm() {
  const [data, setData] = useState({ username: "", password: "" });

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    return {
      user: data,
      handleInputChange: handleInputChange,
    };
  }
}
