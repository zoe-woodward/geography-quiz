/*-------------------------------- Constants --------------------------------*/

const states = [
    { 
        question: "What is the capital of Alabama?", 
        options: ["Birmingham", "Montgomery", "Jasper", "Phoenix City"], 
        answer: "Montgomery" 
    },
    { 
        question: "What is the capital of Alaska?", 
        options: ["Juneau", "Anchorage", "Palmer", "Fairbanks"], 
        answer: "Juneau" 
    },
    { 
        question: "What is the capital of Arizona?", 
        options: ["Douglas", "Tucson", "Tombstone", "Phoenix"], 
        answer: "Phoenix" 
    },
    { 
        question: "What is the capital of Arkansas?", 
        options: ["Batesville", "Little Rock", "Jacksonville", "El Dorado"], 
        answer: "Little Rock" 
    },
    { 
        question: "What is the capital of California?", 
        options: ["Sacramento", "Los Angeles", "Anaheim", "San Francisco"], 
        answer: "Sacramento" 
    },
    { 
        question: "What is the capital of Colorado?", 
        options: ["Aspen", "Georgetown", "Denver", "Sterling"], 
        answer: "Denver" 
    },
    { 
        question: "What is the capital of Connecticut?", 
        options: ["Bloomfield", "New London", "Middletown", "Hartford"], 
        answer: "Hartford" 
    },
    { 
        question: "What is the capital of Delaware?", 
        options: ["New Castle", "Dover", "Wilmington", "Newark"], 
        answer: "Dover" 
    },
    { 
        question: "What is the capital of Florida?", 
        options: ["Orlando", "Miami", "Tallahassee", "Tampa"], 
        answer: "Tallahassee" 
    },
    { 
        question: "What is the capital of Georgia?", 
        options: ["Atlanta", "Augusta", "Douglas", "Dalton"], 
        answer: "Atlanta" 
    },
    { 
        question: "What is the capital of Idaho?", 
        options: ["Meridian", "Nampa", "Idaho Falls", "Boise"], 
        answer: "Boise" 
    },
    { 
        question: "What is the capital of Illinois?", 
        options: ["Chicago", "Peoria", "Springfield", "Naperville"], 
        answer: "Springfield" 
    },
    { 
        question: "What is the capital of Iowa?", 
        options: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"], 
        answer: "Des Moines" 
    },
    { 
        question: "What is the capital of Indiana?", 
        options: ["Indianapolis", "South Bend", "Fort Wayne", "Evansville"], 
        answer: "Indianapolis" 
    },
    { 
        question: "What is the capital of Hawaii?", 
        options: ["Honolulu", "Hilo", "Pearl City", "Kailua"], 
        answer: "Honolulu" 
    },
    { 
        question: "What is the capital of Kansas?", 
        options: ["Kansas City", "Wichita", "Topeka", "Overland Park"], 
        answer: "Topeka" 
    },
    { 
        question: "What is the capital of Kentucky?", 
        options: ["Lexington", "Frankfort", "Louisville", "Bowling Green"], 
        answer: "Frankfort" 
    },
    { 
        question: "What is the capital of Louisiana?", 
        options: ["New Orleans", "Shreveport", "Lafayette", "Baton Rouge"], 
        answer: "Baton Rouge" 
    },
    { 
        question: "What is the capital of Maine?", 
        options: ["Portland", "Augusta", "Lewiston", "Bangor"], 
        answer: "Augusta" 
    },
    { 
        question: "What is the capital of Maryland?", 
        options: ["Baltimore", "Rockville", "Annapolis", "Frederick"], 
        answer: "Annapolis" 
    },
    { 
        question: "What is the capital of Massachusetts?", 
        options: ["Boston", "Cambridge", "Worcester", "Springfield"], 
        answer: "Boston" 
    },
    { 
        question: "What is the capital of Michigan?", 
        options: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"], 
        answer: "Lansing" 
    },
    { 
        question: "What is the capital of Minnesota?", 
        options: ["Saint Paul", "Minneapolis", "Duluth", "Rochester"], 
        answer: "Saint Paul" 
    },
    { 
        question: "What is the capital of Mississippi?", 
        options: ["Biloxi", "Hattiesburg", "Jackson", "Gulfport"], 
        answer: "Jackson" 
    },
    { 
        question: "What is the capital of Missouri?", 
        options: ["Kansas City", "Saint Louis", "Jefferson City", "Springfield"], 
        answer: "Jefferson City" 
    },
    { 
        question: "What is the capital of Montana?", 
        options: ["Missoula", "Billings", "Great Falls", "Helena"], 
        answer: "Helena" 
    },
    { 
        question: "What is the capital of Nebraska?", 
        options: ["Omaha", "Lincoln", "Bellevue", "Grand Island"], 
        answer: "Lincoln" 
    },
    { 
        question: "What is the capital of Nevada?", 
        options: ["Carson City", "Reno", "Las Vegas", "Henderson"], 
        answer: "Carson City" 
    },
    { 
        question: "What is the capital of New Hampshire?", 
        options: ["Concord", "Manchester", "Nashua", "Portsmouth"], 
        answer: "Concord" 
    },
    { 
        question: "What is the capital of New Jersey?", 
        options: ["Newark", "Trenton", "Jersey City", "Paterson"], 
        answer: "Trenton" 
    },
    { 
        question: "What is the capital of New Mexico?", 
        options: ["Albuquerque", "Las Cruces", "Roswell", "Santa Fe"], 
        answer: "Santa Fe" 
    },
    { 
        question: "What is the capital of New York?", 
        options: ["Albany", "New York City", "Buffalo", "Rochester"], 
        answer: "Albany" 
    },
    { 
        question: "What is the capital of North Carolina?", 
        options: ["Charlotte", "Greensboro", "Durham", "Raleigh"], 
        answer: "Raleigh" 
    },
    { 
        question: "What is the capital of North Dakota?", 
        options: ["Fargo", "Bismarck", "Grand Forks", "Minot"], 
        answer: "Bismarck" 
    },
    { 
        question: "What is the capital of Ohio?", 
        options: ["Columbus", "Cleveland", "Cincinnati", "Toledo"], 
        answer: "Columbus" 
    },
    { 
        question: "What is the capital of Oklahoma?", 
        options: ["Tulsa", "Norman", "Oklahoma City", "Broken Arrow"], 
        answer: "Oklahoma City" 
    },
    { 
        question: "What is the capital of Oregon?", 
        options: ["Salem", "Portland", "Eugene", "Gresham"], 
        answer: "Salem" 
    },
    { 
        question: "What is the capital of Pennsylvania?", 
        options: ["Philadelphia", "Pittsburgh", "Allentown", "Harrisburg"], 
        answer: "Harrisburg" 
    },
    { 
        question: "What is the capital of Rhode Island?", 
        options: ["Warwick", "Providence", "Cranston", "Pawtucket"], 
        answer: "Providence" 
    },
    { 
        question: "What is the capital of South Carolina?", 
        options: ["Columbia", "Charleston", "Greenville", "Spartanburg"], 
        answer: "Columbia" 
    },
    { 
        question: "What is the capital of South Dakota?", 
        options: ["Sioux Falls", "Rapid City", "Pierre", "Aberdeen"], 
        answer: "Pierre" 
    },
    { 
        question: "What is the capital of Tennessee?", 
        options: ["Nashville", "Memphis", "Knoxville", "Chattanooga"], 
        answer: "Nashville" 
    },
    { 
        question: "What is the capital of Texas?", 
        options: ["Houston", "Austin", "Dallas", "San Antonio"], 
        answer: "Austin" 
    },
    { 
        question: "What is the capital of Utah?", 
        options: ["Salt Lake City", "Provo", "West Valley City", "Ogden"], 
        answer: "Salt Lake City" 
    },
    { 
        question: "What is the capital of Vermont?", 
        options: ["Burlington", "Montpelier", "Rutland", "Stowe"], 
        answer: "Montpelier" 
    },
    { 
        question: "What is the capital of Virginia?", 
        options: ["Richmond", "Virginia Beach", "Norfolk", "Chesapeake"], 
        answer: "Richmond" 
    },
    { 
        question: "What is the capital of Washington?", 
        options: ["Seattle", "Olympia", "Spokane", "Tacoma"], 
        answer: "Olympia" 
    },
    { 
        question: "What is the capital of West Virginia?", 
        options: ["Charleston", "Huntington", "Morgantown", "Parkersburg"], 
        answer: "Charleston" 
    },
    { 
        question: "What is the capital of Wisconsin?", 
        options: ["Milwaukee", "Green Bay", "Kenosha", "Madison"], 
        answer: "Madison" 
    },
    { 
        question: "What is the capital of Wyoming?", 
        options: ["Casper", "Cheyenne", "Laramie", "Gillette"], 
        answer: "Cheyenne" 
    }
];



