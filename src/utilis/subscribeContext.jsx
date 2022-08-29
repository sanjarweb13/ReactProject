import { useState } from "react";
import { createContext } from "react";

export const SubscribeNewsContext = createContext();

const SubscribeNewsProvider = (props) => {
  const [newsUser, setNewsUser] = useState(null);

  const newsValue = { newsUser, setNewsUser };

  return (
    <SubscribeNewsContext.Provider value={newsValue}>
      {props.Children}
    </SubscribeNewsContext.Provider>
  );
};

export default SubscribeNewsProvider;
