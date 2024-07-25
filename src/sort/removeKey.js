function removeKey(objects, key) {
    return objects.map((x) => {
      const copy = {...x}
      delete copy[key]
      return copy
    })
}


  const users = [
    { name: "A", age: 11, location: "Qwe" },
    { name: "B", age: 54, location: "Asd" },
    { name: "C", age: 23, location: "Zxc" },
  ];
  
  console.log(removeKey(users, "age"));
  
  const expected = [
    { name: "A", location: "Qwe" },
    { name: "B", location: "Asd" },
    { name: "C", location: "Zxc" },
  ];