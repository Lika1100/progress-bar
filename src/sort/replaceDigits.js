function replaceDigits(s) {
    const obj = {
      "nil": 0,
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9
    }
    return s.split(" ").map((x) => {
        console.log(obj[x])
      if (obj[x] !== undefined) {
        x = obj[x]
      }
      console.log(x)
      return x
    }).join(" ")
}

//'Arsenal just conceded another goal, 2 nil' == 'Arsenal just conceded another goal, 2 0'

console.log(replaceDigits('Arsenal just conceded another goal, 2 nil'))