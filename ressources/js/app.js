console.log('Website Started');

const P = new Pokedex.Pokedex();

(async () => {
  const golduck = await P.getPokemonByName("golduck")
  console.log(golduck)
})()