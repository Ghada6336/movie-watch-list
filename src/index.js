import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import ItemsList from './components/ItemsList';
import DoneList from './components/DoneList';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ store }>
        <App />
        <hr/>
        <div className="container">
          <div className="row">
           <div className="col">
             <h6>Watched</h6>
             <ItemsList />
            </div>
          <div className="col">
          <h6>UNWatched</h6>
             <DoneList />
         </div>
          </div>
        </div>
    </Provider>, 
    document.getElementById('root')
);