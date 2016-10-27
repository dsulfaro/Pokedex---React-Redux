class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    # render json: index
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: :show
    else
      render json: @pokemon.errors.full_messages
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
