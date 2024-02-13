import React from "react";

function Greeting(props) {
  const { name, greeting } = props;

  return (
    <div>
      <p>Hello and {greeting}, {name}!</p>
    </div>
  );
}

export default Greeting;
