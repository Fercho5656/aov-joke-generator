import IJoke from "../interfaces/IJoke";

const getJoke = async (): Promise<IJoke> => {
  const data = await fetch('https://v2.jokeapi.dev/joke/christmas')
  const joke = await data.json()
  return joke
}

export default getJoke