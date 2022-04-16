// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const createArrayOfArrays = (countries) => {
    return countries.map((country) => [country, country.slice(0, 3), country.length]);
    // This can be achieved with a for loop aswell, where we push values into a new array.
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const scoresGreaterThan85 = (users) => {
    return users.filter((user) => user.scores > 85);
    // This can be achieved with a for loop aswell; Sudo: for (i=0; i<length; i++) {if(user.scores > 85) {outputArray.push(user)}}
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const addUniqueUser = (users, user) => {
    if (!users.find((u) => u.name === user.name)) {
        users.push(user);
    } else {
        console.log('User already exists');
    }
    return users;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const addUserSkill = (users, user_name, skill) => {
    return users.map((user) => user.name === user_name ? user.skills.push(skill) : user);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const editUser = (users, userUpdate) => {
    return users.map((user) => user.name == userUpdate.name ? Object.assign(user, { scores: userUpdate.scores, skills: userUpdate.skills, age: userUpdate.age }) : user);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Executions:
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];
const countries = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
const userUpdate = {
    name: 'Alex',
    scores: 88,
    skills: ['HTM', 'CSS', 'JS', 'FullStack'],
    age: 20
}
console.log(createArrayOfArrays(countries));
console.log(scoresGreaterThan85(users));
console.log(addUniqueUser(users, {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
}))
console.log(addUserSkill(users, "Thomas", "FullStack"))
console.log(addUserSkill(users, "Anupam", "FullStack"))
console.log(editUser(users, userUpdate));