let tg = window.Telegram.WebApp;

tg.expand();

let user_name = document.getElementById("user_name");
user_name.innerText = `${tg.initDataUnsafe.user.first_name};