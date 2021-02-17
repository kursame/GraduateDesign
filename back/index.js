const express = require('express');
const render = require('./src/markdown_render')

const body_parser = require('body-parser');

const PORT = 80;


var api = express();
api.use(body_parser.json())
api.use(body_parser.urlencoded({extended: false}))


api.post('/md_render' , (req , res) => {
    
    const engine = render.engine_init();
    const rendered = render.render(req.body['src'])
    console.log(req.body['src']);
    res.json({'rendered': rendered});
})

api.listen(PORT, () => {console.log('listening at PORT' + PORT)})