import Deneme from "./Components/deneme";

import "./scss/main.scss";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Deneme />

      <div className="container">
        <div className="row">
          <div className='col-3'>
            a
          </div>
          <div className='col-7'>
            b
          </div>
          <div className='col-2'>
            c
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
