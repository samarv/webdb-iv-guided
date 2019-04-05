# Web DB IV Guided Project

Guided project for **Web DB IV** Module.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `yarn` or `npm i` to download dependencies.
- [ ] type `yarn server` or `npm run server` to start the API.

Please follow along as the instructor introduces data modeling and walks through designing a database schema for an online school.


SELECT STUDENT.name, cohorts.name
FROM student
inner join cohorts on cohort.id = students.cohortID



list all the students including the name of the track they belong to


SELECT Student.name, tracks.name
FROM students
inner join cohorts on stuent.cohortID = cohorts.id
inner join tracks on tracks.id = cohorts.trackID



