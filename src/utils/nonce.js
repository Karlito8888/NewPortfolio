// Génère un nonce aléatoire pour la CSP
export function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
}

// Stocke le nonce généré pour la session
export const nonce = generateNonce();

// Ajoute le nonce aux scripts inline
export function addNonceToScript(script) {
  return `<script nonce="${nonce}">${script}</script>`;
}
