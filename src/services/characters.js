export async function getCharacters() {
  const resp = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters`
  );
  const data = await resp.json();

  return data.data;
}
