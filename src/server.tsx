import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Home from './app/components/Home';


const express = require('express');


const app = express();

app.use(express.static('public'));
app.get('/', (req: any, res: any) => {
    const content = ReactDOMServer.renderToString(<Home />);
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html);
});

app.listen(3030, () => {
    console.log("Listening on port 3030");
});