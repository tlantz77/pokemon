  require "http"
  require "json"
  require "pp"

  def get_pokemon(name)
    JSON.parse(HTTP.get("http://pokeapi.co/api/v2/pokemon/#{name}/").to_s)

  end


# pp get_pokemon("bulbasaur")["forms"][0]["name"]

# pp get_pokemon("bulbasaur")["stats"].last["base_stat"]

