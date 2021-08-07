import { useState } from "react";

type ButtonProps = {
    text: string
}

export function Button(props: ButtonProps){
    const [count, setCount] = useState(0);

    function counter(){
        setCount(count+1);
    }

    return(
        <button onClick={counter}>{count}</button>
    )
}