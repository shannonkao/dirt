const checkInteractions = (targetWindow, windows) => {
    if (!!targetWindow) {
        for (let w of windows) {
            const first = w.id < targetWindow.id ? w : targetWindow;
            const second = w.id < targetWindow.id ? targetWindow : w;
            const interactionList = INTERACTIONS[first.id]?.[second.id]
            if (!!interactionList) {
                for (let interaction of interactionList) {
                    if (canRunInteraction(interaction, first, second)) {
                        interaction.done = true;
                        interaction.run();
                        // TODO maybe when done running interaction, do another check? 
                        // queue??? will this lead to undefined cascading behavior at higher window n 
                        if (interaction.unlocks) {
                            for (let item of interaction.unlocks) {
                                const parts = item.split("-");
                                INTERACTIONS[parts[0]][parts[1]][parseInt(parts[2])].done = false;
                            }
                        }
                    }
                }
            }
        }
    }
}

const canRunInteraction = (interaction, first, second) => {
    if (!interaction) return false;

    const { done, position, extra, prereqs } = interaction;

    if (done || getRelativePosition(second, first) !== position) { return false; }
    if (extra && !checkPositions(interaction, second)) { return false; }
    if (prereqs) {
        for (let req of prereqs) {
            const parts = req.split("-");
            if (!INTERACTIONS[parts[0]][parts[1]][parseInt(parts[2])].done) return false
        }
    }

    return true;
}

const checkPositions = (interaction, w) => {
    let valid = true;
    interaction.extra.forEach(pos => {
        const testWindow = document.getElementById(pos.id);
        valid = valid && getRelativePosition(w, testWindow) == pos.position;
    });
    return valid;
}

// Position of w1 RELATIVE TO w2
// [w1] [w2] -> "left"
const getRelativePosition = (w1, w2) => {
    const rect1 = w1.getBoundingClientRect();
    const rect2 = w2.getBoundingClientRect();
    // TODO maybe work margin into top/bottom check
    if (((rect1.top > rect2.top && rect1.bottom < rect2.bottom) || (rect2.top > rect1.top && rect2.bottom < rect1.bottom))
        && Math.abs(rect1.right - rect2.left) < MARGIN) {
        return "left"
    } else if (((rect1.top > rect2.top && rect1.bottom < rect2.bottom) || (rect2.top > rect1.top && rect2.bottom < rect1.bottom))
        && Math.abs(rect1.left - rect2.right) < MARGIN) {
        return "right"
    } else if (((rect1.left > rect2.left && rect1.right < rect2.right) || (rect2.left > rect1.left && rect2.right < rect1.right))
        && Math.abs(rect1.bottom - rect2.top) < MARGIN) {
        return "top"
    } else if (((rect1.left > rect2.left && rect1.right < rect2.right) || (rect2.left > rect1.left && rect2.right < rect1.right))
        && Math.abs(rect1.top - rect2.bottom) < MARGIN) {
        return "bottom"
    } else {
        return undefined;
    }
}