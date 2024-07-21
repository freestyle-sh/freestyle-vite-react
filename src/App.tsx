import './App.css'
import { useCloudQuery } from 'freestyle-sh/react'
import { useCloud } from 'freestyle-sh'
import { Counter } from './cloudstate/counter'

function App() {
  const counter = useCloud<typeof Counter>("Counter");
  const { data: value } = useCloudQuery(counter.getValue);

  return (
    <>
      <button onClick={async()=> await counter.increase()}>
        Add
      </button>
      <p>
        {value?.value?? "Loading..."}
      </p>
      <button onClick={async()=> await counter.decrease()}>
        Subtract
      </button>
    </>
  )
}

export default App
