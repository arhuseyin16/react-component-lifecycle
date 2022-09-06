import {useEffect, useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    // 0'dan başlayan bir sayaç oluşturduk. setInterval yardımı ile 500 ms artıyor.
    // Componnet bağımlılığı koparmak ve durdurmak için clearInterval kullandık.
    useEffect(() => {
        console.log("component mount edildi");
        const interval = setInterval(() => {
            setNumber((n) => n+1);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("number state güncellendi");
    }, [number]);
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    );
}
export default Counter;