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
    gardenContent.innerHTML = "dirt 🪱 dirt<br>dirt dirt 🪱<br>dirt dirt dirt"
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
    gardenContent.innerHTML = "dirt 🪱 🪱<br>dirt dirt 🪱<br>dirt dirt dirt"
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
    gardenContent.innerHTML = "dirt 🪱 🪱<br>dirt dirt 🪱<br>dirt 🪱 dirt"
    await timeout(SPEED);
    sidewalkContent.innerHTML = `${emoji_spacer(4)}🌱🌱`;
    sidewalkFooter.innerHTML = "0 object(s)";
    gardenContent.innerHTML = "dirt 🪱 🪱<br>🪱 dirt 🪱<br>dirt 🪱 dirt";
}
const sidewalk_weather = async () => {
    const sidewalkContent = document.getElementById("sidewalk").getElementsByClassName("window-content")[0];
    for (let i = 0; i < 2; i++) {
        sidewalkContent.innerHTML = `💧${emoji_spacer(2)}🌱🌱${emoji_spacer(1)}💧`;
        await timeout(SPEED);
        sidewalkContent.innerHTML = `${emoji_spacer(2)}💧🌱🌱💧💧`;
        await timeout(SPEED);
        sidewalkContent.innerHTML = `${emoji_spacer(1)}💧💧🌱${emoji_spacer(2)}💧`;
        await timeout(SPEED);
    }
    sidewalkContent.innerHTML = `💧${emoji_spacer(1)}💧🌱🌱${emoji_spacer(1)}💧💧`;
}
const garden_sidewalk_1 = async () => {
    const sidewalkWindow = document.getElementById("sidewalk");
    const sidewalkContent = sidewalkWindow.getElementsByClassName("window-content")[0];
    const sidewalkFooter = sidewalkWindow.getElementsByClassName("footer-left")[0];
    const gardenWindow = document.getElementById("garden");
    const gardenContent = gardenWindow.getElementsByClassName("window-content")[0];
    const gardenFooter = gardenWindow.getElementsByClassName("footer-left")[0];

    await timeout(SPEED*2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt 🪱 🪱</span><br>🪱 dirt 🪱<br>dirt 🪱 dirt"
    gardenFooter.innerHTML = "Moisture: moderate";
    await timeout(SPEED*4);
    sidewalkContent.innerHTML = `💧${emoji_spacer(2)}🌱🌱${emoji_spacer(1)}💧`;
    gardenFooter.innerHTML = "Moisture: ⚠️HIGH⚠️";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt 🪱 🪱<br>🪱 dirt 🪱</span><br>dirt 🪱 dirt";
    await timeout(SPEED*4);
    sidewalkContent.innerHTML = `${emoji_spacer(3)}🌱🌱`;
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt <span class='wiggle'>🪱</span> 🪱<br>🪱 dirt 🪱</span><br>dirt 🪱 dirt";
    await timeout(SPEED * 2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt <span class='wiggle'>🪱</span> <span class='wiggle'>🪱</span><br>🪱 dirt 🪱</span><br>dirt 🪱 dirt";
    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `${emoji_spacer(2)}🪱🌱🌱`;
    sidewalkFooter.innerHTML = "1 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt dirt <span class='wiggle'>🪱</span><br><span class='wiggle'>🪱</span> dirt 🪱</span><br>dirt 🪱 dirt";
    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `🪱${emoji_spacer(1)}🪱🌱🌱`;
    sidewalkFooter.innerHTML = "2 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt dirt dirt<br><span class='wiggle'>🪱</span> dirt 🪱</span><br>dirt <span class='wiggle'>🪱</span> dirt";
    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `🪱${emoji_spacer(1)}🪱🌱🌱🪱`;
    sidewalkFooter.innerHTML = "3 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt dirt dirt<br>dirt dirt 🪱</span><br>dirt <span class='wiggle'>🪱</span> dirt";
    await timeout(SPEED * 2);
    sidewalkContent.innerHTML = `🪱🪱🪱🌱🌱🪱`;
    sidewalkFooter.innerHTML = "4 object(s)";
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt dirt dirt<br>dirt dirt 🪱</span><br>dirt dirt dirt";
    await timeout(SPEED * 2);
    gardenContent.innerHTML = "<span style='color:var(--light-blue)'>dirt dirt dirt</span><br>dirt dirt 🪱<br>dirt dirt dirt";
    gardenFooter.innerHTML = "Moisture: moderate";
    await timeout(SPEED * 4);
    gardenContent.innerHTML = "dirt dirt dirt<br>dirt dirt 🪱<br>dirt dirt dirt";
    gardenFooter.innerHTML = "Moisture: low";
}


const INTERACTIONS = {
    garden: {
        sidewalk: [{
            done: false,
            position: "left",
            unlocks: ["sidewalk-weather-0"],
            run: garden_sidewalk
        }, {
            done: true,
            position: "top",
            unlocks: ["garden-sidewalk-0"],
            run: garden_sidewalk_1
        }]
    },
    sidewalk: {
        weather: [{
            done: true,
            position: "top",
            unlocks: ["garden-sidewalk-1"],
            run: sidewalk_weather
        }]
    }
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