// Date
const date= new Date()
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toISOString());

console.log(typeof date);
console.log(date.getDate());
console.log(date.getDay());

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getMilliseconds());
console.log(date.getTime()); 
console.log(date.getMinutes());

const now= Date.now()
console.log(now);

const d= new Date("2022-10-20")
console.log(d);

// Date calculations

const d1= new Date();
const d2= new Date("2025-04-21");
console.log(d2-d1);
// diffrence between date and miliseconds


// CountDown Timer
// Days, hour, mintue,seconds

const date1= new Date();
const date2= new Date("2028-07-14T00:00:00")

const date3= date2-date1
const days=Math.floor( date3/(1000*60*60*24));

console.log(days);

const hour=Math.floor( date3/(1000*60*60)%24)
console.log(hour);

const minute=Math.floor( (date3/(1000*60)%60))
console.log(minute);

console.log(`Olymphics CountDown Timer: ${days} hour: ${hour} minutes: ${minute} `);