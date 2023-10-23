// // Task. 1
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   };
  
//   function listObjectProperties(obj) {
//     var properties = [];
  
//     for (var key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         properties.push(key);
//       }
//     }
  
//     return properties.join(',');
//   }
  
//   var propertyList = listObjectProperties(student);
//   console.log(propertyList);

// // Task. 2
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   };
  
//   console.log("Object before deleting the 'rollno' property:");
//   console.log(student);
  
//   delete student.rollno;
  
//   console.log("Object after deleting the 'rollno' property:");
//   console.log(student);

// // Task. 3
// var objWithSum = {
//     a: 10,
//     b: 10
//   };
  
//   const newObjWithSum = {
//     ...objWithSum, 
//     sum: objWithSum.a + objWithSum.b
//   };
  
//   console.log(newObjWithSum);

// // Task. 4
// const objWithRes = {
//     n: 9,
//     info: "n is smaller than 20"
//   };
  
//   if (objWithRes.n > 10) {
//     const newObjWithRes = {
//       ...objWithRes,
//       info: "n is bigger than 10"
//     };
  
//     console.log(newObjWithRes);
//   } else {
//     console.log(objWithRes);
//   }

  


  
  