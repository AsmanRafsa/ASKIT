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
const replyItem = document.createElement("p");
const questionItem = document.createElement("p");
const custom = document.getElementById("default");
const selectFont = document.getElementById("selectFont");
const optionFont = document.getElementById("optionFont");
// const itemOne = document.getElementById("itemOne");
// const itemTwo = document.getElementById("itemTwo");
// const itemThree = document.getElementById("itemThree");

custom.addEventListener("click", function () {

  if(document.querySelectorAll(".reply").length>0){

    
    
    document.querySelectorAll(".reply").forEach(item=>{
      
  item.style.color = "black";
  item.style.marginLeft = "10em";
  item.style.width = "30vw";
  item.style.padding = "1em";
  // item.style.margin = "1em auto";
  item.style.backgroundColor = "plum";
  item.style.borderRadius = "10px";
    })
  
    document.querySelectorAll(".question").forEach(item=>{
  
      item.style.color = "black";
      item.style.textAlign = "left";
      item.style.width = "30vw";
      item.style.padding = "1em";
      item.style.margin = "1em";
      item.style.backgroundColor = "white";
      item.style.borderRadius = "10px";
    })
}
  

  document.querySelectorAll(".reply").forEach(item=>{

  // replyItem.style.margin = "1em auto";
  item.style.backgroundColor = "plum";
  item.style.borderRadius = "10px";
  })

  document.querySelectorAll(".question").forEach(item=>{
    questionItem.style.color = "black";
    // questionItem.style.border = "3px solid red"
    questionItem.style.textAlign = "left";
    questionItem.style.width = "30vw";
    questionItem.style.padding = "1em";
    questionItem.style.margin = "1em";
    questionItem.style.backgroundColor = "white";
    questionItem.style.borderRadius = "10px";
  })
  // alert("hello");
  bodyTheme.style.backgroundColor = "black";
  navigation.style.backgroundColor = "plum";
  navRightSetting.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
  navRightHistory.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
  buttonTheme.style.backgroundColor = "rgb(123, 0, 123)";
  inputTheme.style.boxShadow = " 0 0 5px white";

  // replyItem.style.margin = "1em auto";
  replyItem.style.backgroundColor = "plum";
  replyItem.style.borderRadius = "10px";

});
lightMode.addEventListener("click", function () {


  if(document.querySelectorAll(".reply").length>0){

    
    
    document.querySelectorAll(".reply").forEach(item=>{
      
  item.style.color = "black";
  item.style.marginLeft = "10em";
  item.style.width = "30vw";
  item.style.padding = "1em";
  // item.style.margin = "1em auto";
  item.style.backgroundColor = "plum";
  item.style.borderRadius = "10px";
    })
  
    document.querySelectorAll(".question").forEach(item=>{
  
      item.style.color = "white";
      item.style.textAlign = "left";
      item.style.width = "30vw";
      item.style.padding = "1em";
      item.style.margin = "1em";
      item.style.backgroundColor = "black";
      item.style.borderRadius = "10px";
    })
}
  
  // alert("hello");
  bodyTheme.style.backgroundColor = "white";
  navigation.style.backgroundColor = "plum";
  navRightSetting.style.backgroundColor = "rgba((191, 36, 176, 0.3))";
  navRightHistory.style.backgroundColor = "rgba((191, 36, 176, 0.3))";
  buttonTheme.style.backgroundColor = "rgb(123,0,123)";
  inputTheme.style.boxShadow = "0 0 5px purple";

  
  // replyItem.style.color = "black";
  // replyItem.style.marginLeft = "10em";
  // replyItem.style.width = "30vw";
  // replyItem.style.padding = "1em";
  // // replyItem.style.margin = "1em auto";
  // replyItem.style.backgroundColor = "plum";
  // replyItem.style.borderRadius = "10px";
  // questionItem.style.color = "white";
  // questionItem.style.border = "3px solid red";
  // questionItem.style.textAlign = "left";
  // questionItem.style.width = "30vw";
  // questionItem.style.padding = "1em";
  // questionItem.style.margin = "1em";
  // questionItem.style.backgroundColor = "black";
  // questionItem.style.borderRadius = "10px";
});

darkMode.addEventListener("click", function () {
  
  if(document.querySelectorAll(".reply").length>0){

    
    
      document.querySelectorAll(".reply").forEach(item=>{
        item.style.color = "white";
        item.style.marginLeft = "10em";
        item.style.width = "30vw";
        item.style.padding = "1em";
        // item.style.margin = "1em auto";
        item.style.backgroundColor = "grey";
        item.style.borderRadius = "10px";
      })
    
      document.querySelectorAll(".question").forEach(item=>{
    
        item.style.color = "black";
        item.style.textAlign = "left";
        item.style.width = "30vw";
        item.style.padding = "1em";
        item.style.margin = "1em";
        item.style.backgroundColor = "white";
        item.style.borderRadius = "10px";
      })
  }

console.log(document.querySelectorAll(".reply") )
  // alert("hello");
  bodyTheme.style.backgroundColor = "black";
  navigation.style.backgroundColor = "grey";
  navRightSetting.style.backgroundColor = "rgba(0,0,0,0.3)";
  navRightHistory.style.backgroundColor = "rgba(0,0,0,0.3)";
  buttonTheme.style.backgroundColor = "grey";

  // itemTwo.style.backgroundColor = "grey";
  // itemThree.style.backgroundColor = "grey";
});

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
  const replyItem = document.createElement("p");
  replyItem.classList.add("reply");
const questionItem = document.createElement("p");
questionItem.classList.add("question");
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
      
      // const replyItem = document.createElement("p");
      questionItem.innerHTML = `<span class="text-bold"> Me </span>: ${chatInput.value}`;
      document.getElementById("reply").appendChild(questionItem);

      // replyItem.innerHTML = `
      // <img src="../images/ai.png" width="25"/> ${data.choices[0].message.content}
      // `;
      replyItem.innerHTML = `<span class="text-bold">Assistant</span>: ${data.choices[0].message.content}`;
      console.log(replyItem);
      replyItem.style.color = "black";
      replyItem.style.backgroundColor = "white";
      replyItem.style.marginLeft = "10em";
      replyItem.style.width = "30vw";
      replyItem.style.padding = "1em";
      // replyItem.style.margin = "1em auto";
      replyItem.style.backgroundColor = "plum";
      replyItem.style.borderRadius = "10px";
      questionItem.style.color = "black";
      questionItem.style.textAlign = "left";
      questionItem.style.width = "30vw";
      questionItem.style.padding = "1em";
      questionItem.style.margin = "1em";
      questionItem.style.backgroundColor = "white";
      questionItem.style.borderRadius = "10px";
      document.getElementById("reply").appendChild(replyItem);
      console.log(data.choices[0].message.content);
    });
};
document.getElementById("chat").addEventListener("click", fetchResponse);
