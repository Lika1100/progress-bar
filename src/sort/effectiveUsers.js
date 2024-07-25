function effectiveUsers(submissions) {
    const result = {}
    submissions.forEach((x) => {
        result[x.user] ??= true
        result[x.user] &&= x.status === "OK"
    })

    return Object.keys(result).filter((key) => result[key])
}

const submissions = [
    {
      problem: "find-developers", 
      user: "max",
      status: "TIME_LIMIT",
    },
    {
      problem: "remove-key", 
      user: "serge",
      status: "OK",
    },
    {
      problem: "extract-key", 
      user: "alex",
      status: "OK",
    },
    {
      problem: "remove-key", 
      user: "max",
      status: "OK",
    },
    {
      problem: "find-developers", 
      user: "kate",
      status: "RUNTIME_ERROR",
    },
    {
      problem: "find-developers", 
      user: "serge",
      status: "OK",
    },
      {
      problem: "remove-key", 
      user: "kate",
      status: "RUNTIME_ERROR",
    },
  ];

  console.log(effectiveUsers(submissions))