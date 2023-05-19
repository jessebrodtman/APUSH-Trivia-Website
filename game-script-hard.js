//define list of questions (pull from spreadsheet somehow)
const questions = ['This president crossed the Delaware River.','This president created the Alien and Sedition Acts.','This president was elected in the Revolution of 1800.','This president was considered the Father of the Constitution.','This president created a doctrine separating affairs in America from Europe.','This president was the main culprit behind the Corrupt Bargain.','This president caused the Bank War.','This president was the first president to be born as a citizen of the United States.','This president died of pneoumia 30 days into office.','This president was the first president to have his veto of legislation overridden by Congress','This president allowed for the U.S to expand with annexation of Texas, the Oregon Territory, and the Mexican Cession','This president fought during the Mexican-American War ','This president signed a number of bills that became known as the Compromise of 1850','This president backed the Kansas-Nebraska Act of 1854, leading to the overturning of the Missouri Compromise ','This president was in office during the Dred Scott case and supported the Supreme Courts ruling.','This president issued the Emancipation Proclamation.','This president destroyed the Freedmens Bureau.','This president was the 5th general to lead the Union army during the Civil War.','This president won the election thanks to the Compromise of 1877.','This president was shot twice at a train station in Washington D.C.','This president signed the Chinese Exclusion Act in 1882.','This president served two non-consecutive terms.','This president signed the Sherman Anti-Trust Act.','This president presided over the Spanish American War.','This president was known for his Big Stick Diplomacy.','This president used Dollar Diplomacy with foreign nations.','This president issued the 14 Points Speech.','This president was in the Teapot Dome Scandal.','This president nickname was Silent Cal','This president had towns named after him during the Great Depression.','This president created the New Deal.','This president allowed for the dropping of Little Boy and Fat Man.','This president was wary about the military-industrial complex.','This president trained Cuban migrants to attempt to invade Cuba and remove communist influence.','This president created Medicare and Medicaid.','This president was in the Watergate Scandal.','This president pardoned Nixon.',' This president failed to bring 52 American hostages home for 444 days','This president believed in trickle-down economics.','This president conducted Operation Desert Storm.','This president was impeached due to an affair scandal.','This president had the US go to war in Iraq and Afghanistan.','This president was the first black president.','This president has the largest net worth of any president. ','This president became associated with the phrase "Lets go Brandon".','This president lived at Mount Vernon.','This president was the first to live in the white house.','This president appears on the two dollar bill.','This president was the shortest president, weighing only 100 pounds.','This president was the last founding father president.','This president helped formulate the Monroe Doctrine','This presidents nickname was Old Hickory.','This president was the only president to speak English as a second language ','This president fought at the Battle of Tippecanoe','This president angered the Whigs so much that he was kicked out of the party while president ','This president had the presidential slogan 54° 40 or fight','This president was nominated by the Whig Party for presidency without his knowledge or presence at the convention. ','This president was the last member of the Whig party to serve in the White House ','This president started his presidency while grieving the death of his son','This president was a diplomat before his term, and helped write the Ostend Manifesto to attempt to buy Cuba from Spain.','This president was the tallest president.','This president was the first president to be impeached ','This president appears on the 50 dollar bill.','This president was the first and only president to be elected by a congressional commission','This president was assassinated 200 days into his presidency ','This president served as a military general of New York during the Civil War.','This president had a daughter born in the White House.','This president was the grandson of the 9th president of the U.S.','This president was the first president to have a video taken of them ','This presidents nickname was the Trust Buster.','This president was the only president to serve on the Supreme Court after leaving office.','This president signed the Clayton Anti-Trust Act','This president had the campaign slogan of "Return to normalcy".','This president was nicknamed "Red" due to his red hair.','This president led food relief efforts for both World Wars outside of office and became known as the "Great Humanitarian."','This president was related to his wife and 11 other presidents.','This president was the 2nd of two presidents to have a middle initial but no middle name.','This presidents nickname was "Ike".','This president was the youngest elected president.','This president declared the war on poverty ','This president had associates that were apart of CREEP','This president was the first president who had not been elected as either president or vice president','This president had the US boycott the 1980 Summer Olympics.','This president was originally an actor and very charismatic.','This president election all came down to a canceled recount of ballots in Florida ','This president was the first president born after WWII','This president had both the highest and lowest recorded approval rating of any president.','This president was the first president to have his portrait taken with a digital camera ','This president was the only president to be impeached twice.','This president was the oldest elected president.','This president got a surveyor degree from William and Mary.','This president wrote over 1,000 letters to his wife.','This president introduced ice cream from France to the US.','This president was Princetons first graduate student.','This president was the last president to have never been photographed.','This president was the first president to not win the popular vote but still win the election.','This president fought more than 100 duels.','This presidents house was named Lindenwald.','This president was the only one to never issue an executive order or a pardon.','This president was known as His Accidency.','This president never fathered or adopted any known children.','This presidents nickname was "Old Rough and Ready"','This president married his teacher.','This presidents nicknames included "Hero of Many a Well-Fought Bottle"','This president is the only one to have never married.','This president also worked as a bartender.','This president sewed his own clothes.','This president was buried in North Americas largest tomb.','This president was nicknamed "His Fraudulency"','This president could write Greek with one hand and Latin with the other at the same time.','This president threw a bell into a canal as a prank.','This president personally executed a man.','This president was scared of electricity.','This president received a secret surgery on a friends yacht during his presidency.','This president was known as the first president that smiled when being photographed ','This president started the tradition of throwing the first ball of the MLB season.','This president appointed the first Jewish justice to the Supreme Court.','This president wore size 19 shoes, which was the largest feet of any president.','This president was the only president to be born on Independence Day','This president was the first Quaker president.','This president contracted polio after his vice-presidential defeat and was paralyzed.','This president dared the KKK to kill him.','This president was the first president to ride in a helicopter.','This president was the first president who was a Boy Scout.','This president gave interviews on the toilet.','This president visited all 50 states.','This president was a star football player in college.','This president was a speed reader and could read 2000 words per minute.','This presidents favorite snack was Jelly Bellies.','This president was a fighter pilot in World War II.','This president lost the nuclear launch codes.','This president was a member of an elite secret student society at Yale called "Skull and Bones".','This president earned a Nobel prize and multiple grammys.','This president never had an alcoholic drink.','This president was bullied due to a childhood stutter.'];
const questionNames = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden','George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden','George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const questionNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
const questionPoints = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];

