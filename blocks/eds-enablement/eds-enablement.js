import { fetchPlaceholders } from '../../scripts/placeholders.js';

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders(window.hlx.codeBasePath);

  // If the source Key is "my-key", the helper normally exposes it as "myKey".
  const text = placeholders.myKey || 'Fallback text';

  const label = block.querySelector('.label');
  if (label) label.textContent = text;
}
