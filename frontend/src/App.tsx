import React from "react";
import GlobalStyled from "./styles/global";
import SignIn from "./pages/SingIn";
import { AuthProvider } from "./context/AuthContextImp";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyled />
  </>
);

export default App;