const presidents = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];

let presidentToGuess = '';
let lives = 3;
let points = 0;
let time = 5*60;
var myInterval = setInterval(updateCountdown, 1000);

//select random question
function selectRandomQuestionIndex(){
    return Math.floor(Math.random() * questions.length);
}

//initialize game
function initializeGame(){
    points = 0;
    lives = 3;

    // Clear any previous message
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = '';
    const gameOverContainer = document.querySelector('.game-over');
    gameOverContainer.innerText = '';
    const timerContainer = document.querySelector('.timer');
    timerContainer.innerText = '5:00';
    
    clearInterval(myInterval);
    time=5*60;
    myInterval = setInterval(updateCountdown, 1000);
    updateLifeDisplay();
    document.querySelector('.score').innerText = points;
    nextQuestion();
}

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0'+seconds : seconds;

    const timerContainer = document.querySelector('.timer');
    timerContainer.innerHTML = minutes+':'+seconds;
    time--;
    if(time < 0){
        gameOver();
    }
}

//next question
function nextQuestion(){
    questionIndex = selectRandomQuestionIndex();
    questionToGuess = questions[questionIndex];

    //clear previous question
    clearPreviousQuestion();

    //update the question display
    updateQuestionDisplay();

    //remove previous answer buttons
    const answerContainer = document.querySelector('.answers');
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild);
    }
    
    //generate answer buttons
    randomStart = Math.floor(Math.random() * 5)-4;
    if(randomStart + questionNumbers[questionIndex]<1){
        randomStart = 1-questionNumbers[questionIndex];
    }
    if(4+randomStart+questionNumbers[questionIndex]>=45){
      randomStart = 42-questionNumbers[questionIndex];
    }
    //console.log(questionNames[questionIndex]);
    //console.log('question index: ' + questionIndex);
    //console.log('random start: ' + randomStart);
    
    for(let i=0; i<5; i++){
        const answerButton = document.createElement('button');
        if(randomStart+i+questionNumbers[questionIndex] === 24){
            randomStart++;
        }
        if(randomStart+i+questionNumbers[questionIndex]>24){
            answerButton.innerText = presidents[randomStart+i+questionNumbers[questionIndex]-2];
            //console.log((randomStart+i+questionNumbers[questionIndex])+' '+(randomStart+i+questionNumbers[questionIndex]-2));
        }else{
            answerButton.innerText = presidents[randomStart+i+questionNumbers[questionIndex]-1];
            //console.log((randomStart+i+questionNumbers[questionIndex])+' '+(randomStart+i+questionNumbers[questionIndex]-1));
        }
        
        answerButton.addEventListener('click', checkAnswer);
        answerContainer.appendChild(answerButton);
    }
}

