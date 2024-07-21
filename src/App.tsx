import "./App.css";
import { useCloudQuery } from "freestyle-sh/react";
import { useCloud } from "freestyle-sh";
import { Counter } from "./cloudstate/counter";

function App() {
  const counter = useCloud<typeof Counter>("Counter");
  const { data: value } = useCloudQuery(counter.getValue);

  return (
    <>
      <div className="row">
        <button onClick={async () => await counter.increase()}>Add</button>
        <p>{value?.value ?? "Loading..."}</p>
        <button onClick={async () => await counter.decrease()}>Subtract</button>
      </div>
      <p>
        Read more about Freestyle at <a href="https://docs.freestyle.dev/getting-started/react/">
          docs.freestyle.dev
        </a>
      </p>
    </>
  );
}

export default App;
