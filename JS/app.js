const inputTheme = document.querySelectorAll(".inputTheme")[0];
const buttonTheme = document.querySelectorAll(".chat__button")[0];
const navigation = document.getElementsByTagName("nav")[0];
const navRightSetting = document.querySelectorAll(".nav__right__setting")[0];
const navRightHistory = document.querySelectorAll(".nav__right__update")[0];
const bodyTheme = document.getElementsByTagName("body")[0];
const themeSwitcher = document.getElementById("themeSwitcher");
const modalSetting = document.getElementById("mode-setting");
const exModal = document.getElementById("exModal");
const darkMode = document.getElementById("dark");
const lightMode = document.getElementById("light");
const custom = document.getElementById("default");
const replyItem = document.createElement("p");
const selectFont = document.getElementById("selectFont");
const optionFont = document.getElementById("optionFont");
// const itemOne = document.getElementById("itemOne");
// const itemTwo = document.getElementById("itemTwo");
// const itemThree = document.getElementById("itemThree");


selectFont.addEventListener("click", function () {
  optionFont.style.font = "'Courier New', Courier, monospace'";
});
exModal.addEventListener("click", function () {
  // alert("Close me")
  themeSwitcher.style.display = "none";
});
modalSetting.addEventListener("click", function () {
  themeSwitcher.style.display = "block";
});

// console.log(inputTheme);

const fetchResponse = (e) => {
  const chatInput = document.getElementById("input");
  e.preventDefault();
  const body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: chatInput.value,
      },
    ],
  };
  const options = {
    method: "POST",
    headers: {
      Authorization:
        "Bearer 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",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch("https://api.openai.com/v1/chat/completions", options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const questionItem = document.createElement("p");
      // const replyItem = document.createElement("p");
      questionItem.innerHTML = `<span class="text-bold"> Me </span>: ${chatInput.value}`;
      document.getElementById("reply").appendChild(questionItem);
      // replyItem.innerHTML = `
      // <img src="../images/ai.png" width="25"/> ${data.choices[0].message.content}
      // `;
      replyItem.innerHTML = `<span class="text-bold">Assistant</span>: ${data.choices[0].message.content}`;
      console.log(replyItem);

      custom.addEventListener("click", function () {
        // alert("hello");
        bodyTheme.style.backgroundColor = "black";
        navigation.style.backgroundColor = "plum";
        navRightSetting.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
        navRightHistory.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
        buttonTheme.style.backgroundColor = "rgb(123, 0, 123)";
      });
      lightMode.addEventListener("click", function () {
        // alert("hello");
        bodyTheme.style.backgroundColor = "white";
        navigation.style.backgroundColor = "plum";
        navRightSetting.style.backgroundColor = "rgba((191, 36, 176, 0.3))";
        navRightHistory.style.backgroundColor = "rgba((191, 36, 176, 0.3))";
        buttonTheme.style.backgroundColor = "rgb(123,0,123)";
        inputTheme.style.boxShadow = "0 0 5px purple";
      });
      
      darkMode.addEventListener("click", function () {
        // alert("hello");
        bodyTheme.style.backgroundColor = "red";
        navigation.style.backgroundColor = "grey";
        navRightSetting.style.backgroundColor = "rgba(0,0,0,0.3)";
        navRightHistory.style.backgroundColor = "rgba(0,0,0,0.3)";
        buttonTheme.style.backgroundColor = "grey";
        replyItem.style.color = "white";
        replyItem.style.textAlign = "right";
        replyItem.style.width = "30vw";
        replyItem.style.padding = "1em";
        replyItem.style.margin = "1em auto";
        replyItem.style.backgroundColor = "grey";
        replyItem.style.borderRadius = "10px";
        // itemOne.style.backgroundColor = "grey";
        // itemTwo.style.backgroundColor = "grey";
        // itemThree.style.backgroundColor = "grey";
      });
      

      // replyItem.style.color = "black";
      // replyItem.style.marginLeft = "10em";
      // replyItem.style.width = "30vw";
      // replyItem.style.padding = "1em";
      // // replyItem.style.margin = "1em auto";
      // replyItem.style.backgroundColor = "plum";
      // replyItem.style.borderRadius = "10px";
      // questionItem.style.color = "black";
      // questionItem.style.textAlign = "left";
      // questionItem.style.width = "30vw";
      // questionItem.style.padding = "1em";
      // questionItem.style.margin = "1em";
      // questionItem.style.backgroundColor = "white";
      // questionItem.style.borderRadius = "10px";
      document.getElementById("reply").appendChild(replyItem);
      console.log(data.choices[0].message.content);
    });
};
document.getElementById("chat").addEventListener("click", fetchResponse);
