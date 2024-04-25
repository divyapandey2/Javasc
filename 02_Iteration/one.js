//for
//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//     console.log(element);
//  }
//it will give error cause array is not defined

//----------------for loop------------------

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
//  }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 is best number");
//     }
    
//     console.log(element);
//  }


//----------------Table-------

// for (let i = 0; i <=10;i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j <= 10;j++) {
//         console.log(i+'*'+ j + '=' +i*j);
        
//         }
//     }
    
   
//break and continue

// for (let index = 1; index < 20; index++) {
//    if ( index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }
// break statement pull us out of the code
// for (let index = 1; index < 20; index++) {
//     if ( index == 5) {
//          console.log(`Detected 5`);
//          continue
//      }
//      console.log(`Value of i is ${index}`);
     
//  }
for (let index = 1; index < 20; index++) {
    if ( index == 5) {
         console.log(`Detected 5`);
      
     }
     console.log(`Value of i is ${index}`);
     
 }