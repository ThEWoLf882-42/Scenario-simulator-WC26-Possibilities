# WC26 Possibilities

A standalone FIFA World Cup 2026 scenario simulator focused on Morocco’s path, third-place qualification, and the full 48-team tournament picture.

The app runs in the browser with plain HTML, CSS, and JavaScript. No build step is required.

## Open it

### Fastest

Double-click `index.html`.

### Recommended

On Windows, double-click:

```text
start-server.bat
```

Then open:

```text
http://localhost:8080
```

On macOS/Linux:

```sh
./start-server.sh
```

## What is included

- All 12 groups and 72 group-stage matches.
- Real group-stage scores loaded from the data file.
- Editable match scores with instant standings.
- Best third-place table and cutline.
- FIFA Annex C third-place allocation for the 48-team Round of 32.
- Full knockout bracket with Round of 32 through final.
- Third-place match.
- Morocco focus card and Morocco route preview.
- Bracket-based ranking of all 48 teams.
- English/Arabic toggle.
- Dark/light mode.
- Save, export, and import scenarios.

## File structure

```text
index.html                  Page structure
styles.css                  WC26-style theme and layout
app.js                      App logic, calculations, rendering
official-results.js         Group fixtures, group scores, knockout results
2026_FIFA_World_Cup_emblem.svg
start-server.bat
start-server.sh
```

The important split is:

- Edit tournament data in `official-results.js`.
- Edit app behavior in `app.js`.
- Edit styling in `styles.css`.

## Editing results

All match data now lives in:

```text
official-results.js
```

### Group matches

Group fixtures and scores are stored together:

```js
gm('C', 'MAR', 'HTI', 4, 2, '2026-06-24T22:00:00Z');
```

Format:

```js
gm(group, homeTeam, awayTeam, homeScore, awayScore, kickoff, played);
```

`played` is optional and defaults to `true`.

### Knockout matches

Knockout results are stored in the `knockout` object:

```js
75: {
	homeTeam: 'NED',
	awayTeam: 'MAR',
	home: 1,
	away: 1,
	tiebreakWinner: 'MAR',
},
```

For future matches, keep the match entry but leave scores as `null`:

```js
80: {
	homeTeam: 'ENG',
	awayTeam: 'COD',
	home: null,
	away: null,
	tiebreakWinner: null,
},
```

When the match is played, replace `null` with the real score. If the match is tied and decided by penalties, set `tiebreakWinner` to the advancing team code.

Example:

```js
80: {
	homeTeam: 'ENG',
	awayTeam: 'COD',
	home: 1,
	away: 1,
	tiebreakWinner: 'ENG',
},
```

## Important browser note

The app saves your current scenario in browser storage. If you update `official-results.js` but the page still shows old scores, click:

```text
Reset current results
```

That reloads the latest base data from `official-results.js`.

## Ranking notes

Group ranking uses the practical score-based rules available in the simulator:

1. Points
2. Head-to-head where applicable
3. Goal difference
4. Goals scored

Exact FIFA ties can still require official team-conduct score and FIFA ranking criteria.

The all-teams ranking follows tournament progress:

1. Champion
2. Runner-up
3. Third place
4. Fourth place
5. Then teams by elimination round

Stats in the ranking include completed group and knockout matches. Knockout matches decided by penalties count as draws for statistics, while the selected tiebreak winner still advances in the bracket.

## Data snapshot

The bundled data file is marked:

```js
updatedThrough: '2026-07-01';
```

Future knockout matches are included as placeholders with `null` scores so they are easy to edit later without showing as played.

## Theme

The interface uses the included World Cup 26 emblem, a black editorial base, tournament color accents, poster-style cards, and a two-sided knockout bracket. The layout supports desktop, mobile, English, Arabic, dark mode, and light mode.
