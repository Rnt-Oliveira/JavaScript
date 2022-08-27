const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799px) 100vw, 372px",
    feature:"(max-width:  799px) 100vw, 372px",
    story: "(max-width: 799px) 100vw, 670px",

};



function makeSrcset(imgSrc) {
    let markup = [];
    let width  = 400;
    
    for (let i = 0; i<5; i++); {
        markup["i"] = imgSrc + "-" + width + ".jpg" + width + "w";
        width+=400;
    }
    
    return markup.join();

}


for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0,-8);
    let srcset = makeSrcset(imgSrc);
    IMAGES[i].setAttribute("srcset", srcset);
    console.log("imgSrc");
    
    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    IMAGES[i].setAttribute("sizes", SIZES);
    console.log(SIZES);

}

/*Uncaught ReferenceError: i is not defined é exibida se referindo a string markup[i] = imgSrc + "-" + width + ".jpg" + width + "w"; ainda não obtive uma resposta válida para o problema, perguntei no grupo de estudos, estou aguardando uma reposta*/

/*              Acredito ter resolvido o problema mudando 
    | markup[i] = imgSrc + "-" + width + ".jpg" + width + "w"; |
                                para 
    | markup["i"] = imgSrc + "-" + width + ".jpg" + width + "w"; |*/