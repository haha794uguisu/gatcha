function getNumber(){
    let per = document.getElementById('per1');
    let perValue = per.value;
    let time = document.getElementById('time');
    let timeValue = time.value;
    
    if (/^[0-9, .]+$/.test(perValue) && /^[0-9]+$/.test(timeValue)) {
        console.log("a");
        getResult();
    } else {
        alert("半角英数字で入力してください。");
    }


    function getResult(){
        
        let result = (1 - (1 - (perValue / 100)) ** timeValue) * 100;
        let resultEasy = Math.round(result * 100) / 100;
        /*
        let resultDisplay = document.getElementById("result");
        resultDisplay.textContent = resultEasy;
        console.log("b");
        */
        easeOut();
        

        function easeOut(){

            let totalRepeat = 101;
            let totalTime = 2000;
            let intervalTime = totalTime / totalRepeat;
            let i = 0;
            let k = 0;

            const intervalId = setInterval(() => {

                if (i <= 50){
                    var k = ((i / 100) ** 3) * 4
                    getResult2();
                }else{
                    var k = 1 - (((1 - (i / 100)) ** 3) * 4)
                    getResult2();
                }
                i++;
                
                if (i > 100) {
                    clearInterval(intervalId);
                }

                function getResult2(){
                    var result2 = k * result;
                    var result2Easy = Math.round(result2 * 100) /100;
                    var result2Display = document.getElementById("result2");
                    result2Display.textContent = result2Easy;
                    drawGraph();

                    function drawGraph(){
                        const canvas = document.getElementById('myCanvas');

                        const canvasStyles = window.getComputedStyle(canvas);
                        const cssWidth = parseInt(canvasStyles.width);
                        const cssHeight = parseInt(canvasStyles.height);

                        canvas.width = cssWidth;
                        canvas.height = cssHeight;

                        const ctx = canvas.getContext('2d');
                        ctx.strokeStyle = '#F6F7F8';
                        ctx.lineWidth = 35;
                        ctx.beginPath();
                        ctx.arc(canvas.width / 2 , canvas.height / 2, 175, Math.PI*(1.5), Math.PI*(3.5));
                        ctx.stroke();

                        ctx.strokeStyle = '#007592ff';
                        ctx.lineWidth = 30;
                        ctx.beginPath();
                        ctx.arc(canvas.width / 2 , canvas.height / 2, 175, Math.PI*(1.5), Math.PI*(1.5 + (result2 * 2 / 100)));
                        ctx.stroke();
                    }
                }

                

            }, intervalTime);
        }
    }   
}


