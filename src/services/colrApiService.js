const BASE_URL = import.meta.env.VITE_SERVER_PORT;

async function getRandomColorScheme() {
  try {
    const scheme = await fetch(`${BASE_URL}/getScheme`);
    return scheme.json();
  } catch (error) {
    console.log(error);
  }
}

export { getRandomColorScheme };
