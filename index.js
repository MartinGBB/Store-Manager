const express = require('express');
const bodyParser = require('body-parser');
const root = require('./controller/root');
const error = require('./middleware/error');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
// app.use(express.json());

app.use('/', root);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
