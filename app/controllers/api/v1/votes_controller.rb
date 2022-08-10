class Api::V1::VotesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }

    def create 
        # check whether there exists a vote with the same user_id and review_id
        vote = Vote.new(vote_params)
        vote.user_id = current_user.id
        if vote.save
            render json: vote
        else
            render json: {error: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def vote_params
        params.require(:vote).permit(:value, :review_id, :current_user)
    end
end