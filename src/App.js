import Counter from "./components/counter";
import UseEffectExample from "./components/use-effect";
import {useState} from "react";

function App() {
    const [isCount, setIsCount] = useState(true);
  return (
    <div>
        {isCount && <Counter/>}
        <br/>
        <button onClick={()=> setIsCount(!isCount)}>isCount change</button>
        {/*<UseEffectExample/>*/}
    </div>
  );
}

export default App;
