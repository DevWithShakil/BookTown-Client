import "react-toastify/dist/ReactToastify.css";
import RouteList from "./routes/RouteList";
import './app.css'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <RouteList />
      <ToastContainer />
    </div>
  );
}

export default App;
