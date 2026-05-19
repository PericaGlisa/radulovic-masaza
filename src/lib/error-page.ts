export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="sr">
  <head>
    <meta charset="utf-8" />
    <title>Stranica se nije učitala | Golden Aura Wellness</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0B1F19; color: #FDFCF8; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border-radius: 1.5rem; border: 1px solid rgba(212, 175, 55, 0.2); }
      h1 { font-size: 1.5rem; margin: 0 0 0.75rem; color: #D4AF37; }
      p { color: rgba(253, 252, 248, 0.7); margin: 0 0 2rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.75rem 1.5rem; border-radius: 9999px; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem; }
      .primary { background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #996515 100%); color: #0B1F19; font-weight: 600; }
      .secondary { background: transparent; color: #FDFCF8; border-color: rgba(212, 175, 55, 0.4); }
      .primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -5px rgba(212, 175, 55, 0.4); }
      .secondary:hover { background: rgba(212, 175, 55, 0.1); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Stranica se nije učitala</h1>
      <p>Došlo je do neočekivane greške. Možete pokušati ponovo ili se vratiti na početnu stranicu.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Pokušaj ponovo</button>
        <a class="secondary" href="/">Početna</a>
      </div>
    </div>
  </body>
</html>`;
}
