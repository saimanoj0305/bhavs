const content = document.getElementById("content");

let step = 1;
let currentImg = 1;

/* Typewriter */
function typeText(el, text, speed = 35) {
  el.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* 💥 Confetti */
function confettiBoom() {
  const emojis = ["🎉","💖","✨","💘","🌸","🎊"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = (2 + Math.random()*2) + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

loadStep();

document.addEventListener("click", (e) => {
  if (e.target.id === "nextBtn") {
    step++;
    loadStep();
  }
});

function loadStep() {
  if (step === 1) {
    content.innerHTML = `
      <h2>Hiiiii Bhavana 🖤💖</h2>
      <p>I made this extraaaa cute just for you 🧸✨</p>
      <p>Turn your volume up 🎧 and take it slow 🐱</p>
      <button id="nextBtn">Next ➜</button>
    `;
  }

  if (step === 2) {
    content.innerHTML = `
      <h2 id="type"></h2>
      <p>🐱 💖 🧸 💕</p>
      <button id="nextBtn">Next ➜</button>
    `;
    typeText(
      document.getElementById("type"),
      "Some people don’t even try… yet they become our comfort, our smile, our favorite thought 💗"
    );
  }

  if (step === 3) {
    content.innerHTML = `
      <h2>Little Cute Moments 📸✨</h2>
      <div class="slider">
        <img id="slideImg" src="images/img1.jpg">
      </div>
      <p>My heart does this every time 🥹💘</p>
      <button id="nextBtn">Next ➜</button>
    `;
    setInterval(() => {
      currentImg = currentImg % 3 + 1;
      const img = document.getElementById("slideImg");
      if (img) img.src = "images/img" + currentImg + ".jpg";
    }, 2000);
  }

  if (step === 4) {
    content.innerHTML = `
      <h2>Okay… real question now 😳💗</h2>
      <p>Bhavana, will you be my Valentine? 🖤🌸</p>
      <div class="buttons">
        <button id="yesBtn">YES 😍</button>
        <button id="noBtn">NO 🙃</button>
      </div>
    `;
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
      noBtn.style.left = Math.random()*240 + "px";
      noBtn.style.top = Math.random()*50 + "px";
    });
    yesBtn.addEventListener("click", () => {
      confettiBoom();
      step++;
      loadStep();
    });
  }

  if (step === 5) {
    content.innerHTML = `
      <h2>YAYYYYY 😭🖤💖</h2>
      <p>You just made my heart do backflips 🧸✨</p>
      <p>Thank you for being you 🌸💗</p>
      <h3>Happy Valentine’s Day 💘</h3>
      <p>❤️ Forever Yours ❤️</p>
    `;
  }
}
