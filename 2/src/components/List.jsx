import React from "react";

const List = React.memo(({ arr }) => {
  console.log("рендер дочернего ");
  return (
    <div>
      <ul>
        {arr.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
});

export default List;
