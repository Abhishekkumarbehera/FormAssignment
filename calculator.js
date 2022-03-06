function cal(){      
            var n1 = parseInt (document.getElementById("n1").value);
            var n2 = parseInt (document.getElementById("n2").value);
            var n3 = parseInt (document.getElementById("n3").value);
            var oper = document.getElementById("operators").value;
            var result = document.getElementById("result");

            console.log(oper)

            if(oper ==="add")
            {
                let r = n1+n2+n3;
                result.innerHTML="Thank you for using my calculator, your output is "+r;
            }
            if(oper ==="sub")
            {
                let r = n1-n2-n3;
                console.log(r)
                result.innerHTML="Thank you for using my calculator, your output is "+r;
            }
            if(oper ==="mul")
            {
                let r = n1*n2*n3;
                console.log(r)
                result.innerHTML="Thank you for using my calculator, your output is "+r;
            }
            
        }