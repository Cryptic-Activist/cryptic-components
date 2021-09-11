import React, { useState } from "react";

const Test = () => {
  const [test, setTest] = useState("");

  const onTested = () => {
    setTest("tested");
  };

  return (
    <>
      <div>{test}</div>
      <button onClick={onTested}>Test</button>
    </>
  );
};

export default Test;
