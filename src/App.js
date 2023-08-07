
import "./app.css";
import TaskList from "./Components/TaskList";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
export default function App() {
  
  return (
    <div className="App">
    <Header/>
    <TaskList/>
    <Footer/>
    </div>
  );
}
 