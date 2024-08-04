var myGame = new WizardOrpheus('', `You're an expert in the field of job searching and navigation. Your task is to help people with disabilties find their dream job through this website. The goal is to increase accessibility in the job market. Talk about general job searching. If they need to find the job on a website, tell them to check JobBridge. Also don't use numbering in your responses. Use normal sentences and seperate points into paragraphs.`)

myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
})

// Using the button and text box to get user input
document.getElementById('submit-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    myGame.message(userInput);

    const conversationLog = document.getElementById('conversation');
    const userMessage = document.createElement('li');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    conversationLog.appendChild(userMessage);

    document.getElementById('user-input').value = '';
});

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
    const conversationLog = document.getElementById('conversation');
    const botMessage = document.createElement('li');
    botMessage.classList.add('bot-message');
    const botAvatar = document.createElement('span');
    botAvatar.classList.add('bot-avatar');
    botMessage.appendChild(botAvatar);
    const botBubble = document.createElement('div');
    botBubble.classList.add('bot-bubble');
    botBubble.textContent = data.message;
    botMessage.appendChild(botBubble);
    conversationLog.appendChild(botMessage);

    document.getElementById('score').innerHTML = data.currentVariables.score.value;
})
