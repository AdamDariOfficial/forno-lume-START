export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <title>La pagina non si è caricata | Forno Lume</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --cream: oklch(0.965 0.018 82);
        --ink: oklch(0.22 0.02 60);
        --terracotta: oklch(0.58 0.13 42);
        --line: oklch(0.86 0.02 75);
        --card: oklch(0.985 0.012 82);
        --muted-foreground: oklch(0.44 0.03 60);
      }
      * { box-sizing: border-box; }
      body {
        display: grid;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
        place-items: center;
        background: var(--cream);
        color: var(--ink);
        font: 15px/1.6 "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
      }
      .card {
        width: 100%;
        max-width: 32rem;
        padding: clamp(2rem, 6vw, 3.5rem);
        border: 1px solid var(--line);
        border-radius: 0.5rem;
        background: var(--card);
        box-shadow: 0 20px 60px -30px oklch(0.35 0.08 40 / 0.35);
        text-align: center;
      }
      .eyebrow {
        margin: 0 0 1rem;
        color: var(--muted-foreground);
        font-size: 0.72rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }
      h1 {
        margin: 0;
        font-family: "Fraunces", "Cormorant Garamond", ui-serif, Georgia, serif;
        font-size: clamp(2rem, 7vw, 2.75rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        line-height: 1.12;
      }
      .message { margin: 1rem 0 0; color: var(--muted-foreground); }
      .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 2rem; }
      a, button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.65rem 1.25rem;
        border: 1px solid transparent;
        border-radius: 999px;
        font: inherit;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
      }
      a:focus-visible, button:focus-visible { outline: 2px solid var(--terracotta); outline-offset: 3px; }
      .primary { background: var(--ink); color: var(--card); }
      .secondary { border-color: var(--line); background: var(--card); color: var(--ink); }
    </style>
  </head>
  <body>
    <div class="card">
      <p class="eyebrow">Forno Lume</p>
      <h1>La pagina non si è caricata</h1>
      <p class="message">Si è verificato un problema. Puoi riprovare oppure tornare alla home.</p>
      <div class="actions">
        <button class="primary" type="button" onclick="location.reload()">Riprova</button>
        <a class="secondary" href="/">Torna alla home</a>
      </div>
    </div>
  </body>
</html>`;
}
