const BASE_URL = import.meta.env.VITE_SERVER_PORT;

async function getRandomColorScheme() {
  try {
    const scheme = await fetch(`${BASE_URL}/getRandomScheme`);
    return scheme.json();
  } catch (error) {
    console.log(error);
  }
}

async function getColorScheme(colorsArr, logic) {
  try {
    const colors = colorsArr.join(",");
    console.log(colorsArr);
    const scheme = await fetch(`${BASE_URL}/getScheme/${colors}/${logic}`);
    return scheme.json();
  } catch (error) {
    console.log(error);
  }
}

export { getRandomColorScheme, getColorScheme };
