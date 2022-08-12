class Api::V1::VotesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }
    before_action :authenticate_user!
    def create 
        # check whether there exists a vote with the same user_id and review_id

        if Vote.find_by(user_id: current_user.id , review_id: vote_params["review_id"])
            previousValue = Vote.find_by(user_id: current_user.id , review_id: vote_params["review_id"]).value
            updatedValue = params["vote"]["value"]
            if previousValue===updatedValue
                Vote.destroy(Vote.find_by(user_id: current_user.id , review_id: vote_params["review_id"]).id)
                difference = -previousValue
                render json: {"value":difference, "changed":true}
            else
                Vote.find_by(user_id: current_user.id , review_id: vote_params["review_id"]).update_attribute(:value, updatedValue) 
                difference = updatedValue - previousValue
                render json: {"value":difference, "changed":true}
            end
        else
            vote = Vote.new(vote_params)
            vote.user_id = current_user.id
            if vote.save
                render json: {"value":vote.value, "changed":false}
            else
                render json: {error: review.errors.full_messages}, status: :unprocessable_entity
            end
        end
    end

    private

    def vote_params
        params.require(:vote).permit(:value, :review_id, :current_user)
    end
end