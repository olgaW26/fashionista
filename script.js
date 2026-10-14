/* =========================================================
   What Kind of Fashionista Are You?
   ---------------------------------------------------------
   HOW TO ADD A CHARACTER
     Add an object to CHARACTERS with a unique `id`, text fields,
     a `bg` colour for the cover, and an `svg` string (viewBox 0 0 300 330).
   HOW TO ADD A QUESTION
     Add { text, answers: [{ text, scores: { characterId: points } }] }
     to QUESTIONS. Any number of answers works; 4 looks best.
   ========================================================= */

const SITE_URL = "https://olgaw26.github.io/fashionista/";

/* ---- shared drawing helpers for the character SVGs ---- */
const head = (x, y, r, skin = "#fbf4e6") =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${skin}" stroke="#111" stroke-width="4"/>`;
const eyes = (x, y, style = "dot") => ({
  dot: `<circle cx="${x - 12}" cy="${y}" r="3.5" fill="#111"/><circle cx="${x + 12}" cy="${y}" r="3.5" fill="#111"/>`,
  wide: `<circle cx="${x - 12}" cy="${y}" r="7" fill="#fff" stroke="#111" stroke-width="3"/><circle cx="${x + 12}" cy="${y}" r="7" fill="#fff" stroke="#111" stroke-width="3"/><circle cx="${x - 11}" cy="${y}" r="3" fill="#111"/><circle cx="${x + 13}" cy="${y}" r="3" fill="#111"/>`,
  closed: `<path d="M${x - 18} ${y} q6 4 12 0 M${x + 6} ${y} q6 4 12 0" stroke="#111" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  sleepy: `<path d="M${x - 18} ${y} h12 M${x + 6} ${y} h12" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>`,
}[style]);

const CHARACTERS = [
  {
    id: "chaos",
    name: "The Chaos Couturier",
    tagline: "Five patterns at once. It's a concept.",
    description:
      "You don't get dressed, you curate an incident. Stripes, polka dots and leopard print aren't clashing, they are in conversation, and the conversation is loud. Strangers stop you on the street and you choose to believe it's admiration. Your wardrobe has no colour scheme, only a vibe, and the vibe is 'fire alarm at a carnival.'",
    look: "A striped shirt under a polka-dot vest under a leopard coat, with three hair clips that each belong to a different decade.",
    flaw: "You own eleven belts and have never once worn one to hold up trousers.",
    accessory: "A coffee cup that is somehow also on fire.",
    coverLines: ["Is beige a crime? We asked, you shouted", "17 clips, 1 head: a styling miracle", "The matching trend is over. You ended it"],
    share: "I took the fashionista quiz and I'm The Chaos Couturier. Five patterns at once is a CONCEPT. Find out yours:",
    bg: "#ffe3f0",
    svg: `
      <rect x="0" y="0" width="300" height="330" fill="#ffe3f0"/>
      <g stroke="#111" stroke-width="4">
        <path d="M60 300 q0-120 40-150 h100 q40 30 40 150Z" fill="#ff2e88"/>
        <path d="M75 300 q0-110 35-140 M225 300 q0-110 -35-140" fill="none"/>
        <g fill="#fbf4e6"><circle cx="90" cy="230" r="7"/><circle cx="115" cy="270" r="7"/><circle cx="185" cy="230" r="7"/><circle cx="210" cy="270" r="7"/></g>
        <path d="M100 150 h100 v150 h-100Z" fill="#f2c230"/>
        <path d="M100 170h100M100 195h100M100 220h100M100 245h100M100 270h100" fill="none" stroke="#111"/>
        <g fill="#111"><ellipse cx="80" cy="190" rx="8" ry="5"/><ellipse cx="220" cy="190" rx="8" ry="5"/><ellipse cx="72" cy="255" rx="8" ry="5"/><ellipse cx="228" cy="255" rx="8" ry="5"/><ellipse cx="90" cy="285" rx="8" ry="5"/><ellipse cx="208" cy="285" rx="8" ry="5"/></g>
      </g>
      ${head(150, 100, 42)}
      <path d="M108 95 q10-40 42-40 q32 0 42 40 q-20-18 -42-14 q-22-4 -42 14Z" fill="#111"/>
      <rect x="96" y="70" width="22" height="9" rx="3" fill="#c9a7ff" stroke="#111" stroke-width="3" transform="rotate(-25 107 74)"/>
      <rect x="140" y="52" width="22" height="9" rx="3" fill="#f2c230" stroke="#111" stroke-width="3"/>
      <rect x="182" y="68" width="22" height="9" rx="3" fill="#ff2e88" stroke="#111" stroke-width="3" transform="rotate(25 193 72)"/>
      ${eyes(150, 100, "wide")}
      <path d="M135 120 q15 14 30 0" stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <g stroke="#111" stroke-width="4">
        <path d="M60 200 q-25 20 -10 60" fill="none" stroke-linecap="round"/>
        <path d="M240 200 q30 10 20 50" fill="none" stroke-linecap="round"/>
        <rect x="248" y="248" width="30" height="36" rx="5" fill="#fff"/>
        <path d="M278 256 h10 q8 8 0 18 h-10" fill="#fff"/>
        <path d="M253 246 q0-22 10-28 q-6 14 6 22 q0-20 10-22 q-4 14 6 28Z" fill="#f2c230" stroke="#ff2e88"/>
      </g>`,
  },
  {
    id: "monk",
    name: "The Monochrome Monk",
    tagline: "Forty identical black turtlenecks. Inner peace.",
    description:
      "You have transcended colour. Your wardrobe is a single shade of black repeated with monastic devotion, and anyone who says 'they're all the same' is told, calmly, that this one is charcoal. Getting dressed takes you nine seconds and you spend the saved time judging prints. People describe you as 'elegant' and 'slightly intimidating,' which you consider the same compliment.",
    look: "Black turtleneck, black trousers, black boots, and an expression that says you have read a book about architecture.",
    flaw: "You once bought a navy jumper by mistake and still haven't emotionally recovered.",
    accessory: "A lint roller, held like a sacred relic.",
    coverLines: ["Black: still the new black, says you", "We counted your turtlenecks. We stopped at 40", "Minimalism, or a very long goth phase?"],
    share: "I took the fashionista quiz and I'm The Monochrome Monk. 40 identical black turtlenecks and total inner peace. Find out yours:",
    bg: "#efe9ff",
    svg: `
      <rect width="300" height="330" fill="#efe9ff"/>
      <g fill="none" stroke="#111" stroke-width="3" opacity=".9">
        ${[0,1,2,3,4,5,6,7].map(i => { const a = (i / 8) * Math.PI * 2; const cx = 150 + Math.cos(a) * 110; const cy = 150 + Math.sin(a) * 110; return `<g transform="translate(${cx} ${cy}) rotate(${(a*180/Math.PI)+90}) scale(.55)"><path d="M0-22a6 6 0 1 1 6 6c-3 0-6 2-6 6v3M0-7 -28 10c-1 2 0 5 3 5h50c3 0 4-3 3-5Z" stroke-linecap="round" stroke-linejoin="round"/></g>`; }).join("")}
      </g>
      <ellipse cx="150" cy="312" rx="60" ry="8" fill="#111" opacity=".25"/>
      <g stroke="#111" stroke-width="4">
        <path d="M95 300 q0-110 20-140 l35-10 l35 10 q20 30 20 140Z" fill="#111"/>
        <path d="M120 150 h60 v16 q-30 14 -60 0Z" fill="#111"/>
        <path d="M110 180 l-30 50 l16 10 M190 180 l30 50 l-16 10" fill="none" stroke-linecap="round"/>
        <circle cx="90" cy="242" r="9" fill="#fbf4e6"/><circle cx="210" cy="242" r="9" fill="#fbf4e6"/>
      </g>
      <rect x="118" y="128" width="64" height="30" rx="8" fill="#111"/>
      ${head(150, 100, 40)}
      <path d="M110 92 q10-32 40-32 q30 0 40 32 q-15-10 -40-10 q-25 0 -40 10Z" fill="#111"/>
      ${eyes(150, 102, "closed")}
      <path d="M140 122 h20" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="150" cy="100" r="62" fill="none" stroke="#f2c230" stroke-width="5" stroke-dasharray="6 10"/>`,
  },
  {
    id: "vampire",
    name: "The Vintage Vampire",
    tagline: "Nothing new since 1987. Smells faintly of thrift store.",
    description:
      "You have never paid full price and you consider it a personality. Your coat is older than your landlord, your sunglasses were 'found' and your best jacket came with someone else's bus ticket in the pocket, which you kept for luck. You can smell a charity shop from two streets away and you cannot enter a building with a '2 for 1' sign without emerging transformed. Daylight is fine, you just prefer to shop at closing time.",
    look: "A floor-length cape, oversized sunglasses after dark, and a leather handbag that has survived three owners and a flood.",
    flaw: "You tell every single person exactly how little you paid, every single time.",
    accessory: "A price tag reading 'ONLY 2 EUROS', worn like a medal.",
    coverLines: ["'It's vintage,' you say. It's from Tuesday", "The 2 euro cape that stopped a wedding", "Moths: friend, foe, or roommate?"],
    share: "I took the fashionista quiz and I'm The Vintage Vampire. Nothing new since 1987 and this cape was 2 euros. Find out yours:",
    bg: "#e5e5f0",
    svg: `
      <rect width="300" height="330" fill="#e5e5f0"/>
      <circle cx="235" cy="60" r="28" fill="#f2c230" stroke="#111" stroke-width="4"/>
      <circle cx="245" cy="52" r="24" fill="#e5e5f0"/>
      <path d="M150 140 L40 310 h220Z" fill="#111" stroke="#111" stroke-width="4" stroke-linejoin="round"/>
      <path d="M150 150 L95 300 h110Z" fill="#8b2252"/>
      <path d="M100 160 q-50 10 -70 60 l30 10 M200 160 q50 10 70 60 l-30 10" fill="#111" stroke="#111" stroke-width="4" stroke-linejoin="round"/>
      <path d="M150 150 q-30 0 -36 22 l36 60 l36-60 q-6-22 -36-22Z" fill="#fbf4e6" stroke="#111" stroke-width="4"/>
      ${head(150, 100, 40, "#f4f0ff")}
      <path d="M110 96 q-4-38 40-40 q44 2 40 40 q-10-26 -40-24 q-30-2 -40 24Z" fill="#111"/>
      <path d="M118 96 q-10 20 -14 48" stroke="#111" stroke-width="7" stroke-linecap="round"/>
      <g stroke="#111" stroke-width="4"><path d="M106 100 h88"/><ellipse cx="130" cy="106" rx="20" ry="15" fill="#111"/><ellipse cx="170" cy="106" rx="20" ry="15" fill="#111"/></g>
      <ellipse cx="124" cy="101" rx="7" ry="3" fill="#fff" opacity=".7"/><ellipse cx="164" cy="101" rx="7" ry="3" fill="#fff" opacity=".7"/>
      <path d="M138 128 q12 6 24 0" stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M142 128 l3 8 M158 128 l-3 8" stroke="#111" stroke-width="3" stroke-linecap="round"/>
      <g transform="rotate(-12 60 240)">
        <path d="M30 220 h56 l10 14 l-10 14 h-56Z" fill="#fbf4e6" stroke="#111" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="40" cy="234" r="3" fill="#111"/>
        <text x="48" y="230" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="9" fill="#111">ONLY</text>
        <text x="48" y="242" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="11" fill="#ff2e88">2 EUROS</text>
      </g>
      <circle cx="78" cy="226" r="9" fill="#f4f0ff" stroke="#111" stroke-width="4"/>`,
  },
  {
    id: "comfort",
    name: "The Comfort Commander",
    tagline: "Hoodie and sweatpants, but with intent.",
    description:
      "You dress for the life you actually live, which is horizontal. Your hoodie has a name, your sweatpants have a tenure, and the phrase 'smart casual' makes you laugh so hard you have to sit down, which you were already doing. People mistake this for giving up. It is the opposite: you have won, and the throne is made of pillows. You still own one pair of jeans. They are for emergencies and funerals.",
    look: "An oversized hoodie, joggers soft enough to be legally classified as bedding, one slipper and one sneaker because the other slipper is somewhere.",
    flaw: "Zips. You simply do not believe in them.",
    accessory: "A TV remote, wielded like a royal sceptre.",
    coverLines: ["Hoodie strings: the only jewellery you need", "Exclusive: the sofa speaks out", "Is a blanket an outfit? Legally, yes"],
    share: "I took the fashionista quiz and I'm The Comfort Commander. Hoodie and sweatpants, but with INTENT. Find out yours:",
    bg: "#fff3cf",
    svg: `
      <rect width="300" height="330" fill="#fff3cf"/>
      <g stroke="#111" stroke-width="4" stroke-linejoin="round">
        <rect x="30" y="250" width="240" height="60" rx="20" fill="#c9a7ff"/>
        <rect x="45" y="215" width="100" height="48" rx="18" fill="#ff2e88"/>
        <rect x="155" y="215" width="100" height="48" rx="18" fill="#f2c230"/>
        <rect x="70" y="180" width="160" height="44" rx="18" fill="#fbf4e6"/>
        <path d="M60 180 l-20 -120 h30 l30 120Z" fill="#c9a7ff"/>
        <path d="M240 180 l20 -120 h-30 l-30 120Z" fill="#c9a7ff"/>
      </g>
      <g stroke="#111" stroke-width="4" stroke-linejoin="round">
        <path d="M80 250 q-5-100 70-110 q75 10 70 110Z" fill="#8fd0bd"/>
        <path d="M150 140 q-45 0 -50 30 q50 -12 100 0 q-5-30 -50-30Z" fill="#6fb8a3"/>
        <path d="M140 160 v40 M160 160 v40" fill="none" stroke-linecap="round"/>
        <path d="M110 215 h80 v30 h-80Z" fill="#6fb8a3"/>
        <path d="M90 190 q-40 20 -25 60 M210 190 q40 20 25 60" fill="none" stroke-linecap="round"/>
        <circle cx="68" cy="252" r="9" fill="#fbf4e6"/>
        <circle cx="232" cy="252" r="9" fill="#fbf4e6"/>
        <path d="M110 250 q-10 40 -30 50 M190 250 q10 40 30 50" fill="none" stroke-linecap="round" stroke-width="12"/>
        <path d="M60 300 q-6 14 10 16 h16 q6-6 0-14Z" fill="#ff2e88"/>
        <rect x="214" y="294" width="40" height="20" rx="8" fill="#fff"/>
        <path d="M214 304 h40" stroke="#ff2e88"/>
      </g>
      <rect x="226" y="200" width="16" height="60" rx="5" fill="#111" transform="rotate(20 234 230)"/>
      <g fill="#ff2e88" transform="rotate(20 234 230)"><circle cx="234" cy="212" r="3"/><circle cx="234" cy="224" r="3"/><circle cx="234" cy="236" r="3"/></g>
      ${head(150, 112, 36)}
      <path d="M102 116 q-12-56 48-56 q60 0 48 56 q-8-14 -14-22 q-34 -14 -68 0 q-6 8 -14 22Z" fill="#8fd0bd" stroke="#111" stroke-width="4"/>
      ${eyes(150, 112, "sleepy")}
      <path d="M140 130 q10 4 20 0" stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <text x="200" y="80" font-family="Playfair Display, serif" font-weight="900" font-size="22" fill="#111">z</text>
      <text x="216" y="60" font-family="Playfair Display, serif" font-weight="900" font-size="28" fill="#111">z</text>`,
  },
  {
    id: "trend",
    name: "The Trend Chaser",
    tagline: "Bought it before it existed. Already bored.",
    description:
      "You were wearing the thing before the thing had a name, and by the time everyone else caught up you were visibly embarrassed for them. Your phone has fourteen shopping apps and all of them know your birthday. 'Micro-trend' is not a warning to you, it is a starting pistol. You have returned items that were still in fashion because they were in fashion. Exhausting? Yes. Ahead? Always.",
    look: "Whatever will be on everyone next month, worn today, with the tags still on so you can return it the moment it catches on.",
    flaw: "You have never worn anything twice and your bank app has started sending motivational quotes.",
    accessory: "A phone with 14 shopping apps and 3% battery.",
    coverLines: ["You wore it first. You also returned it first", "Exclusive: the trend that lasted 40 minutes", "Your parcel is 2 stops away. Your rent is not"],
    share: "I took the fashionista quiz and I'm The Trend Chaser. I bought it before it existed and I'm already bored. Find out yours:",
    bg: "#dff5ff",
    svg: `
      <rect width="300" height="330" fill="#dff5ff"/>
      <path d="M20 200 q40 -40 110 -20 M10 240 q50 -40 120 -10 M30 280 q40 -30 100 -20" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
      <g stroke="#111" stroke-width="4" stroke-linejoin="round">
        <path d="M30 230 h36 l-4 44 h-28Z" fill="#c9a7ff"/>
        <path d="M60 210 h40 l-4 50 h-32Z" fill="#f2c230"/>
        <path d="M96 196 h40 l-4 56 h-32Z" fill="#ff2e88"/>
        <path d="M40 230 q8 -14 16 0 M72 210 q8 -14 16 0 M108 196 q8 -14 16 0" fill="none"/>
      </g>
      <g stroke="#111" stroke-width="4" stroke-linejoin="round">
        <path d="M150 150 l40 0 l20 80 l-40 10 l-20 -70Z" fill="#ff2e88"/>
        <path d="M150 150 l-10 70 l40 20 l-10 -90Z" fill="#ff2e88"/>
        <path d="M145 160 q-20 10 -30 50 l15 10 M185 150 q40 0 55 30 l-10 14" fill="none" stroke-linecap="round"/>
        <circle cx="128" cy="222" r="9" fill="#fbf4e6"/>
        <path d="M180 235 l-50 45 l-10 -8 M200 230 l30 60 l12 -6" fill="none" stroke-linecap="round" stroke-width="12"/>
        <path d="M118 272 l-14 10 q-6 14 8 14 h14 l6 -14Z" fill="#111"/>
        <path d="M242 284 l12 6 q12 4 10 14 h-20 l-10 -10Z" fill="#111"/>
      </g>
      <g transform="rotate(-20 236 184)">
        <rect x="224" y="170" width="24" height="42" rx="5" fill="#111"/>
        <rect x="228" y="176" width="16" height="28" fill="#fff"/>
        <path d="M230 180 h12 M230 186 h12 M230 192 h12 M230 198 h12" stroke="#ff2e88" stroke-width="2"/>
      </g>
      ${head(180, 110, 36)}
      <path d="M216 108 q-30 -6 -36 -32 q-10 -8 -60 -16 q50 -2 60 10 q-6 -20 -30 -30 q40 4 50 26 q26 4 16 42Z" fill="#111"/>
      <path d="M150 90 q-40 2 -70 -4 M140 76 q-30 -4 -60 -16" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${eyes(180, 110, "wide")}
      <path d="M170 128 q10 8 20 0" stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M198 124 l10 12" stroke="#5bb7ff" stroke-width="4" stroke-linecap="round"/>`,
  },
  {
    id: "icon",
    name: "The Accidental Icon",
    tagline: "Dresses randomly. Photographed as 'effortless.'",
    description:
      "You put on whatever was nearest the bed and somebody called it a moment. Your socks don't match, your bathrobe has been mistaken for a designer coat, and a magazine once described your bedhead as 'architectural.' You do not understand fashion and fashion has decided it does not need you to. You just wanted to get the post. There were photographers.",
    look: "A bathrobe, one striped sock, one spotted sock, sunglasses you found in a drawer, and the specific glow of someone who has not tried.",
    flaw: "You cannot repeat a single outfit because you have no idea how any of them happened.",
    accessory: "A tiny dog in a matching bathrobe. Neither of you asked for this.",
    coverLines: ["'I just woke up,' says the face of the season", "Bathrobe chic: the trend you started by accident", "One sock, two socks, zero plans"],
    share: "I took the fashionista quiz and I'm The Accidental Icon. I dress randomly and get photographed as 'effortless'. Find out yours:",
    bg: "#fde8d7",
    svg: `
      <rect width="300" height="330" fill="#fde8d7"/>
      <rect x="95" y="20" width="110" height="290" fill="#c9a7ff" stroke="#111" stroke-width="4"/>
      <rect x="110" y="34" width="80" height="276" fill="#fbf4e6" stroke="#111" stroke-width="3"/>
      <g fill="#fff" stroke="#f2c230" stroke-width="3">
        <path d="M40 60 l6 14 l14 6 l-14 6 l-6 14 l-6 -14 l-14 -6 l14 -6Z"/>
        <path d="M250 50 l5 12 l12 5 l-12 5 l-5 12 l-5 -12 l-12 -5 l12 -5Z"/>
        <path d="M262 150 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4Z"/>
        <path d="M34 180 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4Z"/>
      </g>
      <g stroke="#111" stroke-width="4"><rect x="14" y="110" width="34" height="26" rx="5" fill="#111"/><circle cx="31" cy="123" r="8" fill="#fbf4e6"/><rect x="252" y="100" width="34" height="26" rx="5" fill="#111"/><circle cx="269" cy="113" r="8" fill="#fbf4e6"/></g>
      <g stroke="#111" stroke-width="4" stroke-linejoin="round">
        <path d="M110 300 q-6 -120 40 -150 q46 30 40 150Z" fill="#ff2e88"/>
        <path d="M150 150 l-22 150 M150 150 l22 150" fill="none"/>
        <path d="M120 160 v80 M180 160 v80" fill="none" stroke="#fbf4e6"/>
        <path d="M118 150 q-30 24 -24 70 l16 2 M182 150 q30 24 24 70 l-16 2" fill="none" stroke-linecap="round"/>
        <circle cx="102" cy="226" r="9" fill="#fbf4e6"/><circle cx="198" cy="226" r="9" fill="#fbf4e6"/>
        <path d="M112 230 h76" fill="none" stroke-dasharray="6 5"/>
        <path d="M135 300 v12 M165 300 v12" fill="none" stroke-width="12" stroke-linecap="round"/>
        <rect x="124" y="296" width="22" height="22" rx="4" fill="#f2c230"/><path d="M124 303 h22 M124 310 h22" stroke="#111" stroke-width="2"/>
        <rect x="154" y="296" width="22" height="22" rx="4" fill="#c9a7ff"/><circle cx="160" cy="303" r="2" fill="#111"/><circle cx="170" cy="311" r="2" fill="#111"/><circle cx="169" cy="301" r="2" fill="#111"/>
      </g>
      ${head(150, 104, 38)}
      <path d="M112 100 q-6 -26 10 -40 l8 14 l10 -22 l10 20 l12 -18 l6 20 l14 -10 q12 14 6 36 q-12 -16 -38 -14 q-26 -2 -38 14Z" fill="#111"/>
      <g stroke="#111" stroke-width="3.5"><path d="M118 100 h64"/><ellipse cx="136" cy="104" rx="14" ry="10" fill="#111"/><ellipse cx="164" cy="104" rx="14" ry="10" fill="#111"/></g>
      <path d="M138 126 q12 6 24 -2" stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <g stroke="#111" stroke-width="3.5" stroke-linejoin="round">
        <ellipse cx="232" cy="290" rx="30" ry="22" fill="#ff2e88"/>
        <circle cx="258" cy="272" r="16" fill="#fbf4e6"/>
        <path d="M246 262 l-6 -14 l14 8Z M270 262 l6 -14 l-14 8Z" fill="#fbf4e6"/>
        <circle cx="253" cy="270" r="2.5" fill="#111"/><circle cx="264" cy="270" r="2.5" fill="#111"/><circle cx="259" cy="278" r="3" fill="#111"/>
        <path d="M204 290 q-16 -10 -10 -24" fill="none" stroke-linecap="round"/>
        <path d="M232 268 l0 44" fill="none" stroke="#fbf4e6" stroke-dasharray="4 4"/>
      </g>`,
  },
];

