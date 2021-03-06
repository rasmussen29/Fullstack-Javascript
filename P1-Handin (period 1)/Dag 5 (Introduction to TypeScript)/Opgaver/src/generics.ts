function reverseArr<A>(arr: Array<A>) {
  return arr.reverse();
}

console.log(
  reverseArr<string>(["a", "b", "c"])
);
console.log(
  reverseArr<number>([1, 2, 3])
);
console.log(
  reverseArr<boolean>([true, true, false])
);

class DataHolder<A> {
  value: A;

  constructor(v: A) {
    this.value = v;
  }
  get(): A {
    return this.value;
  }
  set(v: A) {
    this.value = v;
  }
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.set("HAHAH");
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.set(500);
console.log(d2.value);
