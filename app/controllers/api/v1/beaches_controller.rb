class Api::V1::BeachesController < ApplicationController
  def index
    render json: Beach.order(id: "desc")
  end

  def show
    render json: Beach.find(params[:id])
  end

end