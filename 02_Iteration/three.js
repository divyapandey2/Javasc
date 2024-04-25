//for of

// const arr =[1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num)
// }


//Maps:unique values only

// const map =new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// // console.log(map);

// for(const[key,value] of map){
//     console.log(key,':-',value);
// }

const myObject={
    'game 1':'Magic',
    'game 1':'Magic2',
}
for(const [key,value] of myObject) {
    console.log(key,':-',value);
}
