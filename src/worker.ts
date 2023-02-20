// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

ctx.addEventListener("message", (event) => {
  let sum = 0;
  for (let i = 0; i < 2000000000; i++) sum += i;
  postMessage(sum);
});

export default null as any;
