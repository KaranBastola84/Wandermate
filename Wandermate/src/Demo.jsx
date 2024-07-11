import { useState, useEffect } from "react";

function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounted");
        return () => {
            console.log("Unmounted");
        };
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
            <p> Count: {count} </p>
            <button onClick={increment}> Increment </button>
        </>
    );
}

export default Demo;
