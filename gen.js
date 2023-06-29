function generateRandomString(length)
{
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < length; i++)
    {
        var randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }
    return result;
}
let masterK = "";
let captchCatcher = document.getElementById("captchCatcher");
function loadRandomStringIntoDiv(captcha)
{
    var randomString = generateRandomString(6);
    masterK = randomString;
    var divElement = document.getElementById(captcha);
    if (divElement) {
        divElement.textContent = randomString;
    }
    divElement.style.fontFamily = "consolas"
}

function passMsg() {
    if(masterK != captchCatcher.value) {
        alert("Wrong Captcha!");
    } else {
        alert("Msg sent successfully!");
    }
}

loadRandomStringIntoDiv('captcha');