function pow(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return Math.pow(a, b)
    }
    if (typeof a === "number" && typeof b === "undefined") {
        return function(b) {
            if (typeof b === "number") {
                return Math.pow(a, b) 
            }
            throw new Error("INVALID_ARGUMENT")
        }
    }
    throw new Error("INVALID_ARGUMENT")
}

//console.log(pow(2, 2))
console.log(pow(2)(2))