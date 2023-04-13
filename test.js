const date = new Date();
var day = date.getDay();
console.log(day);

switch (day) {
    case "monday":
        console.log("monday is correct");
        break;
    case "tuesday":
        console.log("tuesday is correct");
        break;
    case "Wednesday":
        console.log("Wednesday is correct");
        break;
    case "Thursday":
        console.log("Thursday is correct");
        break;
    case "Friday":
        console.log("Friday is correct");
        break;
    case "Saturday":
        console.log("Saturday is correct");
        break;
    case "Sunday":
        console.log("Sunday is correct");
        break;
    default:
        console.log("false");
        break;
}