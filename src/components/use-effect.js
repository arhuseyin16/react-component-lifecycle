import {useEffect, useState} from "react";

function UseEffectExample() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("huseyin");

    useEffect(() => {
        console.log("component mount edildi");
    }, []); // ilk çalıstıgında state kadar console yazdı.

    useEffect(() => {
        console.log("number state güncellendi");
    }, [number]); // sayac her defasında artıgı için her btn click oldugunda console yazdı.

    useEffect(() => {
        console.log("name state güncellendi");
    }, [name]); // sadece ilk clickte default data değişti ve sadece bir kez console yazdı.
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
            <hr/>
            <h1>{name}</h1>
            <button onClick={() => setName("ahmet")}>Click</button>
        </div>
    );
}
export default UseEffectExample;