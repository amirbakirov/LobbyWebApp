let tg = window.Telegram.WebApp;

document.getElementByID("user_name").value = tg.initDataUnsafe.user.first_name;
document.getElementByID("user_photo").value = tg.initDataUnsafe.user.photo_url;
document.getElementByID("user_money").value = "0";
