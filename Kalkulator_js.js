function Click(string){
    let inputs = document.getElementsByTagName("input");
    let input = inputs[0];
    input.value += string;
}

function Clear(){
    let inputs = document.getElementsByTagName("input");
    let input = inputs[0];
    input.value = "";
}

function Сalculate(){
    let inputs = document.getElementsByTagName("input");
    let input = inputs[0];
    let str = input.value;
    let action_symb = "+-*/";

    for(i = 0; i < str.length; i++){//czy sa litery
       if(isNaN(str[i]) && !action_symb.includes(str[i])){
        alert("There is error in the input field!");
        return 0;
       }
    }

    if(isNaN(str[0]) || isNaN(str[str.length - 1])){//czy sa dzialania na pocz. i koncu
        alert("There is error in the input field!");
        return 0;
    }

    for(i = 1; i < str.length - 2; i++){
        if(isNaN(str[i]) && isNaN(str[i + 1])){
            alert("There are two action symbols in the row!");
            return 0;
        }
    }

    let numbers = str.split(/[-\*\+\/]/);
    let actions = [];
    for (i = 0; i < str.length; i++){//zapis kolejnosci dzialan
        if(action_symb.includes(str[i])){
            actions.push(str[i]);
        }
    }

    // for(i = 0; i < numbers.length; i++){
    //     alert(numbers[i]);
    // }

    
    // for(i = 0; i < actions.length; i++){
    //     alert(actions[i]);
    // }



    var final_numbers = [Number.parseInt(numbers[0])];
    var final_actions = [];

    var count = 0;

    for(i = 1; i < numbers.length; i++){//mnozenie i dzielenie
        switch(actions[i - 1]){
            case "+":
                final_numbers.push(Number.parseInt(numbers[i]));
                final_actions.push("+");
                count++;
                break;
            case "-":
                final_numbers.push(Number.parseInt(numbers[i]));
                final_actions.push("-");
                count++;
                break;
            case "*":
                final_numbers[count] *= numbers[i]; 
                break;
            case "/":
                final_numbers[count] /= numbers[i];
                break;
        }
    }

    
    // for(i = 0; i < final_numbers.length; i++){
    //     alert(final_numbers[i]);
    // }

    
    // for(i = 0; i < final_actions.length; i++){
    //     alert(final_actions[i]);
    // }
    

    var result = Number.parseInt(final_numbers[0]);
    
    for(i = 1; i < final_numbers.length; i++){//dodawanie i dejmowanie
        switch(final_actions[i - 1]){
            case "+":
                result += Number.parseInt(final_numbers[i]);
                break;
            case "-":
                result -= Number.parseInt(final_numbers[i]);
                break;
        }
    }

    input.value = result;
    
}