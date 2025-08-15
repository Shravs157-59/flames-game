function playFlames() {
    let n1 = document.getElementById("name1").value.trim();
    let n2 = document.getElementById("name2").value.trim();

    if (!n1 || !n2) {
        document.getElementById("result").innerHTML = "⚠️ Please enter both names!";
        return;
    }

    const clean = s => s.toLowerCase().replace(/[^a-z]/g, "");
    let a = clean(n1).split("");
    let b = clean(n2).split("");

    // Remove common letters
    for (let i = 0; i < a.length; i++) {
        let idx = b.indexOf(a[i]);
        if (idx !== -1) {
            a[i] = "";
            b[idx] = "";
        }
    }

    let count = (a.join("") + b.join("")).length || 1;

    let flamesArr = ["F", "L", "A", "M", "E", "S"];
    let index = 0;

    while (flamesArr.length > 1) {
        index = (index + count - 1) % flamesArr.length;
        flamesArr.splice(index, 1);
    }

    let meanings = {
        "F": "Friends 😄",
        "L": "Love ❤️",
        "A": "Affection 😊",
        "M": "Marriage 💍",
        "E": "Enemies 😈",
        "S": "Siblings 👫"
    };

    let quotes = {
        "F": [
            "<name1> and <name2>, besties for life — until one of you steals the last slice 🍕",
            "Friendship alert! <name1> and <name2> are now officially the sarcasm duo 😂",
            "AI verdict: <name1> annoys <name2> in the most lovable way possible."
        ],
        "L": [
            "Love detected between <name1> and <name2>… watch out world! 💕",
            "<name1> is blushing just thinking about <name2>… and pizza 🍕",
            "If this was a rom-com, <name1> and <name2> just had the ‘slow motion look’ moment 🎬"
        ],
        "A": [
            "<name1> cares for <name2> like they’re a precious plant 🌱",
            "Warning: <name1>’s affection towards <name2> might cause toothaches 🍭",
            "Pure vibes: <name1> and <name2> spreading good energy everywhere ✨"
        ],
        "M": [
            "<name1> and <name2>… I now pronounce you Player 1 & Player 2 🎮",
            "Wedding bells? Or just <name1> and <name2> being dramatic 💍",
            "AI predicts: <name1> and <name2> will argue over the remote for life 📺"
        ],
        "E": [
            "<name1> vs <name2>: The sequel nobody asked for 😏",
            "Enemies? More like frenemies with extra spice 🌶️",
            "<name1> and <name2>, please stop plotting each other’s downfall over coffee ☕"
        ],
        "S": [
            "<name1> and <name2>: Partners in crime since day one 🕵️",
            "Sibling energy detected between <name1> and <name2> — chaos guaranteed 😅",
            "You fight, you laugh, you steal each other’s snacks — classic siblings 🍫"
        ]
    };

    let relation = flamesArr[0];
    let randomQuote = quotes[relation][Math.floor(Math.random() * quotes[relation].length)];

    // Replace placeholders with names
    randomQuote = randomQuote.replace(/<name1>/g, n1).replace(/<name2>/g, n2);

    document.getElementById("result").innerHTML =
        `💌 Result: <b>${meanings[relation]}</b><br><i>"${randomQuote}"</i>`;
}
