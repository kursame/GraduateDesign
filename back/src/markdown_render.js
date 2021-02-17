function engine_init()
{
    var math = require('@iktakahiro/markdown-it-katex');
    const options = {
        inlineOpen: "$",
        inlineClose: "$",
        blockOpen: "$$",
        blockClose: "$$",
        renderingOption: {},
    };
    var markdown_render = require('markdown-it')().use(math);
    return markdown_render;
}
function render(content)
{
    var math = require('@iktakahiro/markdown-it-katex');
    const options = {
        inlineOpen: "$",
        inlineClose: "$",
        blockOpen: "$$",
        blockClose: "$$",
        renderingOption: {},
    };
    var engine = require('markdown-it')().use(math);
    return engine.render(content);
}

module.exports = {
    engine_init,
    render
}