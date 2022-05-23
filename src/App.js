import { useForm } from "./useForm";

export function App() {
  return <Form />;
}

function Form() {
  const { user, handleInputChange } = useForm;

  function handleChange(event) {
    handleInputChange(event);
  }
  return (
    <div>
      <input name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
    </div>
  );
}
