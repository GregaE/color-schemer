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
    console.log(colorsArr, logic);
    const colors = colorsArr.join(",");
    const scheme = await fetch(`${BASE_URL}/schemes/${colors}/${logic}`);
    return scheme.json();
  } catch (error) {
    console.log(error);
  }
}

export { getRandomColorScheme, getColorSchemes };
