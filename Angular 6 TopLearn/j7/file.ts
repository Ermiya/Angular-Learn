let Name: string = 'ali';

function MySum<T>(value: T): T {
  return value;
}

console.log(MySum(234));

console.log(MySum('ALI'));

console.log(MySum<string>('Far'));

class MyGeneric<T> {
  param: T;

  constructor(param: T) {
    this.param = param;
  }
}

var m = new MyGeneric<string>('Farrr');

console.log(m.param);

function Names<T>(params: T[]): T[] {
  return params;
}

console.log(Names<string>(["AAA","BBB"]));

console.log(Names<number>([333,444,555]));
