
import './App.css';
import {Counter} from "./components/Counter"
function App() {
  let item={books: 13,
    pens: 10,
    notebooks: 44,
    inkpens: 78}
    
  return (
    <div className="items">
     
      <Counter total={item.books} classname="addBook" remItem="remBook" totalItem="totalBooks" name="books"/>
      <Counter total={item.pens} classname="addPen" remItem="remPen" totalItem="totalPens" name="pens" />
      <Counter total={item.notebooks} classname="addNotebook" remItem="remNotebook" totalItem="totalNotebooks" name="notebooks"/>
      <Counter total={item.inkpens} classname="addInkpen" remItem="remInkpen" totalItem="totalInkpens" name="inkpens" />
      <div className="total"></div>
    </div>
  );
}

export default App;
