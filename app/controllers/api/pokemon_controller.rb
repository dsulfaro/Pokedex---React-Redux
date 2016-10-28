class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    sleep(1)
  end

  def create
    sleep(1)
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
      # format.json { render :json => { :error => @pokemon.errors.full_messages}, :status => 422 }
    end
  end

  def show
    sleep(1)
    @pokemon = Pokemon.find(params[:id])
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, {moves: []} )
  end
end
