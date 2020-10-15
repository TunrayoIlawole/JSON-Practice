const section = document.querySelector('section');

let requestFile = "course.json";

let request = new XMLHttpRequest();
request.open('GET', requestFile);

request.responseType = "json";
request.send();

request.onload = function() {
    const AllCourses = request.response;
    showCourses(AllCourses);
}

function showCourses(jsonObj) {
    const courses = jsonObj['courses'];

    for (let i = 0; i < courses.length; i++) {
        const courseArticle = document.createElement('article');
        const courseTitle = document.createElement('h2');
        const courseDes = document.createElement('p');
        const buttons = document.createElement('div');
        const link1 = document.createElement('a');
        const link2 = document.createElement('a');

        let linkPage1 = courses[i].linkOne;
        let linkPage2 = courses[i].linkTwo;

        link1.setAttribute("class", "course-dets");
        link1.setAttribute("href", `${linkPage1}`);
        link2.setAttribute("class", "enroll");
        link2.setAttribute("href", `${linkPage2}`);

        courseArticle.style.backgroundColor = courses[i].color;
        courseTitle.textContent = courses[i].title;
        courseDes.textContent = courses[i].description;
        link1.textContent = "go to course details";
        link2.textContent = "enroll now";

        buttons.appendChild(link1);
        buttons.appendChild(link2);

        courseArticle.appendChild(courseTitle);
        courseArticle.appendChild(courseDes);
        courseArticle.appendChild(buttons);

        section.appendChild(courseArticle);
    }
}