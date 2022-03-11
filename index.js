import { registerRootComponent } from 'expo';
import { Component } from 'react'
import App4_1 from './chapter4/4.1/App';
import App4_5_4_6 from './chapter4/4.5_4.6/App';
import App4_7 from './chapter4/4.7/App';
import App4_8 from './chapter4/4.8/App';
import App4_9 from './chapter4/4.9/App';
import App4_10 from './chapter4/4.10/App';
import App4_11 from './chapter4/4.11/App';
import App4_12 from './chapter4/4.12/App';
import App4_13 from './chapter4/4.13/App';
import App4_14 from './chapter4/4.14/App';
import App4_15 from './chapter4/4.15/App';
import App4_16 from './chapter4/4.16/App';
import App4_17 from './chapter4/4.17/App';
import App4_18 from './chapter4/4.18/App';
import App4_19 from './chapter4/4.19/App';
import App4_20 from './chapter4/4.20/App';


class App extends Component {
    render() {
        return (
            <div>
                <App4_1 />
                <App4_5_4_6 />
                <App4_7 />
                <App4_8 />
                <App4_9 />
                <App4_10 />
                <App4_11 />
                <App4_12 />
                <App4_13 />
                <App4_14 />
                <App4_15 />
                <App4_16 />
                <App4_17 />
                <App4_18 />
                <App4_19 />
                <App4_20 />
            </div>
        );
    }
}

registerRootComponent(App);
