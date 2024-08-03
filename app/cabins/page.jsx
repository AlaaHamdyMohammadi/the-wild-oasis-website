import React from 'react'

const Page = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  //console.log("User data: ", data);
  return (
    <div>
      <h1>cabins</h1>
      <ul>
        {data.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Page
