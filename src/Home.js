import React from 'react'
import t from '/.task1';


export const Home = () => {


  

  const [counter, setCounter] = useState(0);
  const incr = ()=>{
    setCounter(counter+1);

    console.log(counter);
  }

  
  const dec = ()=>{
    setCounter(counter-1);

    console.log(counter);
  }

  
  const mul = ()=>{
    setCounter(counter*2);

    console.log(counter);
  }
  return (
    <div>{Counter}
    <button onclick={incr}>+</button>
    <button onclick={dec}>-</button>
    <button onclick={mul}>*</button>
    </div>
  )
}

  return(
    <table>
      <tbody>{
      
      t.map((v,index) =>{
        return(
          <tr>
            <td>{v.albumId}</td>
            <td>{v.id}</td>
            <td>{v.title}</td>
            <td>{v.url}</td>
          </tr>
        )}
       ) }
       </tbody>
    </table>
  )



