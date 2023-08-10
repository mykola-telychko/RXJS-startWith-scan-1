import { startWith, scan } from 'rxjs/operators';
import { of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/startwith

//emit list
const srcSeq = of('one', 'two', 'three');
//start with 'Hello', concat current string to previous
const example = srcSeq.pipe(
  startWith('start-zero value: '),
  scan((acc, curr) => `${acc} ${curr}`)
);

const subscribe = example.subscribe((val) => console.log(val));
