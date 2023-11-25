const SPEED = 300;

const garden_sidewalk = async () => {
    const sidewalkWindow = document.getElementById("sidewalk");
    const sidewalkContent = sidewalkWindow.getElementsByClassName("window-content")[0];
    const sidewalkFooter = sidewalkWindow.getElementsByClassName("footer-left")[0];
    const gardenWindow = document.getElementById("garden");
    const gardenContent = gardenWindow.getElementsByClassName("window-content")[0];

    for (let i = 0; i < 4; i++) {
        sidewalkContent.innerHTML = `🪱🪱🪱🌱🌱${emoji_spacer(i)}🪱`;
        await timeout(SPEED);
    }
    sidewalkContent.innerHTML = `🪱🪱🪱🌱🌱`;
    sidewalkFooter.innerHTML = "3 object(s)";
    gardenContent.innerHTML = "dirt <span class='emoji'>🪱</span> dirt<br>dirt dirt <span class='emoji'>🪱</span><br>dirt dirt dirt"
    await timeout(SPEED);
    sidewalkContent.innerHTML = `🪱🪱${emoji_spacer(1)}🪱🌱`;
    await timeout(SPEED);
    sidewalkContent.innerHTML = `🪱🪱${emoji_spacer(1)}🌱🪱`;
    await timeout(SPEED);
    for (let i = 0; i < 4; i++) {
        sidewalkContent.innerHTML = `🪱🪱${emoji_spacer(1)}🌱🌱${emoji_spacer(i)}🪱`;
        await timeout(SPEED);
    }
    sidewalkContent.innerHTML = `🪱🪱${emoji_spacer(1)}🌱🌱`;
    sidewalkFooter.innerHTML = "2 object(s)";
    gardenContent.innerHTML = "dirt <span class='emoji'>🪱</span> <span class='emoji'>🪱</span><br>dirt dirt <span class='emoji'>🪱</span><br>dirt dirt dirt"
    await timeout(SPEED);
    sidewalkContent.innerHTML = `${emoji_spacer(1)}🪱🪱🌱🌱`;
    await timeout(SPEED);
    sidewalkContent.innerHTML = `${emoji_spacer(2)}🪱🪱🌱`;
    await timeout(SPEED);
    sidewalkContent.innerHTML = `${emoji_spacer(3)}🪱🪱`;
    await timeout(SPEED);
    sidewalkContent.innerHTML = `${emoji_spacer(3)}🌱🪱🪱`;
    await timeout(SPEED);
    for (let i = 0; i < 3; i++) {
        sidewalkContent.innerHTML = `${emoji_spacer(3)}🌱🌱${emoji_spacer(i)}🪱🪱`;
        await timeout(SPEED);
    }
    sidewalkContent.innerHTML = `${emoji_spacer(3)}🌱🌱${emoji_spacer(3)}🪱`;
    sidewalkFooter.innerHTML = "1 object(s)";
    gardenContent.innerHTML = "dirt <span class='emoji'>🪱</span> <span class='emoji'>🪱</span><br>dirt dirt <span class='emoji'>🪱</span><br>dirt <span class='emoji'>🪱</span> dirt"
    await timeout(SPEED);
    sidewalkContent.innerHTML = `${emoji_spacer(3)}🌱🌱`;
    sidewalkFooter.innerHTML = "0 object(s)";
    gardenContent.innerHTML = "dirt <span class='emoji'>🪱</span> <span class='emoji'>🪱</span><br><span class='emoji'>🪱</span> dirt <span class='emoji'>🪱</span><br>dirt <span class='emoji'>🪱</span> dirt";
}
const garden_weather = async () => {
    const gardenWindow = document.getElementById("garden");
    const gardenContent = gardenWindow.getElementsByClassName("window-content")[0];
    const gardenFooter = gardenWindow.getElementsByClassName("footer-left")[0];
    await timeout(SPEED);
    gardenContent.innerHTML = "dirt <span class='emoji'>🪱</span> <span class='emoji'>🪱</span><br><span class='emoji'>💧</span> dirt <span class='emoji'>🪱</span><br>dirt <span class='emoji'>🪱</span> dirt";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "dirt <span class='emoji'>🪱</span> <span class='emoji'>💧</span><br><span class='emoji'>🪱</span> dirt <span class='emoji'>🪱</span><br><span class='emoji'>💧</span> <span class='emoji'>🪱</span> dirt";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "dirt <span class='emoji'>💧</span> <span class='emoji'>🪱</span><br><span class='emoji'>🪱</span> <span class='emoji'>💧</span> <span class='emoji'>🪱</span><br>dirt <span class='emoji'>🪱</span> dirt";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span class='emoji'>💧</span> <span class='emoji'>🪱</span> <span class='emoji'>🪱</span><br><span class='emoji'>💧</span> dirt <span class='emoji'>🪱</span><br>dirt <span class='emoji'>🪱</span> dirt";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span class='emoji'>💧</span> <span class='emoji wiggle'>🪱</span><br><span class='emoji'>🪱</span> dirt <span class='emoji'>🪱</span><br><span class='emoji'>💧</span> <span class='emoji'>🪱</span> dirt";
    gardenFooter.innerHTML = "Moisture: moderate";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span class='emoji'>🪱</span> <span class='emoji'>💧</span><br><span class='emoji'>🪱</span> dirt <span class='emoji'>🪱</span><br>dirt <span class='emoji'>🪱</span> <span class='emoji'>💧</span>";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span class='emoji'>💧</span> <span class='emoji wiggle'>🪱</span> <span class='emoji wiggle'>🪱</span><br><span class='emoji'>💧</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji'>💧</span><br>dirt <span class='emoji'>🪱</span> dirt";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span> <span class='emoji wiggle'>🪱</span><br><span class='emoji'>💧</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span class='emoji'>🪱</span> <span class='emoji'>💧</span>";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span> <span class='emoji wiggle'>🪱</span><br><span class='emoji'>🪱</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span class='emoji'>🪱</span> <span style='color:var(--light-blue)'>dirt</span>";
    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span> <span class='emoji wiggle'>🪱</span><br><span class='emoji wiggle'>🪱</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span> <span style='color:var(--light-blue)'>dirt</span>";
    gardenFooter.innerHTML = "Moisture: ⚠️HIGH⚠️";
}
const garden_sidewalk_1 = async () => {
    const sidewalkWindow = document.getElementById("sidewalk");
    const sidewalkContent = sidewalkWindow.getElementsByClassName("window-content")[0];
    const sidewalkFooter = sidewalkWindow.getElementsByClassName("footer-left")[0];
    const gardenWindow = document.getElementById("garden");
    const gardenContent = gardenWindow.getElementsByClassName("window-content")[0];
    const gardenFooter = gardenWindow.getElementsByClassName("footer-left")[0];

    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `${emoji_spacer(2)}🪱🌱🌱`;
    sidewalkFooter.innerHTML = "1 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span class='emoji wiggle'>🪱</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span> <span style='color:var(--light-blue)'>dirt</span>";
    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `🪱${emoji_spacer(1)}🪱🌱🌱`;
    sidewalkFooter.innerHTML = "2 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span class='emoji wiggle'>🪱</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span>";
    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `🪱${emoji_spacer(1)}🪱🌱🌱🪱`;
    sidewalkFooter.innerHTML = "3 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span>";
    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `🪱🪱🪱🌱🌱🪱`;
    sidewalkFooter.innerHTML = "4 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span><br><span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span class='emoji wiggle'>🪱</span><br><span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span> <span style='color:var(--light-blue)'>dirt</span>";
    await timeout(SPEED * 2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt dirt dirt<br>dirt dirt 🪱</span><br>dirt dirt dirt";
    gardenFooter.innerHTML = "Moisture: moderate";
    await timeout(SPEED * 4);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt dirt dirt</span><br>dirt dirt 🪱<br>dirt dirt dirt";
    await timeout(SPEED * 4);
    gardenContent.innerHTML = "dirt dirt dirt<br>dirt dirt 🪱<br>dirt dirt dirt";
    gardenFooter.innerHTML = "Moisture: low";
}


const INTERACTIONS = {
    garden: {
        sidewalk: [{
            done: false,
            position: "left",
            unlocks: ["garden-weather-0"],
            run: garden_sidewalk
        }, {
            done: true,
            position: "top",
            unlocks: ["garden-sidewalk-0"],
            run: garden_sidewalk_1
        }],
        weather: [{
            done: true,
            position: "top",
            unlocks: ["garden-sidewalk-1"],
            run: garden_weather
        }]
    },
};

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function spacer(count) {
    return new Array(count).fill("&nbsp;").join("");
}

function emoji_spacer(count) {
    return `<span class="hidden">${new Array(count).fill("🔳").join("")}</span>`;
}