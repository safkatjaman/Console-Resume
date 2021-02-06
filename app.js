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
      pastPositionName: {
            company: 'Alpha Alliance',
            title: 'Team Manager',
            shortDescription: 'I joined there as a intern then became a junior software engineer after a while I became Team Manager.'
      },
      skills: {
            programmingLanguage: {
                  pl1: 'JavaScript',
                  pl2: 'Python',
                  pl3: 'Java',
                  pl4: 'C#'
            },
            tools: {
                  t1: 'HTML',
                  t2: 'CSS',
            },
            backend: {
                  b1: 'Django',
                  b2: 'Node.js'
            },
            frontEndFrameWork: {
                  f1: 'React',
                  f2: 'Vue',
                  f3: 'Bootstrap',
                  f4: 'MaterialUI'
            },
            SQL: {
                  s1: 'MySQL',
                  s2: 'Oracle'
            },
            noSQL: {
                  ns1: 'MongoDB'
            },
            knowledge: {
                  k1: 'Data Structure',
                  k2: 'Algorithm',
                  k3: 'Responsive Web Design',
                  k4: 'Front End Development'
            },
            language: {
                  l1: 'Bengali',
                  l2: 'English'
            }
      }
}

console.log(aboutMe);

/* Printing name */
console.log(`${aboutMe.name.firstName.toUpperCase()} ${aboutMe.name.lastName.toUpperCase()} ${aboutMe.name.nickName.toUpperCase()}`);


/* function to display position */
function displayPosition (companyName, jobTitle, description1, description2) {
      return `Company Name: ${companyName}. \nJob Title: ${jobTitle}. \nDescription: I am passionate about ${description1} and my aim is ${description2}.`
}

/* Calling the function */
console.log(displayPosition(aboutMe.career.companyName, aboutMe.career.designation, aboutMe.description.passion, aboutMe.description.aim));


