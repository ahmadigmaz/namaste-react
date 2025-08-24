import React, { useState } from 'react'

const User = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='user-card'>
        <h3>Count = {count}</h3> <button onClick={()=>{
            setCount(count+1);
        }}>Count Increase</button>
        <h2>Name: Igmaz</h2>
        <h3>Address: Meerut</h3>
        <h3>Contact: igmazahmad@gmail.com</h3>
    </div>
  )
}

export default User