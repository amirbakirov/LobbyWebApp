let tg = window.Telegram.WebApp;

document.getElementByID("user_name").textContent = tg.initDataUnsafe.user.first_name;
document.getElementByID("user_photo").src = tg.initDataUnsafe.user.photo_url;
document.getElementByID("user_money").textContent = "0";
