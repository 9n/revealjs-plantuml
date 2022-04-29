import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Plantuml from '../src/plantuml.js';

let deck = new Reveal({
    plugins: [Markdown, Plantuml]
})
deck.initialize();