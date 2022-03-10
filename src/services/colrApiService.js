const BASE_URL = "http://www.colr.org";

async function getRandomColorScheme() {
  try {
    const scheme = await fetch(`${BASE_URL}/scheme/random`);
    return scheme.json();
  } catch (error) {
    console.log(error);
  }
}

export { getRandomColorScheme };
