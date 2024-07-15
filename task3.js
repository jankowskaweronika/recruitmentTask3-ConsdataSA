const myFunction = (elements, elemToFind, minOccurrences) => {
  const elementArray = elements.split(",");

  const minOcc = parseInt(minOccurrences, 10);

  const count = elementArray.filter((element) => element === elemToFind).length;

  return count >= minOcc;
};

console.log(myFunction("123,345,123", "123", "2"));
console.log(myFunction("ala,ma,kota,ala", "kota", "2"));

console.log(myFunction("a,b,c,a,a", "a", "3"));
console.log(myFunction("a,b,c,a,a", "a", "10"));
console.log(myFunction("a,b,c,a,a", "d", "0"));
