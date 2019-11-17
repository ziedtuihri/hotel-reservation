import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';


const App = () => {
  const [count, setCount] = useState(0);
  const add = (k) => k++;
return(
  <div className="App">
     <header className="App-header">
       <button onClick={() => { setCount(count + 1)}}> 
          Add
        </button>
          <h1>hello world `{count}`</h1>
      </header>
</div>
);

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
