import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders();

  block.innerHTML = block.innerHTML.replace(
    /\{\{([^}]+)\}\}/g,
    (match, key) => placeholders[key.trim()] || match,
  );
}
