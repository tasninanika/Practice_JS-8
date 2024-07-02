// first task
function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const feetInch = feetToInch(6);
console.log(feetInch);




// second task
function centimeterToMeter(cm){
    const meter = cm / 100;
    return meter;
}

const centiMeter = centimeterToMeter(250);
console.log(centiMeter);




// third task
function paperRequirements(book1, book2, book3){
    const book1Quantity = 3;
    const book2Quantity = 5;
    const book3Quantity = 2;

    const book1Paper = book1 * book1Quantity;
    const book2Paper = book2 * book2Quantity;
    const book3Paper = book3 * book3Quantity;

    const totalPaper = book1Paper + book2Paper + book3Paper;

    return totalPaper;
}

const totalPaperRequirements = paperRequirements(100, 200, 300);
console.log(totalPaperRequirements);




// fourth task
const names = ['anika', 'jarin', 'tasnin anika'];
function bestFriend(arr){
    let bigName = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(bigName < arr[i]){
            bigName = arr[i];
        }
    }
    return bigName;
}
const finalName = bestFriend(names);
console.log(finalName);




// fifth task
function onlyPositive(arr){
    const arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            break;
        }
        arr2.push(arr[i]);
     }
     return arr2;
    
}

const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
const result = onlyPositive(numbers);
console.log(result);



// sixth task
function onlyPositiveNum(array){
    const array2 = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            continue;
        }
        array2.push(array[i]);
     }
     return array2;
}

const numbers2 = [45, 87, 96, 11, 63, -56, 71, 28];
const result2 = onlyPositiveNum(numbers2);
console.log(result2);


