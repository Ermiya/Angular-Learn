function    sum (a:any,b:any):any
{
    return a+b;
}

console.log(sum(3,6));



function MySum(a:number,b:number) :number
{
    return  a+b;
}

console.log(MySum(7,4));


let FullName = function (FirstName:string,LastName:string):string {
    return FirstName + " " + LastName;
}

console.log(FullName("Farshid" , "Saeidi"));

function ShowNames(name:string,...names:string[]) {
    console.log(names);
    return name + "------------" + names.reverse().join(" , ");
}

console.log(ShowNames("Farshid", "reza","Hasan","Ali"));

let sumsum = (a:number,b:number) => a+b;
console.log(sumsum(77,99));

