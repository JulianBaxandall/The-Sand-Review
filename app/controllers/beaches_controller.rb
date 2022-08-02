class BeachesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
      @beaches = Beach.all
  end

  def new
      @beach = Beach.new        
  end

  def show
      # @beach = Beach.find(params[:id])
      # @reviews = @beach.reviews
  end

  def create
      # @beach = Beach.create(beach_params)
      # if @beach.save
      #     flash[:msg] = "Beach added successfully"
      #     redirect_to beach_path(@beach)
      # else
      #     flash.now[:msg] = @beach.errors.full_messages.to_sentence
      #     render :new
      # end
  end

  private

  def beach_params
      # params.require(:beach).permit(:name, :town, :state, :description, :url, :image)
  end

  def authorize_user
      if !user_signed_in?
          raise ActionController::RoutingError.new("Not Found (Login)")
      end
  end
end