const QUESTIONS = [
  {
    text: "It's 7:58 AM. You have two minutes to get dressed. You:",
    answers: [
      { text: "Yesterday's outfit, confidently. It knows the route.", scores: { comfort: 2, icon: 1 } },
      { text: "Grab a black thing and a black thing. Done in nine seconds.", scores: { monk: 2 } },
      { text: "Cancel the day. This is a styling emergency.", scores: { chaos: 2, trend: 1 } },
      { text: "Whatever is nearest the bed, including the bathrobe.", scores: { icon: 2 } },
    ],
  },
  {
    text: "Your relationship with ironing is best described as:",
    answers: [
      { text: "Spiritual. Steam is a form of meditation.", scores: { monk: 2 } },
      { text: "Wrinkles are texture. Texture is a look.", scores: { chaos: 2, icon: 1 } },
      { text: "I own an iron. It is a doorstop.", scores: { comfort: 2 } },
      { text: "Everything I own is older than irons.", scores: { vampire: 2 } },
    ],
  },
  {
    text: "A friend says your shoes are 'brave.' You hear:",
    answers: [
      { text: "A compliment. Finally.", scores: { chaos: 2 } },
      { text: "Jealousy. They cost 3 euros and have history.", scores: { vampire: 2 } },
      { text: "Confusion. They're slippers. I'm outside.", scores: { comfort: 2, icon: 1 } },
      { text: "Nothing, I've already moved on to next month's shoes.", scores: { trend: 2 } },
    ],
  },
  {
    text: "How many black items are in your wardrobe?",
    answers: [
      { text: "Three. Accidentally.", scores: { chaos: 1, icon: 2 } },
      { text: "Thirty. The darkest thirty.", scores: { vampire: 2, monk: 1 } },
      { text: "All of them. It's a system.", scores: { monk: 3 } },
      { text: "Black is a feeling, not a count.", scores: { trend: 1, chaos: 1, icon: 1 } },
    ],
  },
  {
    text: "The sale sign says 70% off. Your heartbeat:",
    answers: [
      { text: "Flatlines. 70% off is my full price.", scores: { vampire: 3 } },
      { text: "Spikes. I've already bought it in four colours.", scores: { trend: 2, chaos: 1 } },
      { text: "Unchanged. Does it come in black?", scores: { monk: 2 } },
      { text: "Steady. I'm on the sofa and the sale is outside.", scores: { comfort: 2 } },
    ],
  },
  {
    text: "Pick a wardrobe emergency you have actually survived:",
    answers: [
      { text: "A hoodie string got lost inside the hood. Dark times.", scores: { comfort: 2 } },
      { text: "Wore seven prints and a stranger offered me a leaflet about calm.", scores: { chaos: 3 } },
      { text: "Photographed in a dressing gown. It trended.", scores: { icon: 3 } },
      { text: "Bought the trend. Trend died on the way home.", scores: { trend: 2 } },
    ],
  },
  {
    text: "Your most-worn item is:",
    answers: [
      { text: "A turtleneck. One of the forty.", scores: { monk: 2 } },
      { text: "A cape from 1979 with a mysterious stain I call 'provenance.'", scores: { vampire: 2 } },
      { text: "Sweatpants with a name and a pension.", scores: { comfort: 2 } },
      { text: "Nothing. I don't repeat. Repeating is for calendars.", scores: { trend: 2 } },
    ],
  },
  {
    text: "Someone asks where you got your jacket. You say:",
    answers: [
      { text: "'Two euros. Charity shop. Smell it.'", scores: { vampire: 3 } },
      { text: "'Honestly? No idea. Is it mine?'", scores: { icon: 2 } },
      { text: "'It's three jackets. Keep up.'", scores: { chaos: 2 } },
      { text: "'A pop-up that closed 40 minutes later. You wouldn't know it.'", scores: { trend: 2 } },
    ],
  },
  {
    text: "Your laundry pile is:",
    answers: [
      { text: "Non-existent. Everything is black, nothing shows.", scores: { monk: 2 } },
      { text: "A chair. The chair has a name.", scores: { comfort: 2, icon: 1 } },
      { text: "A rainbow that is probably on fire.", scores: { chaos: 2 } },
      { text: "Mostly tags and return labels.", scores: { trend: 2 } },
    ],
  },
  {
    text: "Choose a fashion motto:",
    answers: [
      { text: "'More is more, and then a bit more.'", scores: { chaos: 2 } },
      { text: "'Less, but all of it black.'", scores: { monk: 2 } },
      { text: "'If it's comfortable, it's couture.'", scores: { comfort: 2 } },
      { text: "'I did not try. Please stop photographing me.'", scores: { icon: 2, vampire: 1 } },
    ],
  },
];

