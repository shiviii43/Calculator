//JavaScript Code that will make the buttons function as well as this code will be responsible for the input, calculation and the output.


let insert = document.getElementById('input-box');      //Used to insert and display values to the user.
let buttons = document.querySelectorAll('button');      //Used to access all the buttons.

//A string variable to store the input of the user.
let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{

        //When the user will click on the '=' the string values will be evaluated and stored in the insert bar.
        if(e.target.innerHTML == '='){
            str = eval(str);
            insert.value = str;
        }

        //AC button will clear all the existing values in the string and then display it in the insert bar.
        else if(e.target.innerHTML == 'AC'){
            str = "";
            insert.value = str;
        }

        //DEL button will remove the last entered value in the array aand then display it.
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            insert.value = str;
        }

        //Else any number pressed will be added to the current string and then displayed.
        else{
            str = str + e.target.innerHTML;
            insert.value = str;
        }
    })
});