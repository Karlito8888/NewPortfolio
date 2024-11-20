// Génère un nonce aléatoire pour la CSP
export function generateNonce() {
  // Générer une chaîne aléatoire de 16 caractères
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';
  for (let i = 0; i < 16; i++) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce;
}

// Stocke le nonce généré pour la session
export const nonce = generateNonce();

// Ajoute le nonce aux scripts inline
export function addNonceToScript(script) {
  return `<script nonce="${nonce}">${script}</script>`;
}
