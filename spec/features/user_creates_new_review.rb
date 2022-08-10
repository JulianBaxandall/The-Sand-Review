require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
   let!(:first_review) { Review.create(
    title: "Beach Title",
    rating: 4,
    text: "This is a beach description"
  )}

  let!(:first_beach) { Beach.create(
            name: 'test beach', 
            town: 'Salem',
            state: 'MA',
            description: 'Its a beach', 
             url: 'google.com', 
             image: 'https://flic.kr/p/W4fhHn')
  }

  describe "POST#create" do
    it "should return reviews of" do

      post_json = {title: first_review.title, rating: first_review.rating, text: first_review.text}
      post :create, params: {review: post_json, beach_id: first_beach.id}, format: :json
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["title"]).to eq first_review.title
      expect(returned_json["rating"]).to eq first_review.rating
      expect(returned_json["text"]).to eq first_review.text
      
    end
    it "returns an error when a required field is left blank" do

      post_json = {title:"", rating:"", text: first_review.text}
      post :create, params: {review: post_json, beach_id: first_beach.id}, format: :json
      returned_json = JSON.parse(response.body)

      expect(response.status).not_to eq 200
      expect(response.status).to eq(422)
    end
  end
end