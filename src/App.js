export function Sum({ numbers = [0] }) {
  return (
    <div>
      <h1>
        Result: {numbers.reduce((prev, currentValue) => prev + currentValue)}
      </h1>
    </div>
  );
}
