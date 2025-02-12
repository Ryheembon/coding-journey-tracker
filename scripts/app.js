// Learning tracks data
const tracks = [
    {
        title: 'Python Development',
        duration: '8-10 weeks',
        topics: [
            'Data Structures & Algorithms',
            'File Handling',
            'APIs & Requests',
            'Data Analysis with Pandas',
            'Web Scraping',
            'Database Integration'
        ],
        projects: [
            {
                name: 'Weather Dashboard',
                description: 'Build a weather app using Python and a weather API. Display forecasts, temperature trends, and weather alerts.',
                skills: ['APIs', 'Data Processing', 'UI with Tkinter']
            },
            {
                name: 'Automated File Organizer',
                description: 'Create a script that organizes files by type, date, or custom rules. Handle various file formats and implement backup features.',
                skills: ['File Operations', 'Automation', 'System Integration']
            },
            {
                name: 'Web Scraper & Data Analyzer',
                description: 'Develop a web scraper to collect data from websites, store it in a database, and create analysis reports.',
                skills: ['BeautifulSoup', 'Pandas', 'SQLite']
            }
        ],
        completed: false
    },
    {
        title: 'Web Development (HTML/CSS)',
        duration: '6-8 weeks',
        topics: [
            'Semantic HTML',
            'CSS Layouts & Flexbox',
            'CSS Grid',
            'Responsive Design',
            'CSS Animations',
            'SASS/SCSS'
        ],
        projects: [
            {
                name: 'Portfolio Website',
                description: 'Create a professional portfolio showcasing your projects, skills, and experience. Include responsive design and animations.',
                skills: ['HTML5', 'CSS3', 'Responsive Design']
            },
            {
                name: 'E-commerce Product Page',
                description: 'Build a product page with image gallery, price filters, and shopping cart layout.',
                skills: ['CSS Grid', 'Flexbox', 'Forms']
            }
        ],
        completed: false
    },
    // Add more tracks...
];

// Daily habits data
const habits = [
    {
        name: 'Code 30 mins',
        done: false
    },
    // Add more habits...
];

// Add this to your existing data structures
const notes = [];

// Simplified challenges
const challenges = [
    "Create a function that reverses a string",
    "Build a simple calculator",
    "Write a program to find the largest number in an array",
    "Create a countdown timer",
    "Build a todo list",
    "Write a function that checks if a word is a palindrome",
    "Create a function that converts temperature between Celsius and Fahrenheit",
    "Build a simple form validator"
];

// At the top of your file, add these challenges
const dailyChallenges = [
    {
        title: "Day 1: String Reversal",
        description: "Create a function that reverses a string",
        javascript: `// JavaScript Solution Example:
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test it:
console.log(reverseString("hello")); // outputs: "olleh"`,
        python: `# Python Solution Example:
def reverse_string(str):
    return str[::-1]

# Test it:
print(reverse_string("hello")) # outputs: "olleh"`
    },
    {
        title: "Day 2: Find Largest Number",
        description: "Write a function that finds the largest number in an array/list",
        javascript: `// JavaScript Solution Example:
function findLargest(arr) {
    return Math.max(...arr);
}

// Test it:
console.log(findLargest([1, 5, 2, 9, 3])); // outputs: 9`,
        python: `# Python Solution Example:
def find_largest(lst):
    return max(lst)

# Test it:
print(find_largest([1, 5, 2, 9, 3])) # outputs: 9`
    },
    {
        title: "Day 3: Palindrome Check",
        description: "Create a function that checks if a word is a palindrome",
        javascript: `// JavaScript Solution Example:
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

// Test it:
console.log(isPalindrome("racecar")); // outputs: true`,
        python: `# Python Solution Example:
def is_palindrome(str):
    str = str.lower()
    return str == str[::-1]

# Test it:
print(is_palindrome("racecar")) # outputs: True`
    },
    {
        title: "Day 4: FizzBuzz",
        description: "Write a function that prints numbers from 1 to n, but prints 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both",
        javascript: `// JavaScript Solution Example:
function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}`,
        python: `# Python Solution Example:
def fizz_buzz(n):
    for i in range(1, n + 1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)`
    }
];

