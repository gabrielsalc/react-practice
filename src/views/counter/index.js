import {useState} from 'react';
import Number from './components/number.js';
import Button from './components/button.js';
import './style.css';

function Counter(){
    const [count, setCount] = useState(0)

    function handleAdd(event){
        console.log("click")
        setCount(count + 1)
    }
    function handleSubs(event){
        setCount(count - 1)
    }

    return(
        <section>
            <h1>
                Counter
                <br></br>
                <Button className="buttonAdd" handleClick={handleAdd} symbol = '+'/> {/*send the function to the child, handleclick is from react*/}
                <Number number={count} /> {/*number = prop, count = usestate*/}
                <Button className="buttonSubs" handleClick={handleSubs} symbol = '-'/>
            </h1>
        </section>
    )
}

export default Counter;