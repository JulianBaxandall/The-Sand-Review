class Api::V1::ReviewsController < ApplicationController

    protect_from_forgery unless: -> { request.format.json? }
    
    def index
        beach = Beach.find(params[:beach_id])
        render json: beach.reviews
    end

    def create
        review = Review.new(review_params)
        if review.save
            render json: {review: "successfully created the review"}
        else
            render json: { error: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def review_params
        params.require(:review).permit(:title, :text, :rating, :beach_id)
    end

end