/* ---------------- game state ---------------- */
const state = { index: 0, scores: {}, picking: false };
const $ = (id) => document.getElementById(id);

function resetScores() {
  state.scores = Object.fromEntries(CHARACTERS.map((c) => [c.id, 0]));
}

function buildRail() {
  const rail = $("rail-hangers");
  rail.innerHTML = "";
  QUESTIONS.forEach(() => {
    const h = document.createElement("span");
    h.className = "hanger";
    h.innerHTML = '<svg viewBox="0 0 64 48" aria-hidden="true"><path d="M32 6a6 6 0 1 1 6 6c-3 0-6 2-6 6v3" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M32 21 4 38c-1 2 0 5 3 5h50c3 0 4-3 3-5Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>';
    rail.appendChild(h);
  });
}

function updateRail() {
  [...$("rail-hangers").children].forEach((h, i) => h.classList.toggle("on", i < state.index));
  $("rail-label").textContent = `Question ${Math.min(state.index + 1, QUESTIONS.length)} of ${QUESTIONS.length}`;
}

function renderQuestion() {
  const q = QUESTIONS[state.index];
  const card = $("question-card");
  card.classList.remove("leaving");
  card.style.animation = "none";
  void card.offsetWidth; // restart animation
  card.style.animation = "";
  $("q-number").textContent = `Question ${state.index + 1}`;
  $("q-text").textContent = q.text;
  const wrap = $("answers");
  wrap.innerHTML = "";
  q.answers.forEach((a, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "swatch";
    b.dataset.letter = "ABCD"[i] || String(i + 1);
    b.textContent = a.text;
    b.addEventListener("click", () => pick(a, b));
    wrap.appendChild(b);
  });
  updateRail();
  wrap.querySelector("button")?.focus({ preventScroll: true });
}

