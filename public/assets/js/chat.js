const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");

const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const socket = io();

//Join Chat
socket.emit('joinRoom', { username, room });

//Get users
socket.on('roomUsers', ({ users, room }) => {

    let url = window.location.search;
    let chatId;
    if (url.indexOf("?chat_id=") !== -1) {
        chatId = url.split("=")[1];
        getUser(chatId);
    } 
    outputUsers(users, chatId);
    outputRoomName(room);
});

//Message from Server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    //Scroll Down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

//Message submit
chatForm.addEventListener('submit', (e) => {
    //Prevents normal submit button behavior
    e.preventDefault();

    //grabbing text from msg id in chat form
    const msg = e.target.elements.msg.value;

    //Emit message to server
    socket.emit('chatMessage', msg);

    //Clear input of message bar
    e.target.elements.msg.value = "";
    e.target.elements.msg.focus();
});

//Output message to DOM
function outputMessage(message) {
    //Create DIV
    const div = document.createElement("div");
    //ADD CLASS OF message
    div.classList.add('message');
    //ADD HTML and INSERT MESSAGE 
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">${message.text}</p>`;
    //Query Select class .chat-messages and append div
    document.querySelector('.chat-messages').appendChild(div);
};

//Add roomname to DOM
function outputRoomName(room) {
    roomName.innerText = room;

};

//Add Users to DOM
function outputUsers(users, chat) {

    chatId = chat || "";
        if (chatId) {
            chatId = "/?chat_id=" + chatId;
    };

    // When the page loads, grab all of our users
    $.get("/api/user" + chatId, function (data) {
        console.log("Users", data);
        
        userList.innerHTML = `
            ${users.map(data => `<li>${data.username}</li>`).join("")}
        `;   
    });   
};