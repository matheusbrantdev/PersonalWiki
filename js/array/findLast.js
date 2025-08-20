const users = [
    {
        userId: 1,
        name: "user 1",
        age: 22
    },

        {
        userId:2,
        name: "user 2",
        age: 31
    },
         {
        userId:3,
        name: "user 3",
        age: 31
    },
     {
        userId:4,
        name: "user 4",
        age: 31
    }

]

// return the last value that satisfied the condition.
const oldest = (user) => user.age > 30

console.log(users.findLast(oldest))
// output { userId: 4, name: 'user 4', age: 31 }
