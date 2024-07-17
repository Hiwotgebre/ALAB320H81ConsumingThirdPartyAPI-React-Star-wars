export async function getAllStarships(pageUrl = 'https://swapi.dev/api/starships/9/') {
    const response = await fetch(pageUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch starships');
    }
    return response.json();
  }
  




  