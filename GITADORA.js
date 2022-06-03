(()=>{


    const $doc = document.querySelectorAll(".textanimation");
    for(let x = 0; x < $doc.length; x++) {
        const   targetElement = $doc[x],
        texts = targetElement. textContent,
        textArray = [];

        targetElement.textContent = "";

        for (let y = 0; y < texts.split("").length; y++){

            const textsp = texts.split("")[y];

            if (textsp === " "){
                textArray.push(" ");
            } else{
            textArray.push('<span style="animation-delay: ' + ( y * 0.2) + 's;">' + textsp + '</span>');
            }

        }
        for (let z = 0; z < textArray.length; z++){
    

            targetElement.innerHTML += textArray[z];
        }



    }
    


    })();