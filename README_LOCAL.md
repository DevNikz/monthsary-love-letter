# A Little Place That’s Only Ours

This is the standalone project for the monthsary love-letter website. It is a React/Vite site and does not require Manus hosting to run.

## Fastest local preview

Install Node.js 18 or newer, then open a terminal in this project folder and run:

```bash
pnpm install
pnpm dev --host
```

Open the local URL shown in the terminal, usually `http://localhost:5173/`. This local address is available only on your computer.

## Build a production folder

To create a production build, run:

```bash
pnpm install
pnpm build
```

The compiled frontend will be generated in `dist/public/`. You can serve that folder with any static web server. For a quick local test, run:

```bash
pnpm preview --host
```

## Letting someone else view it

If your girlfriend is on the same Wi-Fi network, start the development server with `pnpm dev --host`, find your computer’s local IP address, and send her the network URL shown by Vite, such as `http://192.168.1.25:5173/`. Both devices must remain on the same network, and your computer must stay on.

For viewing over the internet without publishing through Manus, upload the generated `dist/public/` folder to a static hosting provider of your choice, or use a temporary secure tunnel from your own computer. The website itself contains no server-side code; the Spotify player is loaded by Spotify in the browser.

## Personalization

The main page is in `client/src/pages/Home.tsx`. You can replace the sign-off, monthsary date, memory text, coordinates, and image references there. The Spotify track is configured through the `spotifyEmbedUrl` constant near the top of that file.

## Important note about the Spotify player

Spotify may require the viewer to press Play inside the embedded player. Browsers generally block websites from starting audio automatically without a user interaction, so the page cannot guarantee silent autoplay in the background.
