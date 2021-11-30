process.stdout.write('hello from spinner1.js... \rheyyy\n');


   
const spinArr = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\n'];
let time = 100;
  for(let i = 1; i < 10; i++ ){
    time +=200;
 setTimeout(() => {
process.stdout.write(spinArr[i]);
}, time);
  };