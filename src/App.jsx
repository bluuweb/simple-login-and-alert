import { useState } from "react";

import Login from "./components/Login";
import Alert from "./components/Alert";

const App = () => {
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });

  return (
    <div className="container">
      <h1>My React App!</h1>
      <Login setAlert={setAlert} />
      {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </div>
  );
};
export default App;