const worldCapitals = [
    { 
        question: "What is the capital of Canada?", 
        options: ["Ottawa", "Vancouver", "Toronto", "Montreal"], 
        answer: "Ottawa" 
    },
    { 
        question: "What is the capital of Australia?", 
        options: ["Sydney", "Canberra", "Melbourne", "Brisbane"], 
        answer: "Canberra" 
    },
    { 
        question: "What is the capital of Brazil?", 
        options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"], 
        answer: "Brasília" 
    },
    { 
        question: "What is the capital of China?", 
        options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"], 
        answer: "Beijing" 
    },
    { 
        question: "What is the capital of France?", 
        options: ["Marseille", "Paris", "Lyon", "Toulouse"], 
        answer: "Paris" 
    },
    { 
        question: "What is the capital of Germany?", 
        options: ["Frankfurt", "Munich", "Berlin", "Hamburg"], 
        answer: "Berlin" 
    },
    { 
        question: "What is the capital of India?", 
        options: ["Bangalore", "Hyderabad", "New Delhi", "Mumbai"], 
        answer: "New Delhi" 
    },
    { 
        question: "What is the capital of Italy?", 
        options: ["Naples", "Rome", "Venice", "Milan"], 
        answer: "Rome" 
    },
    { 
        question: "What is the capital of Japan?", 
        options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"], 
        answer: "Tokyo" 
    },
    { 
        question: "What is the capital of Mexico?", 
        options: ["Monterrey", "Guadalajara", "Cancun", "Mexico City"], 
        answer: "Mexico City" 
    },
    { 
        question: "What is the capital of Russia?", 
        options: ["Saint Petersburg", "Moscow", "Novosibirsk", "Yekaterinburg"], 
        answer: "Moscow" 
    },
    { 
        question: "What is the capital of South Africa?", 
        options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"], 
        answer: "Pretoria" 
    },
    { 
        question: "What is the capital of Spain?", 
        options: ["Barcelona", "Madrid", "Seville", "Valencia"], 
        answer: "Madrid" 
    },
    { 
        question: "What is the capital of the United Kingdom?", 
        options: ["Manchester", "London", "Edinburgh", "Birmingham"], 
        answer: "London" 
    },
    { 
        question: "What is the capital of the United States?", 
        options: ["New York", "Los Angeles", "Chicago", "Washington, D.C."], 
        answer: "Washington, D.C." 
    },
    { 
        question: "What is the capital of Argentina?", 
        options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"], 
        answer: "Buenos Aires" 
    },
    { 
        question: "What is the capital of Egypt?", 
        options: ["Alexandria", "Giza", "Luxor", "Cairo"], 
        answer: "Cairo" 
    },
    { 
        question: "What is the capital of Kenya?", 
        options: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"], 
        answer: "Nairobi" 
    },
    { 
        question: "What is the capital of Nigeria?", 
        options: ["Abuja", "Lagos", "Kano", "Port Harcourt"], 
        answer: "Abuja" 
    },
    { 
        question: "What is the capital of Saudi Arabia?", 
        options: ["Mecca", "Medina", "Riyadh", "Jeddah"], 
        answer: "Riyadh" 
    },
    { 
        question: "What is the capital of South Korea?", 
        options: ["Incheon", "Daegu", "Seoul", "Busan"], 
        answer: "Seoul" 
    },
    { 
        question: "What is the capital of Thailand?", 
        options: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"], 
        answer: "Bangkok" 
    },
    { 
        question: "What is the capital of Turkey?", 
        options: ["Izmir", "Antalya", "Istanbul", "Ankara"], 
        answer: "Ankara" 
    },
    { 
        question: "What is the capital of the Philippines?", 
        options: ["Davao", "Cebu City", "Quezon City", "Manila"], 
        answer: "Manila" 
    },
    { 
        question: "What is the capital of Vietnam?", 
        options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Nha Trang"], 
        answer: "Hanoi" 
    },
    { 
        question: "What is the capital of Malaysia?", 
        options: ["George Town", "Ipoh", "Johor Bahru", "Kuala Lumpur"], 
        answer: "Kuala Lumpur" 
    },
    { 
        question: "What is the capital of Indonesia?", 
        options: ["Bandung", "Medan", "Surabaya", "Jakarta"], 
        answer: "Jakarta" 
    },
    { 
        question: "What is the capital of the Netherlands?", 
        options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"], 
        answer: "Amsterdam" 
    },
    { 
        question: "What is the capital of Greece?", 
        options: ["Thessaloniki", "Athens", "Patras", "Heraklion"], 
        answer: "Athens" 
    },
    { 
        question: "What is the capital of Israel?", 
        options: ["Haifa", "Jerusalem", "Tel Aviv", "Eilat"], 
        answer: "Jerusalem" 
    },
    { 
        question: "What is the capital of New Zealand?", 
        options: ["Auckland", "Christchurch", "Hamilton", "Wellington"], 
        answer: "Wellington" 
    },
    { 
        question: "What is the capital of Singapore?", 
        options: ["Singapore", "Kuala Lumpur", "Bangkok", "Jakarta"], 
        answer: "Singapore" 
    },
    { 
        question: "What is the capital of Portugal?", 
        options: ["Porto", "Lisbon", "Braga", "Coimbra"], 
        answer: "Lisbon" 
    },
    { 
        question: "What is the capital of Norway?", 
        options: ["Oslo", "Bergen", "Trondheim", "Stavanger"], 
        answer: "Oslo" 
    },
    { 
        question: "What is the capital of Sweden?", 
        options: ["Malmo", "Uppsala", "Stockholm", "Gothenburg"], 
        answer: "Stockholm" 
    },
    { 
        question: "What is the capital of Denmark?", 
        options: ["Aarhus", "Odense", "Copenhagen", "Aalborg"], 
        answer: "Copenhagen" 
    },
    { 
        question: "What is the capital of Finland?", 
        options: ["Espoo", "Turku", "Helsinki", "Tampere"], 
        answer: "Helsinki" 
    },
    { 
        question: "What is the capital of Poland?", 
        options: ["Krakow", "Warsaw", "Wroclaw", "Gdansk"], 
        answer: "Warsaw" 
    },
    { 
        question: "What is the capital of Hungary?", 
        options: ["Debrecen", "Szeged", "Miskolc", "Budapest"], 
        answer: "Budapest" 
    },
    { 
        question: "What is the capital of the Czech Republic?", 
        options: ["Ostrava", "Brno", "Plzen", "Prague"], 
        answer: "Prague" 
    },
    { 
        question: "What is the capital of Austria?", 
        options: ["Vienna", "Salzburg", "Graz", "Innsbruck"], 
        answer: "Vienna" 
    },
    { 
        question: "What is the capital of Belgium?", 
        options: ["Ghent", "Antwerp", "Bruges", "Brussels"], 
        answer: "Brussels" 
    },
    { 
        question: "What is the capital of Switzerland?", 
        options: ["Bern", "Zurich", "Geneva", "Basel"], 
        answer: "Bern" 
    },
    { 
        question: "What is the capital of Ireland?", 
        options: ["Limerick", "Galway", "Cork", "Dublin"], 
        answer: "Dublin" 
    },
    { 
        question: "What is the capital of Iceland?", 
        options: ["Akureyri", "Selfoss", "Hafnarfjordur", "Reykjavik"], 
        answer: "Reykjavik" 
    },
    { 
        question: "What is the capital of Slovakia?", 
        options: ["Kosice", "Nitra", "Trnava", "Bratislava"], 
        answer: "Bratislava" 
    },
    { 
        question: "What is the capital of Croatia?", 
        options: ["Dubrovnik", "Split", "Rijeka", "Zagreb"], 
        answer: "Zagreb" 
    }
];


