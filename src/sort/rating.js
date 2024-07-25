function rating(meet, boss) {
    const names = Object.keys(meet)
    const score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
    return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
  }