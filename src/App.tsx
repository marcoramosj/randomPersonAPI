import React from "react";
import RandomUser from "./randomUser";

const App: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-purple-500">
      <RandomUser />
    </div>
  );
};

export default App;
