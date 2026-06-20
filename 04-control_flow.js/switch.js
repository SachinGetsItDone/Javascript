const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case match");
        break;
}

const userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("Full Access");
        break;
    case "user":
        console.log("Limited Access");
        break;
    default:
        console.log("No Access");
        break;
}
