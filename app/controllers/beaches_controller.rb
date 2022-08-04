class BeachesController < ApplicationController
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

    private

    def beach_params
        params.require(:beach).permit(:name, :town, :state, :description, :url, :image)
    end
end