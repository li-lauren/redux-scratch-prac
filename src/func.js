// goal is to trim a string and wrap with html tags

const input = "   word   "

// non-FP method
const res = `<div>${input.trim()}<div>`

// w/ FP principles
const trim = str => str.trim();

// no choice of type
// const wrap = str => `<div>${str}<div>`;

// can't use with pipe / compose which require all args to be fns
// const wrap = (type, str) => `<${type}>${str}</${type}>`;

// with currying!
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// using lodash func programming utilities
const transform = pipe(trim, toLowerCase, wrap("span"));

// can also use compose, but the ordering is backwards
// const transform = compose(wrap("span"), toLowerCase, trim);

console.log(transform(input));

