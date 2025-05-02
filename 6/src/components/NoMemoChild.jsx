import React from "react";

const NoMemoChild = () => {
  console.log("NoMemoChild ререндерится");
  return <div>Компонент без оптимизации</div>;
};

export default NoMemoChild;
