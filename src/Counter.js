import React, {useState} from 'react';
import './Counter.css';

export default function Counter() {
  const [string, setString] = useState("");
  const [count, setCount] = useState(new Map());
  const [topfive, setTopFive] = useState(new Map());

  // Display character count on page
  // Includes whitespace
  const submitHandler = e => {
    e.preventDefault();
    if(count.size === 0) {
        updateCharCount();
    } else {
        if(count.size !== string.length) {
            setCount(new Map(count.clear()));
            updateCharCount();
        }
    }
    // console.log(count);
    TopFive();
  };

  // Store top five most frequent characters
  // In the case of multiple characters with the same number of occurrences,
  // Priority is given based on insertion order
  const TopFive = () => {
    const mapSort1 = new Map([...count.entries()].sort((a, b) => b[1] - a[1]));
    let index = 0;
    setTopFive(new Map(topfive.clear()));
    for(let [key, value] of mapSort1) {
        if(index > 4) mapSort1.delete(key);
        else {
            setTopFive(new Map(topfive.set(key, value)));
            index++;
        }
    }
    // console.log(topfive);
  };

  // Populate map object with keys as characters and values as number of occurrences
  const updateCharCount = () => {
    for(let i = 0; i < string.length; i++) {
        if(count.has(string[i])) setCount(new Map(count.set(string[i], count.get(string[i]) + 1)));
        else setCount(new Map(count.set(string[i], 1)));
    }
  };

  return (
    <div className='page-wrapper'>
        <div className='row'>
            <div className='column'>
                <form className='input' onSubmit={submitHandler}>
                    <h1>Input</h1>
                    <textarea rows="4" cols="50" placeholder="Enter text here"
                            onChange={e => {setString(e.target.value)}} value={string}>
                    </textarea>
                    <h2>Total Characters: {string.length}</h2>
                    <input type="submit" value="Calculate" />
                </form>
            </div>
            <div className='column'>
                <div className='count'>
                    <h1>Character Count</h1>
                    <ul>
                        {(count.size === 0) ? <li>List unavailable. Please enter input!</li> : ''}
                        {[...count.keys()].map((value, key) => {
                            const top = topfive.has(value);
                            if (top) {
                                return(
                                    <li key={key}><mark>{value} : {count.get(value)}</mark></li>
                                )
                            } else {
                                return(
                                    <li key={key}>{value} : {count.get(value)}</li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}