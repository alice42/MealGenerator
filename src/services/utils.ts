
export const api = 'http://www.recipepuppy.com/api/'

export const basicFetch = async (method: string, searchQuery: { i: string; q: string; p: string }) => {
  try {
    const response = await fetch(`/api/?` + new URLSearchParams(searchQuery),
    {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    let responseJson = await response.json();
    return responseJson.results
  } catch (error) {
    return error
  }
}