const winCondition = 10;

/*-------------------------------- Variables --------------------------------*/

let selectedTopic = [];
let score = 0;



/*------------------------ Cached Element References ------------------------*/
const statesButton = document.getElementById('states-button');
const worldButton = document.getElementById('world-button');
const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-button');
const scoreElement = document.getElementById('score');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');


/*-------------------------------- Functions --------------------------------*/

function startStatesQuiz() {
    startQuiz(states); 
}

function startWorldQuiz() {
    startQuiz(worldCapitals);
}

function playAgain() {
    resetGame(); 
}

function startQuiz(topic) {
    selectedTopic = [...topic];
    score = 0;
    quizContainer.classList.remove('hidden');
    statesButton.parentElement.classList.add('hidden');
    loadNextQuestion();
}


function loadNextQuestion() {
    const currentQuestion = selectedTopic.pop();
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(button, currentQuestion.answer);
    });
}
/* const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);  ///making a randm choice based on array length
    computerChoice = choices[randomIndex];
}*/

function checkAnswer(button, correctAnswer) {
    if (button.textContent === correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`; 

        if (score === winCondition) {
            endGame(true);
        } else {
            loadNextQuestion();
        }
    } else {
        endGame(false);
    }
}

   
function endGame(isWinner) {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    if (isWinner) {
        resultMessage.textContent = "Congratulations, you won! Bet you can't do it again..";
    } else {
        resultMessage.textContent = "Sorry, you lost this time! Keep trying!";
    }
}

function resetGame() {
    resultContainer.classList.add('hidden');
    statesButton.parentElement.classList.remove('hidden');
    quizContainer.classList.add('hidden');
}

/*----------------------------- Event Listeners -----------------------------*/

statesButton.addEventListener('click', startStatesQuiz);
worldButton.addEventListener('click', startWorldQuiz);
playAgainButton.addEventListener('click', resetGame);