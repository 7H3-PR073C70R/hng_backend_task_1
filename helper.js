const operationType = {
    "add": "addition",
    "subtract": "subtraction",
    "multiply": "multiplication",
}

// get the operation type
function getOperationType(operation) {
    if (
        operation.includes("add")
        || operation.includes("+")
        || operation.includes("plus") 
        || operation.includes("addition") 
        || operation.includes("sum") 
        || operation.includes("add up") 
        || operation.includes("addition") 
        || operation.includes("add together") 
        || operation.includes("add up") 
        || operation.includes("add up to") 
        || operation.includes("add to") 
        || operation.includes("add up to")
        ) {
        return operationType.add;
    } else if (
        operation.includes("subtract") 
        || operation.includes("-") 
        || operation.includes("minus") 
        || operation.includes("subtraction") 
        || operation.includes("difference") 
        || operation.includes("take away") 
        || operation.includes("take away from") 
        || operation.includes("take from") 
        || operation.includes("take off") 
        || operation.includes("take off from") 
        || operation.includes("take off of") 
        || operation.includes("take out") 
        || operation.includes("take out of") 
        || operation.includes("take out from") 
        || operation.includes("take away from") 
        || operation.includes("take away of") 
        || operation.includes("take away off") 
        || operation.includes("take away out") 
        || operation.includes("take away out of") 
        || operation.includes("take away out from") 
        || operation.includes("take away from") 
        || operation.includes("take away of") 
        || operation.includes("take away off") 
        || operation.includes("take away out") 
        || operation.includes("take away out of") 
        || operation.includes("take away out from")
        ) {
        return operationType.subtract;
    } else if (operation.includes("multiply") 
    || operation.includes("*") 
    || operation.includes("times") 
    || operation.includes("multiplication") 
    || operation.includes("product") 
    || operation.includes("multiply by") 
    || operation.includes("multiply with") 
    || operation.includes("multiply to") 
    || operation.includes("multiply up") 
    || operation.includes("multiply up to") 
    || operation.includes("multiply up by") 
    || operation.includes("multiply up with") 
    || operation.includes("multiply up to") 
    || operation.includes("multiply together") 
    || operation.includes("multiply together by") 
    || operation.includes("multiply together with") 
    || operation.includes("multiply together to") 
    || operation.includes("multiply together up") 
    || operation.includes("multiply together up to") 
    || operation.includes("multiply together up by") 
    || operation.includes("multiply together up with") 
    || operation.includes("multiply together up to")
    ) {
        return operationType.multiply;
    } else {
        return "unknown";
    }
}

exports.getOperationType = getOperationType;
exports.operationType = operationType;