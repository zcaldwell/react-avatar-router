export async function getCharacters() {
  const resp = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=100`
  );
  const data = await resp.json();

  return data;
}

export async function getCharacterById(characterId) {
  const resp = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`
  );
  const data = await resp.json();
  return data;
}

export async function getAffiliation(nation) {
  const resp = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${nation}`
  );
  console.log(data);
  const data = await resp.json();
  return data;
}