function pick(answer, btn) {
  if (state.picking) return;
  state.picking = true;
  btn.classList.add("picked");
  Object.entries(answer.scores).forEach(([id, pts]) => (state.scores[id] += pts));
  state.index += 1;
  updateRail();
  const card = $("question-card");
  card.classList.add("leaving");
  setTimeout(() => {
    state.picking = false;
    if (state.index < QUESTIONS.length) renderQuestion();
    else showResult();
  }, 320);
}

function ranked() {
  return [...CHARACTERS].sort((a, b) => state.scores[b.id] - state.scores[a.id]);
}

function showResult() {
  const [winner, second] = ranked();
  const total = Object.values(state.scores).reduce((a, b) => a + b, 0) || 1;
  const pct = Math.round((state.scores[second.id] / total) * 100);

  $("app").hidden = true;
  const res = $("result");
  res.hidden = false;
  res.style.setProperty("--cover-bg", winner.bg);

  $("cover-issue").textContent = `Issue No. ${Math.floor(Math.random() * 900) + 100}`;
  $("cover-art").innerHTML = `<svg viewBox="0 0 300 330" role="img" aria-label="${winner.name}">${winner.svg}</svg>`;
  $("cover-lines").innerHTML = winner.coverLines.map((l) => `<li>${l}</li>`).join("");
  $("cover-headline").textContent = winner.name;
  $("cover-tagline").textContent = winner.tagline;
  $("barcode").innerHTML = Array.from({ length: 22 }, (_, i) =>
    `<svg viewBox="0 0 64 48" style="transform:scaleX(${(i % 3) * 0.3 + 0.5})"><path d="M32 6a6 6 0 1 1 6 6c-3 0-6 2-6 6v3" stroke-width="5" stroke-linecap="round"/><path d="M32 21 4 38c-1 2 0 5 3 5h50c3 0 4-3 3-5Z" stroke-width="5" stroke-linejoin="round"/></svg>`
  ).join("");

  $("result-desc").textContent = winner.description;
  $("fact-look").textContent = winner.look;
  $("fact-flaw").textContent = winner.flaw;
  $("fact-accessory").textContent = winner.accessory;
  $("runner-up").innerHTML = `<svg viewBox="0 0 300 330" aria-hidden="true">${second.svg}</svg>
    <p><strong>You are also ${pct}% ${second.name.replace("The ", "")}.</strong> ${runnerUpQuip(second.id)}</p>`;

  $("share-btn").onclick = () => share(winner);
  $("toast").textContent = "";
  res.scrollIntoView({ behavior: "smooth", block: "start" });
  sprinkleSequins();
}

