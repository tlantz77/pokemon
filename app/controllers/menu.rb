get '/pokemon' do
  erb :'/main/menu'
end

post '/pokemon' do
  poke = get_pokemon(params[:poke])

  if request.xhr?
    content_type :json
    { poke_name:   poke["forms"][0]["name"].capitalize,
      poke_hp:     poke["stats"].last["base_stat"],
      poke_move:   poke["moves"][1]["move"]["name"].capitalize
    }.to_json
  else
    erb :'/main/menu'
  end

end
