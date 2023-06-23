// interface aObject {
//     [key: string]: undefined | {cvalue: undefined | string | number}
// } ну майже)
interface BigObject {
    [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}
function summ(a: BigObject) {
    const x: number[] = Object.keys(a).map((k) => {
        const elem: undefined | {cvalue: number | string | undefined | BigObject} = a[k];
        if (typeof elem === 'undefined' || typeof elem.cvalue === 'undefined') { return 2021 };
        if (typeof elem.cvalue === 'string') { return +elem.cvalue || 2021 };
        if (typeof elem.cvalue === 'object') { return summ(elem.cvalue) };
        return elem.cvalue
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
let a = summ({
    hello: {cvalue: 1}, 
    world: { cvalue: 
       { yay: { cvalue: "2" }  } 
    }
})
console.log(a)
