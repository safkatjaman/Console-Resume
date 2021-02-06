let aboutMe = {
      name: {
           firstName: 'Safkat',
           lastName: 'Jaman',
           nickName: 'Siam' 
      },
      institutions: {
            school: 'A.K. Higher Secondary School',
            college: 'Bir Srestha Munshi Abdur Rouf Public College',
            university: 'American International University - Bangladesh'
      },
      career: {
            field: 'Development/IT',
            companyName: 'Google Inc',
            designation: 'Software Engineer'
      },
      description: {
            passion: 'Programming/Developing',
            aim: 'To be one of the best engineer of the world.'
      },
      interest: {
            i1: 'Developing Software in cross platforms.',
            i2: 'Making interactive web pages.',
            i3: 'Programming and eating.'
      },
      pastPosition: {
            company: 'Alpha Alliance',
            title: 'Team Manager',
            shortDescription: 'I joined there as a intern then became a junior software engineer after a while I became the Team Manager.'
      },
      skills:[
                  {skillName: 'JavaScript', isCool: true},
                  {skillName: 'Python', isCool: true},
                  {skillName: 'Java', isCool: false},
                  {skillName: 'C#', isCool: true},
            
            
                  {skillName: 'HTML', isCool: false},
                  {skillName: 'CSS', isCool: false},
            
            
                  {skillName: 'Django', isCool: true},
                  {skillName: 'Node.js', isCool: true},
           
            
                  {skillName: 'React', isCool: true},
                  {skillName: 'Vue', isCool: false},
                  {skillName: 'Bootstrap', isCool: false},
                  {skillName: 'MaterialUI', isCool: true},
            
            
                  {skillName: 'MySQL', isCool: false},
                  {skillName: 'Oracle', isCool: false},
            
            
                  {skillName: 'MongoDB', isCool: true},
            
            
                  {skillName: 'Data Structure', isCool: true},
                  {skillName: 'Algorithm', isCool: true},
                  {skillName: 'Responsive Web Design', isCool: false},
                  {skillName: 'Front End Development', isCool: false},
            
                  {skillName: 'Bengali', isCool: true},
                  {skillName: 'English', isCool: true}
      ]
      
}


/* Printing name */
console.log(`Full Name: \n${aboutMe.name.firstName.toUpperCase()} ${aboutMe.name.lastName.toUpperCase()} ${aboutMe.name.nickName.toUpperCase()}`);


/* function to display Institution Names */
function institutionName (school, college, university) {
      return `Institutions: \nSchool Name: ${school}, \nCollege Name: ${college}, \nUniversity Name: ${university}`;
}

console.log(institutionName(aboutMe.institutions.school, aboutMe.institutions.college, aboutMe.institutions.university));


/* function to display position */
function displayPosition (companyName, jobTitle, description1, description2) {
      return `Career: \nCompany Name: ${companyName}. \nJob Title: ${jobTitle}. \nDescription: I am passionate about ${description1} and my aim is ${description2}.`
}

console.log(displayPosition(aboutMe.career.companyName, aboutMe.career.designation, aboutMe.description.passion, aboutMe.description.aim));


/* function to display interests */
function interest (i1, i2, i3) {
      return `Interests: \n1) ${i1}, \n2) ${i2}, \n3) ${i3}`
}

console.log(interest(aboutMe.interest.i1, aboutMe.interest.i2, aboutMe.interest.i3));


/* function to display past positions */
function pastPositions (company, title, shortDescription) {
      return `Past Positions: \nCompany Name: ${company}. \nJob Title: ${title}, \nShort Description: ${shortDescription}`;
}

console.log(pastPositions(aboutMe.pastPosition.company, aboutMe.pastPosition.title, aboutMe.pastPosition.shortDescription));

/* function to display skills */
function displaySkill (skillName, coolORnot) {
      if(coolORnot) {
            console.log(`BAM: ${skillName}`);
          } else {
            console.log(`${skillName}`);
          }
}
console.log('SKills: \n');

for (let i = 0; i < aboutMe.skills.length; i++) {
      displaySkill (aboutMe.skills[i].skillName, aboutMe.skills[i].isCool)
}
