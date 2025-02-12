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

// Challenges array
const dailyChallenges = [
    {
        title: "Day 1: Secret Message Encoder",
        description: "Create a function that converts a message into a secret code by shifting each letter by 3 positions in the alphabet (e.g., 'a' becomes 'd', 'b' becomes 'e', etc.)",
        javascript: `// JavaScript Solution Example:
function encodeMessage(message) {
    return message
        .toLowerCase()
        .split('')
        .map(char => {
            if (char.match(/[a-z]/)) {
                let code = char.charCodeAt(0) + 3;
                if (code > 122) code -= 26;
                return String.fromCharCode(code);
            }
            return char;
        })
        .join('');
}

// Test it:
console.log(encodeMessage("hello")); // outputs: "khoor"`,
        python: `# Python Solution Example:
def encode_message(message):
    result = ""
    for char in message.lower():
        if char.isalpha():
            code = ord(char) + 3
            if code > ord('z'):
                code -= 26
            result += chr(code)
        else:
            result += char
    return result

# Test it:
print(encode_message("hello")) # outputs: "khoor"`
    },
    {
        title: "Day 2: Emoji Translator",
        description: "Create a function that converts simple words into emoji. For example: 'smile' → '😊', 'heart' → '❤️', 'cat' → '🐱'",
        javascript: `// JavaScript Solution Example:
const emojiDict = {
    'smile': '😊',
    'heart': '❤️',
    'cat': '🐱',
    'dog': '🐶',
    'star': '⭐'
};

function translateToEmoji(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => emojiDict[word] || word)
        .join(' ');
}

// Test it:
console.log(translateToEmoji("I heart cat")); // outputs: "I ❤️ 🐱"`,
        python: `# Python Solution Example:
emoji_dict = {
    'smile': '😊',
    'heart': '❤️',
    'cat': '🐱',
    'dog': '🐶',
    'star': '⭐'
}

def translate_to_emoji(text):
    return ' '.join(emoji_dict.get(word, word) 
                   for word in text.lower().split())

# Test it:
print(translate_to_emoji("I heart cat")) # outputs: "I ❤️ 🐱"`
    },
    {
        title: "Day 3: Password Generator",
        description: "Create a function that generates a random password with at least one uppercase letter, one lowercase letter, one number, and one special character",
        javascript: `// JavaScript Solution Example:
function generatePassword(length = 12) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*';
    
    let password = '';
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];
    
    const allChars = upper + lower + numbers + special;
    for(let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

// Test it:
console.log(generatePassword()); // outputs: random secure password`,
        python: `# Python Solution Example:
import random
import string

def generate_password(length=12):
    upper = string.ascii_uppercase
    lower = string.ascii_lowercase
    numbers = string.digits
    special = '!@#$%^&*'
    
    password = [
        random.choice(upper),
        random.choice(lower),
        random.choice(numbers),
        random.choice(special)
    ]
    
    all_chars = upper + lower + numbers + special
    password.extend(random.choice(all_chars) 
                   for _ in range(length - 4))
    
    random.shuffle(password)
    return ''.join(password)

# Test it:
print(generate_password()) # outputs: random secure password`
    },
    {
        title: "Day 4: Color Mixer",
        description: "Create a function that takes two colors (red, blue, or yellow) and returns the color you get when mixing them (e.g., 'red' + 'blue' = 'purple')",
        javascript: `// JavaScript Solution Example:
function mixColors(color1, color2) {
    const colors = [color1, color2].sort().join('-');
    const mixtures = {
        'blue-red': 'purple',
        'blue-yellow': 'green',
        'red-yellow': 'orange',
        'blue-blue': 'blue',
        'red-red': 'red',
        'yellow-yellow': 'yellow'
    };
    return mixtures[colors] || "Invalid color combination";
}

// Test it:
console.log(mixColors("red", "blue")); // outputs: "purple"
console.log(mixColors("blue", "yellow")); // outputs: "green"`,
        python: `# Python Solution Example:
def mix_colors(color1, color2):
    colors = '-'.join(sorted([color1, color2]))
    mixtures = {
        'blue-red': 'purple',
        'blue-yellow': 'green',
        'red-yellow': 'orange',
        'blue-blue': 'blue',
        'red-red': 'red',
        'yellow-yellow': 'yellow'
    }
    return mixtures.get(colors, "Invalid color combination")

# Test it:
print(mix_colors("red", "blue"))    # outputs: "purple"
print(mix_colors("blue", "yellow")) # outputs: "green"`
    }
];

// Function to render learning tracks
function renderTracks() {
    const container = document.querySelector('.track-container');
    container.innerHTML = ''; // Clear existing content before adding new tracks
    
    // Only render each track once
    const uniqueTracks = [...new Set(tracks.map(track => track.title))].map(title => 
        tracks.find(track => track.title === title)
    );

    uniqueTracks.forEach(track => {
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
    
    container.innerHTML = solutions.map((sol, index) => `
        <div class="note-card">
            <div class="note-header">
                <h3>Solution - ${sol.date}</h3>
                <button class="delete-btn" onclick="deleteSolution(${index})">
                    ✕
                </button>
            </div>
            <div class="note-content">${sol.solution}</div>
        </div>
    `).join('');
}

// Add the delete function
function deleteSolution(index) {
    if (confirm('Are you sure you want to delete this solution?')) {
        const solutions = JSON.parse(localStorage.getItem('solutions') || '[]');
        solutions.splice(index, 1);
        localStorage.setItem('solutions', JSON.stringify(solutions));
        displayPreviousSolutions();
    }
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
    displayDailyChallenge();  // Display the challenge
    renderTracks();           // Render tracks only once
    renderHabits();          // Render habits
    renderNotes();           // Render notes
});

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