export async function getCharacters() {
  const resp = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=100`
  );
  const data = await resp.json();
  console.log(data);

  return data;
}

export async function getCharacterById(characterId) {
  const resp = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`
  );
  const data = await resp.json();
  return data;
}

export async function getAffiliation(affiliation) {
  const resp = await fetch(
    `/api/v1/https://last-airbender-api.herokuapp.comaracters?affiliation=${affiliation}`
  );
  const data = await resp.json();
  return data;
}
