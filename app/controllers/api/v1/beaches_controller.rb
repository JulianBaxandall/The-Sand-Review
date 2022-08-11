class Api::V1::BeachesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Beach.order(id: "desc")
  end

  def show
    render json: Beach.find(params[:id])
  end

  def destroy
    # binding.pry
    @beach = Beach.find(params[:id])
    if @beach.destroy
      render json: { message: "Success" }, status: 204
    else
      render json: { message: "Unable to remove this post" }, status: 400
    end
  end

end