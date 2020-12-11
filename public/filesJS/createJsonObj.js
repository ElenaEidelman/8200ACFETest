
// class Person  {
//     constructor(fName,lName,age,gender,career,experience){
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//         this.gender = gender;
//         this.career = career;
//         this.experience = experience;
//     }
// }

// //data hard coded
// let fnamesARR = ["James","John","Robert","Mary","Patricia","Jennifer","Michael","William","Elizabeth","Thomas","Jessica","Ryan","Cynthia","Kathleen","Aaron","Julie","Jerry"];
// let lnamesARR = ["SMITH","JOHNSON","WILLIAMS","JONES","BROWN","DAVIS","MILLER","WILSON","MOORE","TAYLOR","ANDERSON","THOMAS","JACKSON","WHITE","MARTINEZ","LEE","RODRIGUEZ"];
// let gendersARR = ["male","female"];
// let careersARR = ["Front End Developer","Senior Web Administrator","Senior Web Developer","Web Administrator","Web Developer","Webmaster","Application Developer","Applications Engineer","Associate Developer","Computer Programmer","Developer","Java Developer","Junior Software Engineer",".NET Developer","Senior Software Engineer","Senior System Architect","Senior System Designer","Software Architect","Software Developer","Systems Software Engineer"];

// //function for create json data
// function createRandomObjects(fNames, lNames, genders, careers, objectCounts){
//     let count = 0;
//     let objectsJson = [];
//     let fName;
//     let lName;
//     let gender;
//     let career;
//     let age;
//     while(count < objectCounts){
//         //get random information from arrays
//         fName = fNames[Math.floor(Math.random() * fNames.length)];
//         lName = lNames[Math.floor(Math.random() * lNames.length)];
//         gender = genders[Math.floor(Math.random() * genders.length)];
//         age = Math.floor(Math.floor(Math.random() * (60 - 25) + 25));
//         career = careers[Math.floor(Math.random() * careers.length)];
//         experience = Math.floor(Math.floor(Math.random() * (age - 18)));
//         objectsJson[count] = new Person(fName,lName,age,gender,career,experience > 1 ? experience + ' years' : experience + ' year');
//         count++;
//     }
//     return JSON.stringify(objectsJson);
// }

// let objectsPeronsJson = '{"persons" :' + createRandomObjects(fnamesARR,lnamesARR,gendersARR,careersARR,2000) + ' }';
//$.persons[?(@.fName.includes("ar"))]
// $.persons[?(@.career.includes("Comp"))]
//console.log(objectsPeronsJson);