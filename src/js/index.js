import Topics from "../json/index.json";

window.onload = function() {
  const topicContainer = document.getElementById("container");
  const descriptionContainer = document.getElementById("description");
  for (const key in Topics) {
    const element = document.createElement("h1");
    const node = document.createTextNode(key);
    element.appendChild(node);
    topicContainer.appendChild(element);
  }
  const descriptionArray = Object.values(Topics);
  const descriptionElement = document.createElement("h1");
  const descriptionNode = document.createTextNode(descriptionArray[0]);
  descriptionElement.appendChild(descriptionNode);
  descriptionContainer.appendChild(descriptionElement);

  const topicText = document.getElementById("container").querySelectorAll("h1");
  const descriptionText = document.getElementById("description").querySelectorAll("h1");
  const time = document.getElementById("container").querySelectorAll("h2");

  topicText[0].style.background = "#1f57a4";
  topicText[0].style.color = "#fff";
  topicText[0].style.borderTop = "1px solid #1f57a4";

  let count = 1;
  let min = 1, sec = 30;
  const timerInterval = setInterval(() => {
    sec = sec - 1;
    if(sec < 10) {
      sec = `${0}${sec}`;
    }
    if(sec === "00" && min !== 0)
    {
      min = 0;
      sec = 60;
    }
    if (min === 0 && sec === "00")
    {
      min = 1;
      sec = 30;
    }
    time[0].innerHTML = min + ":" + sec;
  }, 1000);

  const interval = setInterval(() => {
    if(count === topicText.length) {
      clearInterval(interval);
      clearInterval(timerInterval);
    } else {
      let previous = count - 1;
      topicText[previous].style.background = "#fff";
      topicText[previous].style.color = "#1f57a4";
      topicText[count].style.background = "#1f57a4";
      topicText[count].style.color = "#fff";
      descriptionText[0].innerHTML = descriptionArray[count];
      count++;
    }
  }, 90000);
};
