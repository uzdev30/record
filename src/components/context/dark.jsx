import React, { createContext, useState } from "react";
const Darkmode = createContext();
function DarkModeFn(props) {
  const [dark, setDark] = useState(false);
  const darkFn = () => setDark(!dark);
  return (
    <div>
      <Darkmode.Provider value={{ dark, darkFn }}>
        {props.children}
      </Darkmode.Provider>
    </div>
  );
}
export { DarkModeFn, Darkmode };
