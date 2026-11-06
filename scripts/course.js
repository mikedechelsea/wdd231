// TODO: replace this array with the official "Course List Array" from the
// assignment page if it differs, then set completed: true for courses you finished.
const courses = [
  { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, certificate: "Web and Computer Programming", description: "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.", technology: ["Python"], completed: false },
  { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, certificate: "Web and Computer Programming", description: "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.", technology: ["HTML", "CSS"], completed: false },
  { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, certificate: "Web and Computer Programming", description: "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions.", technology: ["Python"], completed: false },
  { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, certificate: "Web and Computer Programming", description: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.", technology: ["C#"], completed: false },
  { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, certificate: "Web and Computer Programming", description: "This course builds on prior experience in Web page development and programming to provide students with the ability to create dynamic websites that use JavaScript to respond to events, update content, and handle data.", technology: ["HTML", "CSS", "JavaScript"], completed: false },
  { subject: "WDD", number: 231, title: "Frontend Web Development I", credits: 2, certificate: "Web and Computer Programming", description: "This course builds on prior experience with Web page development and introduces students to the concepts and practices of frontend web development.", technology: ["HTML", "CSS", "JavaScript"], completed: false }
];

const courseList = document.querySelector("#course-list");
const creditTotal = document.querySelector("#credit-total");
const filterButtons = document.querySelectorAll(".filters button");

function displayCourses(list) {
  courseList.innerHTML = "";
  list.forEach((course) => {
    const li = document.createElement("li");
    li.className = course.completed ? "course completed" : "course";
    li.title = course.title;
    li.textContent = `${course.subject} ${course.number}`;
    if (course.completed) {
      const check = document.createElement("span");
      check.className = "check";
      check.textContent = " ✓";
      check.setAttribute("aria-label", "completed");
      li.appendChild(check);
    }
    courseList.appendChild(li);
  });
  creditTotal.textContent = list.reduce((sum, course) => sum + course.credits, 0);
}

function filterCourses(subject) {
  return subject === "All" ? courses : courses.filter((course) => course.subject === subject);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    displayCourses(filterCourses(button.dataset.filter));
  });
});

displayCourses(courses);
