# Swimming with the Jaguars - Band Website

The single-page website for Swimming with the Jaguars, Northern New Jersey's premiere Dad rock band from Montclair, New Jersey.

The page is designed as a printed tavern gig poster: brick red stock, brand yellow (`#e6b400`) ink, wood-type headlines that fill the width of the sheet, and a second ink pass printed slightly off register.

## Sections

- Hero: "Live! Loud! Local!", the stacked logo, and "Dad Rock, reimagined for the 21st century"
- Holiday greeting and the single "Christmas Dead Mouse", over an animated winter scene
- New singles: "World Events", "One Time", and "Rock and Roll Resurrection"
- The album "ingrid", with the full tracklist
- Meet the Band: halftone portraits of WeeZ, Heartbreaker, Primetime Petey Pigskin, and Sarge
- About the Band (the bio)
- Booking through Instagram, Facebook, and YouTube

Every single has a play row that links to it on Spotify, Apple Music, YouTube Music, and Amazon Music. The album also links to Bandcamp.

## Files

- `index.html`: the page markup.
- `css/style.css`: all of the styles.
- `js/main.js`: headline fitting, the scroll-in press animation, and the holiday snow.

There is no build step; the files are served as they are.
- `images/`: covers and halftone portraits used by the page, plus the original source photos and logos.

Fonts load from Google Fonts (Big Shoulders Display, Ultra, Rye, Bitter). Platform icons are inline SVG from Simple Icons.

## Local development

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

This project is created for Swimming with the Jaguars. All rights reserved.
