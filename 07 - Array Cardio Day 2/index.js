// ## Array Cardio Day 2

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let oneOver19 = people.some(person => 2019 - person.year > 19);

console.log("One over 19: ", oneOver19);

// Array.prototype.every() // is everyone 19 or older?
let allOver19 = people.every(person => 2019 - person.year > 19);

console.log("All over", allOver19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let findComment = comments.find((comment) => comment.id === 823423);

console.log("Target comment: ", findComment)
// Array.prototype.findIndex()
// Find the comment with this ID
let findCommentIndex = comments.findIndex(comment => comment.id === 823423)
console.log("Target comment index: ", findCommentIndex)

// delete the comment with the ID of 823423

let comments2 = comments.filter(comment => comment.id != 823423)

console.log(comments2)