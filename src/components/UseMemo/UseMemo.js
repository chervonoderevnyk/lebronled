import {useMemo, useState} from "react";

const summator = (n) => {
    console.log('start');
    let sum = n;
    for (let i = 0; i < 100000000; i++) {
        sum = n
    }
    console.log('finish');
    return sum
}
const UseMemo = () => {

    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

    const number = useMemo(() => summator(n), [n])

    return (
        <div>
            <div>sum:{number}</div>
            <button onClick={() => setN(prevState => prevState + 1)}>incN</button>
            <div>count:{count}</div>
            <button onClick={() => setCount(prevState => prevState + 1)}>incCount</button>
        </div>
    );
};

export {UseMemo};