function runnerUpQuip(id) {
  return {
    chaos: "Please step away from the leopard print.",
    monk: "Please consider one (1) colour.",
    vampire: "Please moisturise.",
    comfort: "Please stand up at some point today.",
    trend: "Please check your bank balance.",
    icon: "Please check which socks you are wearing.",
  }[id];
}

function sprinkleSequins() {
  const box = $("sequins");
  box.innerHTML = "";
  const colours = ["#ff2e88", "#f2c230", "#c9a7ff", "#111", "#fff"];
  for (let i = 0; i < 90; i++) {
    const s = document.createElement("span");
    s.className = "sequin";
    s.style.left = Math.random() * 100 + "vw";
    s.style.background = colours[i % colours.length];
    s.style.animationDuration = 2.5 + Math.random() * 2.5 + "s";
    s.style.animationDelay = 1 + Math.random() * 1.5 + "s";
    s.style.width = s.style.height = 6 + Math.random() * 8 + "px";
    box.appendChild(s);
  }
  setTimeout(() => (box.innerHTML = ""), 7000);
}

async function share(winner) {
  const text = `${winner.share} ${SITE_URL}`;
  const toast = $("toast");
  try {
    if (navigator.share) {
      await navigator.share({ title: "What Kind of Fashionista Are You?", text: winner.share, url: SITE_URL });
      toast.textContent = "Shared. The world is slightly more stylish now.";
      return;
    }
    await navigator.clipboard.writeText(text);
    toast.textContent = "Copied to clipboard. Go forth and brag.";
  } catch {
    toast.textContent = text;
  }
}

function start() {
  state.index = 0;
  resetScores();
  $("hero").hidden = true;
  $("result").hidden = true;
  $("app").hidden = false;
  buildRail();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("start-btn").addEventListener("click", start);
$("retake-btn").addEventListener("click", start);

/* expose for tinkering in the console */
window.Fashionista = { CHARACTERS, QUESTIONS, state };
