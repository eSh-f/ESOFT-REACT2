import React from "react";

const WithMemoChild = React.memo(({ handeleMemo }) => {
  console.log("WithMemoChild ререндерится");
  return (
    <div>
      компонент с оптимизацией
      <button onClick={handeleMemo}></button>
    </div>
  );
});

export default WithMemoChild;
