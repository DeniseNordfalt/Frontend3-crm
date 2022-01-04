import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PasswordLost from "./pages/PasswordLost";
import UserCreatePage from "./pages/UserCreatePage";
import StartPage from "./pages/StartPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import GlobalStyle from "./components/GlobalStyle";

const URLContext = createContext("");
const UserContext = createContext({});
const CustomerContext = createContext({});

function App() {
  const [baseURL, SetBaseURL] = useState(`https://frebi.willandskill.eu`);
  const [customerList, setCustomerList] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      <URLContext.Provider value={{ baseURL, SetBaseURL }}>
        <UserContext.Provider value={{ user, setUser }}>
          <CustomerContext.Provider value={{ customerList, setCustomerList }}>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/login" element={<StartPage />} />
              <Route path="/create-user" element={<UserCreatePage />} />
              <Route path="/lost-password" element={<PasswordLost />} />

              <Route path="/home" element={<HomePage />} />
              <Route path="/customers/:id" element={<CustomerDetailPage />} />
            </Routes>
          </CustomerContext.Provider>
        </UserContext.Provider>
      </URLContext.Provider>
    </>
  );
}

export { URLContext, CustomerContext, UserContext };
export default App;
