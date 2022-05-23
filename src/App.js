import { useEffect, useRef } from "react";
const initialData = {
  model: "Tesla",
  color: "Blue",
  year: "2018",
};
export function App() {
  return <Form intialData={initialData} />;
}

function Form({ intialData }) {
  const model = useRef();
  const color = useRef();
  const year = useRef();

  useEffect(() => {
    model.current.value = intialData.model;
    color.current.value = intialData.color;
    year.current.value = intialData.year;
  }, [intialData]);

  return (
    <div>
      <form>
        <input ref={model} name="model" />
        <input ref={color} name="color" />
        <input ref={year} type="number" name="year" />
      </form>
    </div>
  );
}
