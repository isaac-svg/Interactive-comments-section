import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const commentContext = createContext();

const CommentContextProvider = ({ children }) => {
  const [newPost, setNewPost] = useState({});
  return (
    <commentContext.Provider value={{ newPost, setNewPost }}>
      {children}
    </commentContext.Provider>
  );
};
export const useComment = () => useContext(commentContext);
export default CommentContextProvider;
