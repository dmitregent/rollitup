import React from 'react';
import './App.css';
import {DataFetcher} from "./component/DataFetcher";

export class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <DataFetcher/>
            </div>
        );
    }
}

export default App;
