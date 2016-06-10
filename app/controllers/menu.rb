get '/pokemon' do
  erb :'/main/menu'
end

post '/pokemon' do
  poke1 = get_pokemon(params[:poke1])
  poke2 = get_pokemon(params[:poke2])

  if request.xhr?
    content_type :json
    { poke1_name:   poke1["forms"][0]["name"],
      poke1_hp:     poke1["stats"].last["base_stat"],
      poke1_move:   poke1["moves"][1]["move"]["name"],

      poke2_name:   poke2["forms"][0]["name"],
      poke2_hp:     poke2["stats"].last["base_stat"],
      poke2_move:   poke2["moves"][1]["move"]["name"]
    }
  else
    erb :'/main/menu'
  end

end
