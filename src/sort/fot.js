function totalIncome(employees) {
   return employees.map((x) => {
    if (x.level === "junior") {
        return x.monthlyWage*12
    } else if (x.level === "middle") {
        const yearWage = x.monthlyWage * 12
        return yearWage + yearWage*0.1
    } else if (x.level === "senior") {
       const yearWage = x.monthlyWage * 12 
       const sum = yearWage + yearWage * 0.1 + yearWage * 0.05 * x.tenure
       return sum
    } else {
       const yearWage = x.monthlyWage * 12 
       const sum = yearWage + yearWage * 0.2 + yearWage * 0.1 * x.tenure
       return sum
    }
  })
  .reduce((a, b) => a + b, 0)
}

const employees = [
    {
      name: "Andrew Clark",
      level: "junior",
      monthlyWage: 5000,
      tenure: 2,
    },
    {
      name: "Dan Abramov",
      level: "middle",
      monthlyWage: 6000,
      tenure: 4,
    },
    {
      name: "Sebastian Markbåge",
      level: "teamlead",
      monthlyWage: 10000,
      tenure: 10,
    },
    {
      name: "Sophie Alpert",
      level: "senior",
      monthlyWage: 9000,
      tenure: 9,
    },
    {
      name: "Tianyu Yao",
      level: "middle",
      monthlyWage: 7000,
      tenure: 3,
    },
];

console.log(totalIncome(employees)) // 663 000