export default async function decorate(block) {
  const response = await fetch('/placeholders.json');
  const json = await response.json();

  const placeholders = Object.fromEntries(
    json.data.map((item) => [item.Key, item.Text]),
  );

  block.innerHTML = block.innerHTML.replace(
    /\{\{([^}]+)\}\}/g,
    (match, key) => placeholders[key.trim()] || match,
  );
}
