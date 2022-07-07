// Vytvoření objektu pro zpracování sockety
const socket = io();

// Reakce na událost odeslání formuláře
send.addEventListener('click', function(event) {
    // Zabrání provedení výchozí události (automatickému odeslání formuláře)
    event.preventDefault();
    // Jestliže vstupní pole označené id="message" obsahuje nějaký text (hodnotu)...
    if (message.value)
       // ... je pod identifikátorem 'chat' rozeslána zpráva v podobě objektu, obsahující hodnoty vyplněné ve formuláři 
       socket.emit('chat', {nick: nick.value, color: color.value, message: message.value});
});

// Reakce na přijetí zprávy s identifikací "chat"
socket.on('chat', msg => {
    console.log(msg);
    // Připojení nové odrážky do výpisu komunikace v chatu
    chatbox.innerHTML += `<li class="list-group-item" style="color: ${msg.color}">${msg.nick}: ${msg.message}</li>`;
});
