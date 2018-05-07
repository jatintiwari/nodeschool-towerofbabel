// calculating the fibonacci sequence to the 1000st number
const fibonacci = {
  // Make a method that has the Symbol.iterator function.
  [Symbol.iterator]() {
    let previous = 0, current = 1;
    // The resulting iterator object has to have a next method:
    return {
      next() {
        [previous, current] = [current, previous + current];
        // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
        if (previous < 100) return { done: false, value: previous }
        return { done: true };
      }
    }
  }
}

const fizzBuzz = {
  [Symbol.iterator]() {
    let n = 1;
    return {
      next() {
        let val = n;
        if(((n % 5) == 0) && ((n % 3) == 0)) val = 'fizzbuzz';
        else if((n % 5) == 0) val = 'buzz';
        else if((n % 3) == 0)  val = 'fizz';

        if(n == 25) return { done: true };
        n++;
        return { return: false, value: val };
      }
    }
  }
}

// The result's value property will become `n`.
// for (var n of fibonacci) {
//   console.log(n);
// }

for (var n of fizzBuzz) {
  console.log(n);
}