// 1. 

function getFirstWord(a: string): number {
	return a.split(/ +/)[0].length;
}

// 2. 

function getUserNamings(a: {name: string; surname: string}): object {
    return { 
          fullname: a.name + " " + a.surname, 
          initials: a.name[0] + "." + a.surname[0] 
      };
}

//3 <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>

function getAllProductNames(a: {products?: {name: string}[]}): unknown[] {
    return a?.products?.map(prod => prod?.name) || [];
}

// 4.1

// easy way is using 'as' keyword
// hard way is ?...
interface ObjectForIncomingData {
    name: () => string;
    [key: string]: number | (() => string) // сделал через индексный тип (без понятия где тут может пригодится as) 
}

function heyy(a: ObjectForIncomingData) {
    return "hey! i'm " + a.name();
}
heyy({name: () => "roman", cuteness: 100})
heyy({name: () => "vasyl", coolness: 100})

// 4.2

class Animal {
    name: ( () => string );
    param: unknown;
    constructor(name: string, param: unknown) {
        this.name = ( () => name );
        this.param = param
    }
}
class Cat extends Animal {
    constructor(name: string, param: unknown) {
        super(name, param)
    }
}
class Dog extends Animal{
    constructor (name:string, param: unknown){
        super(name, param)
    }
}
function hey(abstractPet: {name: () => string; param: unknown}) {
    return "hey! i'm " + abstractPet.name();

}
let a = new Cat("snizhok", true)
let b = new Dog("sirko", 333)
hey(a)
hey(b)

// 5.

// google for Record type

function stringEntries(a: unknown[] | Record<string, unknown>): unknown[] {
    return Array.isArray(a) ? a  :  Object.keys(a)
}

// 6.

// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number): Promise<string> {
    return "*".repeat(a)
}
const hello = async (): Promise<string> => {
   return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))