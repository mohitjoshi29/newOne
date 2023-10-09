import logo from './logo.svg';
import './App.css';
import Component from './Component/Component';

function App() {
  function parent(value){
    alert(value);
  }
  return (
    <Component name="harshit" fun={parent}/>
  );
}

export default App;
