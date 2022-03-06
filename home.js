const userNames = document.getElementsByClassName("user-name")
const userNamesTag = document.getElementsByTagNameNS("input")

console.log(userNames)
console.log(userNamesTag)

function handleClick() {
    const userName = document.getElementById("userName");
    const userText = document.getElementById("user-text");
     
    userText.innerHTML = userName.value;
    console.log(userName.value)
}

function handleChange() {
    const userName = document.getElementById("userName");
    const userText = document.getElementById("user-text-change");
     
    userText.innerHTML = userName.value;
    console.log(userName.value)
}
