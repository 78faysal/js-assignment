// 1st redianToDegree
function radianToDegree(radianValue) {
    return radianValue * (180 / 3.1416)
}
// console.log(radianToDegree(23.4))


/////////////////*******************************************///////////////////////


// 2nd check file name is a javascript file or not
function isJavaScriptFile(fileName) {
    if (fileName.match(".js")) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isJavaScriptFile('myFile.js'))


/////////////////////****************************///////////////////


// 3rd calculate the total oil price that i have to pay
function oilPrice (diesel, petrol, octane){
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const totalPrice = (dieselPrice * diesel) + (petrolPrice * petrol) + (octanePrice * octane)

    return "Your total oil price is -> "+  totalPrice
}
// console.log(oilPrice(0, 1, 1))


/////////////////////****************************///////////////////


function publicBusFare (totalMember) {
    const busMember = Math.floor(totalMember / 50) * 50;
    const busRemainingMember = totalMember - busMember;
    const microbusMember = Math.floor(busRemainingMember / 11) * 11;
    const publicMember = busRemainingMember - microbusMember;
    console.log(publicMember)
}
publicBusFare(146)