import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
export function Root() {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
}
