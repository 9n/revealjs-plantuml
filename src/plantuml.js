import { encode } from 'plantuml-encoder';

const Plugin = () => {
    return {
        id: 'plantuml',
        init: function (reveal) {
            let server = reveal.getConfig().serverPath || '//www.plantuml.com/plantuml/svg/';
            reveal.on('ready', () => {
                document.querySelectorAll('.reveal pre code.plantuml').forEach(function (block) {
                    let img = document.createElement("img");
                    img.setAttribute("src", server + encode(block.innerText));
                    img.setAttribute("class", "plantuml");

                    let pre = block.parentElement;
                    pre.parentNode.replaceChild(img, pre);
                });
            });
        }

    };
};


export default Plugin;