# What Kind of Fashionista Are You? 👠

A deeply unscientific, mildly judgemental quiz. Ten questions about your actual
relationship with clothes, six possible personalities, and a glossy magazine cover
with your result on it. No real brands, no real celebrities, no taste required.

**Play it:** https://olgaw26.github.io/fashionista/

## The six fashionistas

| Character | Tagline |
| --- | --- |
| **The Chaos Couturier** | Five patterns at once. It's a concept. |
| **The Monochrome Monk** | Forty identical black turtlenecks. Inner peace. |
| **The Vintage Vampire** | Nothing new since 1987. Smells faintly of thrift store. |
| **The Comfort Commander** | Hoodie and sweatpants, but with intent. |
| **The Trend Chaser** | Bought it before it existed. Already bored. |
| **The Accidental Icon** | Dresses randomly. Photographed as "effortless." |

Each one has a tagline, a description, a signature look, a fatal flaw, a spirit
accessory and a hand-drawn SVG portrait. You also get a runner-up ("You are also
23% Vintage Vampire. Please moisturise.").

## Run it locally

There is no build step. Clone the repo and open `index.html` in a browser.
That's it. If your browser is fussy about the share button on `file://` URLs,
serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

## Project layout

```
index.html   page structure, hero illustration, reusable SVG icons
style.css    the look: hot pink, black, cream, mustard, lilac
script.js    characters, questions, scoring, results, animations
assets/      favicon
```

## Add a question

Open `script.js` and add an object to `QUESTIONS`:

```js
{
  text: "Your bag contains:",
  answers: [
    { text: "A lint roller and a grudge.", scores: { monk: 2 } },
    { text: "Four receipts for things I've returned.", scores: { trend: 2 } },
    { text: "Something sticky. It's vintage.", scores: { vampire: 2 } },
    { text: "Snacks. Only snacks.", scores: { comfort: 2, icon: 1 } },
  ],
},
```

`scores` maps a character `id` to points. An answer can feed more than one
character. The clothes-rail progress bar grows automatically.

## Add a character

Add an object to `CHARACTERS` in `script.js` with a unique `id`, the text
fields (`name`, `tagline`, `description`, `look`, `flaw`, `accessory`,
`coverLines` (3 strings), `share`), a `bg` colour for the cover, and an `svg`
string drawn inside a `0 0 300 330` viewBox. Then give it some points in a few
answers so it can actually win.

## Screenshot

![The Chaos Couturier result cover](assets/screenshot.jpg)

To update it: play the quiz, screenshot your cover, and overwrite
`assets/screenshot.jpg`.

---

Made with questionable taste by Olga.
