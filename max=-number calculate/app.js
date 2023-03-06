// class StudentGroup {
//   constructor(students) {
//     this.students = students;
//   }

//   getMaxAge() {
//     let maxAge = 0;
//     for (let i = 0; i < this.students.length; i++) {
//       if (this.students[i].age > maxAge) {
//         maxAge = this.students[i].age;
//       }
//     }
//     return maxAge;
//   }
// }

// const stdData = new StudentGroup([
//   { name: 'Frank', age: 16 },
//   { name: 'Ghosh', age: 15 },
//   { name: 'Hills', age: 17 },
//   { name: 'Irwin', age: 17 },
//   { name: 'Jones', age: 14 }
// ]);

// const maxAge = stdData.getMaxAge();
// console.log('The maximum age for the English class is:', maxAge);


// class StudentGroup {
//   constructor(students) {
//     this.students = students;
//   }
 
//     getMaxAge(){
    
// let max = 0;
// for (let i = 0; i< this.students.length; i++){
//  if(this.students[i].age > max){
//   max = this.students[i].age;
//  }
// }
// return max
// console.log(max);
//     }


// }


// function StudentGroup(students){
//   this.students = students;

//   this.getMaxAge = function(){
//     let max = 0;
//     for(var i = 0 ; i < this.students.length; i++){
//       console.log(this.students[i].age);
//       if(this.students[i].age > max){
//         max = this.students[i].age
//       }
//     }
//     return max
//   }

// }


// let stdData = new StudentGroup([
//     { name: 'Frank', age: 16 },
//     { name: 'Ghosh', age: 15 },
//     { name: 'Hills', age: 17 },
//     { name: 'Irwin', age: 17 },
//     { name: 'Jones', age: 14 }
//   ]);

//   document.write( `The maximum age for the English class is calculated correctly: ${stdData.getMaxAge(this.age) === 17}<br />`);








function StudentGroup(subject){
this.maths = subject;

this.getAverageAge = function(age){
  let sum = 0;
  for(var i = 0 ; i < this.maths.length; i++){
    sum += this.maths[i].age;
  }
  console.log( sum );
  return sum / this.maths.length;
}

}








// Initialize a student group with existing students
let maths = new StudentGroup([
  { name: 'Adams', age: 16 },
  { name: 'Baker', age: 15 },
  { name: 'Clark', age: 15 },
  { name: 'Davis', age: 16 },
  { name: 'Evans', age: 14 }
]);

// Confirm user details have been updated
document.write( `The average age for the Maths class is calculated correctly: ${maths.getAverageAge(this.age) === 15.2}<br />`);










//     getMaxAge()
//     // console.log(english)



//     /**
//  * @author Copyright RIKSOF (Private) Limited - All Rights Reserved.
//  *
//  * Unauthorized copying of this file, via any medium is strictly prohibited
//  * Proprietary and confidential.
//  */

// /**
//  * This class modela information on a single student.
//  */
// class StudentInformation {
//     /**
//      * Constructor sets the values for this model. Please note all member
//      * variables in this class are public and can be accessed directly.
//      *
//      * @param {string} n                          Name of the student.
//      * @param {number} a                          Age of student.
//      */
//     constructor( n, a ) {
//       this.name = n;
//       this.age = a;
//     }
//   }
  
//   /**
//    * The student group class contains a list of students that study together in a lesson.
//    */
//   class StudentGroup {
   
//     /**
//      * This is ths constructor for the student group. We send it a list of students that
//      * are part of the group.
//      *
//      * @param {StudentInformation} students           Students part of this group.
//      *
//      */
//     constructor( students ) {
//       this._students = students;
//     }
   
//     /**
//      * You are to complete this method to return the average age of
//      * all students in the group.
//      *
//      * @returns {number} avg                      Average age for all students in group.
//      */
//     getAverageAge(age) {
//       this.age = age
//          let reducer = (total, currentValue) => total + currentValue;
//          let sum = arr.reduce(reducer)
//           return sum / arr.length;
//       let people = age.map(person => person.age)
//       console.log(people)
     
//     }
   
//     /**
//      * You are to complete this method to return the maximum age for
//      * this student group.
//      *
//      * @returns {number} maxAge                   Maximum age for this student group.
//      */
//     getMaxAge(age) {
//        this.age = age
//       console.log(age)
//       let reducer = (max,currentValue) => max + currentValue;
//       let MaxAge = arr.reducer(reducer)
//       return MaxAge * arr.length;
//       let people = age.map(person => person.age)
//       console.log(people)
//     }
//   }
//   console.log("adsd")
//   /**
//    * The test cases that need to pass for above code. This will typically
//    * be part of another file but has been placed here for simplicity.
//    */
  
//   /**
//    * In this first test case, we compute the average age for a class.
//    */
//   // Initialize a student group with existing students
//   let maths = new StudentGroup([
//     { name: 'Adams', age: 16 },
//     { name: 'Baker', age: 15 },
//     { name: 'Clark', age: 15 },
//     { name: 'Davis', age: 16 },
//     { name: 'Evans', age: 14 }
//   ]);
  
//   // Confirm user details have been updated
//   document.write( `The average age for the Maths class is calculated correctly: ${maths.getAverageAge(age) === 15.2}<br />`);
  
//   /**
//    * In this second test case, we compute the maximum age for this class.
//    */
//   // Initialize a student group with existing students
//   let english = new StudentGroup([
//     { name: 'Frank', age: 16 },
//     { name: 'Ghosh', age: 15 },
//     { name: 'Hills', age: 17 },
//     { name: 'Irwin', age: 17 },
//     { name: 'Jones', age: 14 }
//   ]);
  
//   // Confirm user details have been updated
//   document.write( `The maximum age for the English class is calculated correctly: ${english.getMaxAge(this.age) === 17}<br />`);