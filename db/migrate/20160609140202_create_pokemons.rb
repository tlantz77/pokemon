class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :hp
      t.integer :battle_hp
      t.string :image
      t.string :attack
    end
  end
end
