
const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users")

const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const socket = io();

//Join Chat
socket.emit('joinRoom', { username, room });

//Get room and users
socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users);
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
function outputUsers(users) {
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join("")}
    `;
}
