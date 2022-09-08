import './App.css';
import Chat from './layouts/Chat';
import Auth from './layouts/Auth';
import { ChatContextProvider } from "./context/ChatContext";
import { useContext, useEffect, useState } from 'react';
import ChatContext from './context/ChatContext';

function App() {
  return (
    <div className="App">
      <ChatContextProvider>
        <Main />
      </ChatContextProvider>
    </div>
  );
}

function Main() {
  const ctx = useContext(ChatContext)
  const [isLoggedIn, setIsLoggedIn] = useState(ctx.isLoggedIn)
  
  useEffect(()=>{
    setIsLoggedIn(ctx.isLoggedIn)
  },[ctx.isLoggedIn])

  return(
    <>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Chat />}
    </>
  );
}

export default App;
