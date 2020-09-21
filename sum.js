const args = process.argv;
let arr = args.slice(2);

const sum = (x) => {
  return parseInt(x[0]) + parseInt(x[1]);
}

console.log(sum(arr));
