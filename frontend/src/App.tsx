import React from "react";
import GlobalStyled from "./styles/global";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SingUp";

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyled />
  </>
);

export default App;
