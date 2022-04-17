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

export { getRandomColorScheme, getColorSchemes, createScheme };
