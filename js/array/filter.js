const users = [
    {
        userId: 1,
        name: "user 1",
        isActive: true
    },
    {
        userId:2,
        name: "user 2",
        isActive: false
    },
     {
        userId:3,
        name: "user 3",
        isActive: null
    }

]

// get only users where isActive equals to TRUE.
const isActive = (user) => user.isActive

console.log(users.filter(isActive))