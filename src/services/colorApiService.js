const BASE_URL = import.meta.env.VITE_SERVER_PORT;

async function getRandomColorScheme() {
  try {
    const scheme = await fetch(`${BASE_URL}/schemes/random`);
    return scheme.json();
  } catch (error) {
    return error;
  }
}

async function getColorSchemes(colorsArr, logic) {
  try {
    const colors = colorsArr.join(",");
    const scheme = await fetch(`${BASE_URL}/schemes/${colors}/${logic}`);
    return scheme.json();
  } catch (error) {
    console.log(error);
  }
}

async function createScheme(schemeName, colorArr, user_id) {
  try {
    const newScheme = await fetch(`${BASE_URL}/user-schemes/${user_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: schemeName,
        colors: colorArr,
      }),
    });
    return newScheme.json();
  } catch (error) {
    console.log(error);
  }
}

async function getSavedSchemes(user_id) {
  try {
    const savedSchemes = await fetch(`${BASE_URL}/user-schemes/${user_id}`);
    return savedSchemes.json();
  } catch (error) {
    console.log(error);
  }
}

async function deleteScheme(schemeId, user_id) {
  try {
    const deletedScheme = await fetch(`${BASE_URL}/user-schemes/${user_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: schemeId,
      }),
    });
    return deletedScheme.json();
  } catch (error) {
    console.log(error);
  }
}

async function renameScheme(schemeId, user_id, newName) {
  try {
    const renamedScheme = await fetch(`${BASE_URL}/user-schemes/${user_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: schemeId,
        newName: newName,
      }),
    });
    return renamedScheme.json();
  } catch (error) {
    console.log(error);
  }
}

export {
  getRandomColorScheme,
  getColorSchemes,
  createScheme,
  getSavedSchemes,
  deleteScheme,
  renameScheme,
};
