import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Home from './app/components/Home';

ReactDOM.hydrate(<Home />, document.querySelector("#root"));