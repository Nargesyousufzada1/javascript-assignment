const  studentName = "Sara";
let studentAge = 22;
let mathmaticsMarks = 80;
let englishMarks = 90;
let computerMarks = 50;
const highestTotalMarks = 300;

const totalMarks = mathmaticsMarks + englishMarks + computerMarks;
const averageMarks = totalMarks/3;
const remainingMarks = highestTotalMarks - totalMarks;


console.log("*******Results of student entry*********")
if (studentAge >= 18) {
    console.log("Authentic age: True")
}else {
    console.log("Invalid entry")
}

if (mathmaticsMarks > 80) {
    console.log("Math score is more than 80: True")
}else {
    console.log("Math score is bellow 80")
}

if (englishMarks == 100) {
    console.log("You got 100 in English")
}else {
    console.log("You got less than 100 in English")
}

if (computerMarks >= 50) {
    console.log("Computer score more than 50: True")
}else {
    console.log("Computer score is bellow 50")
}

if (averageMarks >= 50) {
    console.log("Good outcome average score is more than 50")
}else {
    console.log("Try to get better results")
}


console.log(`Total Mark of ${studentName} is: ${totalMarks} out of ${highestTotalMarks}`);
console.log(`The reamining needed number is: ${remainingMarks}`)
console.log(`The average score of student is: ${averageMarks}`)



console.log("*****Grading System*****")
if (averageMarks >= 0 && averageMarks <= 100) {
    if (averageMarks >= 90) {
        console.log("Grade: A")
    } else if (averageMarks >= 80) {
        console.log("Grade: B")
    } else if (averageMarks >= 70) {
        console.log("Grade: C")
    } else if (averageMarks >= 60){
        console.log("Grade: D")
    } else if (averageMarks >= 50) {
        console.log("Grade: E")
    } else {
        console.log("Average score is bellow 50")
    }
}




