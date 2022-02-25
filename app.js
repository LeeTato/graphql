const express = require('express');
const expressGraphQL = require("express-graphql").graphqlHTTP;
const port = 4800;
const app = express();
const schema = require('./schema/schema');
const cors = require('cors');

// Allow cross-origin
app.use(cors());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true// to see on the browser with the field area 
}) )

app.listen(port, () => {
    console.log(`listing to port ${port}`)
})

