class BeachesController < ApplicationController
  before_action :authenticate_user!
    def new
        @beach = Beach.new
        render :"beaches/new"
    end

    def create
      @beach = Beach.create(beach_params)
      if @beach.save
          flash[:msg] = "Beach added successfully"
          redirect_to "/beaches/#{@beach.id}"
      else
          flash.now[:msg] = @beach.errors.full_messages.to_sentence
          render :"beaches/new"
      end
    end

    def edit
      @beach = Beach.find(params[:id])
    end

    def update
      @beach = Beach.find(params[:id])
      if @beach.update(beach_params)
        flash[:msg] = "Beach updated."
        redirect_to "/beaches/#{@beach.id}"
      else
        flash.now[:msg] = @beach.errors.full_messages.to_sentence
        render :edit
      end
    end
      
    private

    def beach_params      
        params.require(:beach).permit(:name, :town, :state, :description, :url, :image, :updated_at, :created_at)
    end

    def authorize_user 
      if !user_signed_in? || !current_user.admin?
        flash[:notice] = "You do not have access to this page."
        redirect_to root_path
      end
    end
end
