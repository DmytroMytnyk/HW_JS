//Iterator for even items
const evenIterator = {
  items: ["hello", 1, 0, null, "world", "baz", { foo: "bar" }, Infinity, NaN],
  current: -1,
  next() {
    return {
      value: this.items[this.current+=2],
      done: this.current > this.items.length,
		};
  },
  [Symbol.iterator]() {
    return this;
  },
};
for (const element of evenIterator) {
  console.log(element);
}


//Iterator for odd items 
const oddIterator = {
  items: ["hello", 1, 0, null, "world", "baz", { foo: "bar" }, Infinity, NaN],
  current: -2,
  next() {
    return {
      value: this.items[this.current+=2],
      done: this.current > this.items.length,
		};
  },
  [Symbol.iterator]() {
    return this;
  },
};
for (const element of oddIterator) {
  console.log(element);
}

// Generator of leap years
const isLeapYear = function* (from, to) {
  for (let year = from; year <= to; year++) {
		if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
      yield year;
    }
  }
};
for (const generator of isLeapYear(1900, new Date().getFullYear())) {
  console.log(generator);
}

//Variable interval counter generator
const countGenerator = function* (start = 0, initialInterval = 1 ) {
  let counter = start, interval = initialInterval;
  while(true) {
    let newInterval = yield counter += interval;
      if (newInterval) {
        interval = newInterval
      }
    }
 } 
	
let counter = countGenerator();

console.log(counter.next().value); 
console.log(counter.next().value); 

console.log(counter.next(10).value); 
console.log(counter.next(10).value); 

console.log(counter.next(100).value); 
console.log(counter.next(100).value); 

let counterNext = countGenerator(10, 25);

console.log(counter.next().value); 
console.log(counter.next().value); 

console.log(counter.next(10).value); 
console.log(counter.next(10).value); 

console.log(counter.next(100).value); 
console.log(counter.next(100).value);


// Even number random sequence generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const evenNumber = function* (start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      yield i;
    }
  }
};
const evenArray = [...evenNumber(0, 20)];
const generateEvenSequence = function* (start, end) {
  yield* evenNumber (start, end);
}
  const evenArrayOne = [...generateEvenSequence(1, getRandomInt(1, 20))];
  const evenArrayTwo = [...generateEvenSequence(1, getRandomInt(1, 20))];
  const evenArrayThree = [...generateEvenSequence(1, getRandomInt(1, 20))];
  const evenArrayFour = [...generateEvenSequence(1, getRandomInt(1, 20))];
  const evenArrayFive = [...generateEvenSequence(1, getRandomInt(1, 20))];
  
  console.log(evenArrayOne);
  console.log(evenArrayTwo);
  console.log(evenArrayThree);
  console.log(evenArrayFour);
  console.log(evenArrayFive);