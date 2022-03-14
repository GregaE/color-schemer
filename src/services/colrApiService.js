const BASE_URL = "https://www.colr.org";

async function getRandomColorScheme() {
  try {
    const scheme = await fetch(`${BASE_URL}/scheme/random/1`);
    return scheme.json();
  } catch (error) {
    console.log(error);
  }
}

export { getRandomColorScheme };
