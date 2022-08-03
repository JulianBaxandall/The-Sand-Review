class Api::v1::BeachesController < ApplicationController
  def index
    render json: Beaches.all
  end
end