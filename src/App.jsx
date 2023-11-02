import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("");

    const onIncrement = () => {
        if (count < 10) {
            setCount((prev) => {
                return prev + 1;
            });
        }
        else{
          setStatus("The value cannot be incremented further")
        }
    };

    const onDecrement = () => {
        if (count > 0) {
            setCount((prev) => {
                return prev - 1;
            });
        }
        else{
          setStatus("The value cannot be decremented further")
        }
    };

    return (
        <div className="app">
            <h1>Counter:{count} </h1>
            <h2>{status}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
}

export default App;
