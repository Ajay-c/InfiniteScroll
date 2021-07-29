import React from "react";
import Loginform from "./LoginForm.js";

function App(props) {
  const admin = {
    email: "xyz",
    name: "foo",
    password: "bar"
  };

  const [user, setUser] = React.useState({ name: "", password: "" });
  const [pwd, setPwd] = React.useState("");

  const Login = details => {
    if (details.name === admin.name && details.password === admin.password) {
      setUser({
        name: details.name
      });
      props.history.push("/home");
     localStorage.setItem('name',details.name);

    } else {
      setPwd("Details Do not match!");
    }
  };
  return (
    <div className="App">
      <Loginform Login={Login} error={pwd} />
    </div>
  );
}

export default App;
