const settings=()
const fetchResponse = (e) => {
    e.preventDefault()
  const body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: document.getElementById("input").value,
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
        console.log(data)
      const replyItem = document.createElement("p");
      replyItem.textContent = data.choices[0].message.content;
      console.log(replyItem)
      document.getElementById("reply").appendChild(replyItem);
      console.log(data.choices[0].message.content);
    });
};
document.getElementById("chat").addEventListener("click", fetchResponse);
