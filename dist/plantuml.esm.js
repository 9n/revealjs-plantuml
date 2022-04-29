import {encode as $6SDkj$encode} from "plantuml-encoder";


const $28f4e3c50d257860$var$Plugin = ()=>{
    return {
        id: 'plantuml',
        init: function(reveal) {
            let server = reveal.getConfig().serverPath || '//www.plantuml.com/plantuml/svg/';
            reveal.on('ready', ()=>{
                document.querySelectorAll('.reveal pre code.plantuml').forEach(function(block) {
                    let img = document.createElement("img");
                    img.setAttribute("src", server + $6SDkj$encode(block.innerText));
                    img.setAttribute("class", "plantuml");
                    let pre = block.parentElement;
                    pre.parentNode.replaceChild(img, pre);
                });
            });
        }
    };
};
var $28f4e3c50d257860$export$2e2bcd8739ae039 = $28f4e3c50d257860$var$Plugin;


export {$28f4e3c50d257860$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=plantuml.esm.js.map