// Function to render learning tracks
function renderTracks() {
    const container = document.querySelector('.track-container');
    container.innerHTML = ''; // Clear existing content

    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track-card';
        trackElement.innerHTML = `
            <h3>${track.title}</h3>
            <p class="duration">Duration: ${track.duration}</p>
            
            <div class="topics-section">
                <h4>Key Topics</h4>
                <ul class="topics-list">
                    ${track.topics.map(topic => `
                        <li>
                            <input type="checkbox" id="${topic.replace(/\s+/g, '-')}">
                            <label for="${topic.replace(/\s+/g, '-')}">${topic}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="projects-section">
                <h4>Projects</h4>
                ${track.projects.map(project => `
                    <div class="project-card">
                        <h5>${project.name}</h5>
                        <p>${project.description}</p>
                        <div class="skills-tags">
                            ${project.skills.map(skill => `
                                <span class="skill-tag">${skill}</span>
                            `).join('')}
                        </div>
                        <div class="project-progress">
                            <input type="checkbox" id="${project.name.replace(/\s+/g, '-')}">
                            <label for="${project.name.replace(/\s+/g, '-')}">Complete</label>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(trackElement);
    });
}

// Function to render habits tracker
function renderHabits() {
    const container = document.querySelector('.habits-grid');
    habits.forEach(habit => {
        const habitElement = document.createElement('div');
        habitElement.className = 'habit-card';
        habitElement.innerHTML = `
            <label>
                <input type="checkbox" ${habit.done ? 'checked' : ''}>
                ${habit.name}
            </label>
        `;
        container.appendChild(habitElement);
    });
}

// Function to save a note
function saveNote() {
    const title = document.getElementById('noteTitle').value;
    const category = document.getElementById('noteCategory').value;
    const content = document.getElementById('noteContent').value;
    const date = new Date().toISOString();

    if (!title || !content) {
        alert('Please fill in both title and content!');
        return;
    }

    const note = {
        id: Date.now(), // unique identifier
        title,
        category,
        content,
        date,
    };

    notes.unshift(note); // Add to beginning of array
    saveToLocalStorage();
    renderNotes();
    clearNoteForm();
}

// Function to render notes
function renderNotes() {
    const container = document.querySelector('.notes-list');
    container.innerHTML = ''; // Clear existing notes

    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note-card';
        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <div class="note-meta">
                <span>${note.category}</span> • 
                <span>${new Date(note.date).toLocaleDateString()}</span>
            </div>
            <div class="note-content">${note.content}</div>
            <div class="note-actions">
                <button onclick="editNote(${note.id})" class="edit-note">Edit</button>
                <button onclick="deleteNote(${note.id})" class="delete-note">Delete</button>
            </div>
        `;
        container.appendChild(noteElement);
    });
}

// Function to delete a note
function deleteNote(id) {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        saveToLocalStorage();
        renderNotes();
    }
}

// Function to edit a note
function editNote(id) {
    const note = notes.find(note => note.id === id);
    if (note) {
        document.getElementById('noteTitle').value = note.title;
        document.getElementById('noteCategory').value = note.category;
        document.getElementById('noteContent').value = note.content;
        deleteNote(id); // Remove the old note
        // User can then make changes and save as a new note
    }
}

// Function to clear the note form
function clearNoteForm() {
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    document.getElementById('noteCategory').value = 'General';
}

function getRandomChallenge() {
    const index = Math.floor(Math.random() * challenges.length);
    return challenges[index];
}

function displayChallenge() {
    console.log("Displaying challenge..."); // Debug log
    const container = document.getElementById('dailyChallenge');
    if (container) {
        container.innerHTML = `
            <div class="challenge-item">
                <h3>Today's Challenge:</h3>
                <p>${getRandomChallenge()}</p>
            </div>
        `;
    } else {
        console.error("dailyChallenge element not found!"); // Debug log
    }
}

function saveSolution() {
    const solution = document.getElementById('challengeSolution').value;
    const date = new Date().toLocaleDateString();
    
    if (!solution.trim()) {
        alert('Please write your solution before saving!');
        return;
    }

    const solutionObj = {
        date: date,
        solution: solution
    };

    // Get existing solutions or initialize empty array
    const solutions = JSON.parse(localStorage.getItem('solutions') || '[]');
    solutions.unshift(solutionObj); // Add new solution at the beginning
    localStorage.setItem('solutions', JSON.stringify(solutions));

    displayPreviousSolutions();
    document.getElementById('challengeSolution').value = ''; // Clear input
}

function displayPreviousSolutions() {
    const container = document.getElementById('previousSolutions');
    const solutions = JSON.parse(localStorage.getItem('solutions') || '[]');
    
    container.innerHTML = solutions.map(sol => `
        <div class="note-card">
            <h3>Solution - ${sol.date}</h3>
            <div class="note-content">${sol.solution}</div>
        </div>
    `).join('');
}

// Update your existing saveToLocalStorage function
function saveToLocalStorage() {
    localStorage.setItem('tracks', JSON.stringify(tracks));
    localStorage.setItem('habits', JSON.stringify(habits));
    localStorage.setItem('notes', JSON.stringify(notes));
    // Daily challenges are saved separately in saveSolution function
}

// Update your existing loadFromLocalStorage function
function loadFromLocalStorage() {
    const savedTracks = localStorage.getItem('tracks');
    const savedHabits = localStorage.getItem('habits');
    const savedNotes = localStorage.getItem('notes');
    
    if (savedTracks) tracks.push(...JSON.parse(savedTracks));
    if (savedHabits) habits.push(...JSON.parse(savedHabits));
    if (savedNotes) notes.push(...JSON.parse(savedNotes));
}

// Update the initialization code at the bottom of app.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded"); // Debug log
    loadFromLocalStorage();
    renderTracks();
    renderHabits();
    renderNotes();
    displayChallenge();
    displayPreviousSolutions();
});

// Add this function to display today's challenge
function displayDailyChallenge() {
    const today = new Date().getDate();
    const challengeIndex = (today % dailyChallenges.length);
    const challenge = dailyChallenges[challengeIndex];

    const challengeContainer = document.getElementById('dailyChallenge');
    if (challengeContainer) {
        challengeContainer.innerHTML = `
            <div class="challenge-item">
                <h3>${challenge.title}</h3>
                <p>${challenge.description}</p>
                
                <div class="code-examples">
                    <div class="code-section">
                        <h4>JavaScript Example:</h4>
                        <pre><code class="javascript">${challenge.javascript}</code></pre>
                    </div>
                    
                    <div class="code-section">
                        <h4>Python Example:</h4>
                        <pre><code class="python">${challenge.python}</code></pre>
                    </div>
                </div>
            </div>
        `;
    }
}

// Make sure this is at the very bottom of your app.js file
window.onload = function() {
    displayDailyChallenge();
}; 