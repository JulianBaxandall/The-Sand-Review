class Api::V1::BeachesController < ApplicationController
  def index
    render json: Beach.all
  end

  def show
    render json: Beach.find(params[:id])
  end

end