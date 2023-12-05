const findTheOldest = function(people) {
    let maxAge = 0;
    let ans;
    for(let i=0; i<people.length; i++){
        const {name, yearOfBirth, yearOfDeath} = people[i];

        let age = 0;

        if(!yearOfDeath){
            const dateNow = new Date();

            age = dateNow.getFullYear() - yearOfBirth;
        }else{
            age = yearOfDeath - yearOfBirth;
        }
        if(age > maxAge){
            ans = people[i];
            maxAge = age;
        }

    }

    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
