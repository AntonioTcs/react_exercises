import { useMemo } from "react";

const list = [
  { name: "John", id: 1, age: 20 },
  { name: "Foo", id: 2, age: 17 },
  { name: "Jonathan", id: 3, age: 16 },
  { name: "Antony", id: 4, age: 19 },
  { name: "Marcus", id: 5, age: 20 },
];
export function App() {
  return <FilteredList list={list} />;
}

function FilteredList({ objList }) {
  const listToRender = useMemo(
    () =>
      list.map((user, index) =>
        user.age > 18 ? (
          <div key={index}>
            <h1>Name: {user.name}</h1>
            <h2>Id: {user.id}</h2>
            <h2>Age: {user.age}</h2>
          </div>
        ) : null
      ),
    [list]
  );
  return <div>{listToRender}</div>;
}
