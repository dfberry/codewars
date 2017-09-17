//https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464

const animals = [
  {
      "name": "cat",
      "size": "small",
      "weight": 5
  },
  {
      "name": "dog",
      "size": "small",
      "weight": 10
  },
  {
      "name": "lion",
      "size": "medium",
      "weight": 150
  },
  {
      "name": "elephant",
      "size": "big",
      "weight": 5000
  }
];

// return names out of list of json
let animal_names = animals.map((animal, index, animals) => {
  return animal.name;
});

// return small animals only
let small_animals = animals.filter(animal => {
    return animal ;
});

let total_weight = animals.reduce((weight,animal,index, animals) => {
  return weight += animal.weight;
},0);
//console.log(animal_names);
//console.log(small_animals);
//console.log(total_weight);