//clear the previous questionj
function clearPreviousQuestion(){
    const questionContainer = document.querySelector('.question');
    questionContainer.innerText = '';
    
    const answerContainer = document.querySelector('.answers');
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild);
    }

    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = '';

    const gameOverContainer = document.querySelector('.game-over');
    while(gameOverContainer.firstChild){
        gameOverContainer.removeChild(gameOverContainer.firstChild);
    }
}

//update the question display
function updateQuestionDisplay(){
    const questionContainer = document.querySelector('.question');
    questionContainer.innerText = questionToGuess;
}

//check answer for a question
function checkAnswer(){
    //disable buttons
    const answerButtons = document.querySelectorAll('.answers button');
    answerButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', checkAnswer);
    });

    if(this.innerText === questionNames[questionIndex]){
        points+=questionPoints[questionIndex];
        document.querySelector('.score').innerText = points;
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = 'Correct! The president is ' + questionNames[questionIndex] + '!';
        
        const gameOverContainer = document.querySelector('.game-over');
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next Question';
        nextButton.addEventListener('click', nextQuestion);
        gameOverContainer.appendChild(nextButton);
    }else{
        lives--;
        updateLifeDisplay();
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = 'Incorrect! The president is ' + questionNames[questionIndex] + '!';
        if(lives === 0){
            gameOver();
        }else{
            const gameOverContainer = document.querySelector('.game-over');
            const nextButton = document.createElement('button');
            nextButton.innerText = 'Next Question';
            nextButton.addEventListener('click', nextQuestion);
            gameOverContainer.appendChild(nextButton);
        }
    }
}

//update life display
function updateLifeDisplay(){
    const lifeContainer = document.querySelector('.lives');
    hearts = '';
    for(let i=0; i<lives; i++){
        hearts+='♥';   
    }
    lifeContainer.innerText = hearts;
    //lifeContainer.innerHTML = `<img src="hearts${lives}.jpg" alt="${lives} hearts">`
}

//end game
function gameOver(){
    clearInterval(myInterval);

    const lifeContainer = document.querySelector('.lives');
    if(time<=0){
        lifeContainer.innerHTML = '<p style="font-size:4rem;color:red;">Out of time!</p>';
    }else{
        lifeContainer.innerHTML = '<p style="font-size:4rem;color:red;">No lives left!</p>';
    }

    const gameOverContainer = document.querySelector('.game-over');
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Game Over! You scored ' + points + ' points! Click to play again!';
    restartButton.addEventListener('click', initializeGame);
    gameOverContainer.appendChild(restartButton);
}

  // Initialize the game when the page loads
  window.addEventListener('load', initializeGame);