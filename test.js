const obj = {
    a: 1,
    b: 'food',
    c: new Date(),
    'i like stuff': 123
};

console.log(obj.a);
console.log(obj['i like stuff'])


function getProp(prop) {
    return obj[prop]
}