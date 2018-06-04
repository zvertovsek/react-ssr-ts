import renderer from './renderer';

const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('*', (req: any, res: any) => {
    res.send(renderer(req));
});

app.listen(3030, () => {
    console.log("Listening on port 3030");
});