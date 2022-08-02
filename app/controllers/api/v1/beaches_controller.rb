class Api::V1::BeachesController < ApplicationController
  def index
    render json: Beach.all
  end
end