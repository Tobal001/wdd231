document.addEventListener("DOMContentLoaded", function () {
    // Original courses array with some completed courses
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: true 
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands-on with students actually participating in simple web designs and programming.',
            technology: ['HTML', 'CSS'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others and to handle errors within functions.',
            technology: ['Python'],
            completed: true 
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects, working with encapsulation, inheritance, and polymorphism.',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming, focusing on creating dynamic websites using JavaScript.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course focuses on user experience, accessibility, performance optimization, and basic API usage.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true 
        }
    ];

    const coursesContainer = document.querySelector('.directory-options');
    const courseCard = document.querySelector('.course-card');
    const closeBtn = document.querySelector('.close');
    const courseTitle = document.getElementById('courseTitle');
    const courseDescription = document.getElementById('courseDescription');
    const courseCredits = document.getElementById('courseCredits');
    const courseTechnologies = document.getElementById('courseTechnologies');

    // Function to render course buttons
    function renderCourses(filteredCourses) {
        coursesContainer.innerHTML = ''; // Clear existing course buttons

        filteredCourses.forEach(course => {
            const button = document.createElement('button');

            // Create a class name based on the course subject and number
            const className = `${course.subject.toLowerCase()}-${course.number}`;
            button.className = `course-button ${className}`;
            if (course.completed) {
                button.classList.add('completed');
            }

            button.textContent = `${course.subject} ${course.number}`;
            button.addEventListener('click', () => showCourseDetails(course));
            coursesContainer.appendChild(button);
        });
    }

    // Function to show course details in the course card
    function showCourseDetails(course) {
        courseTitle.textContent = `${course.subject} ${course.number}: ${course.title}`;
        courseDescription.textContent = course.description;
        courseCredits.textContent = course.credits;
        courseTechnologies.textContent = course.technology.join(', ');
        courseCard.style.display = 'block';
    }

    // Function to close the course card
    function closeModal() {
        courseCard.style.display = 'none';
    }

    // Initial render with all courses
    renderCourses(courses);

    // Event listeners for filter buttons
    document.querySelector('.btn-all').addEventListener('click', () => {
        renderCourses(courses);
    });

    document.querySelector('.btn-cse').addEventListener('click', () => {
        const filtered = courses.filter(course => course.subject === 'CSE');
        renderCourses(filtered);
    });

    document.querySelector('.btn-wdd').addEventListener('click', () => {
        const filtered = courses.filter(course => course.subject === 'WDD');
        renderCourses(filtered);
    });

    // Event listener to close the modal
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === courseCard) {
            closeModal();
        }
    });
});
