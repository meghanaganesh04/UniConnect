import React, { useState } from "react";
import Login from "./Login";           
import LinkedInClone from "./LinkedInClone"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <LinkedInClone />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
