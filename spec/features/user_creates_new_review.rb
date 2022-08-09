require "rails_helper"

RSpec.describe Api::V1::BeachesController, type: :controller do
  let!(:first_beach) { Beach.create(
    name: 'Good Harbor Beach',
    town: 'Gloucester',
    state: 'MA',
    description: 'Located on Thatcher Road/Route 127A, Good Harbor is a beautiful beach with lovely white sand. At low tide, one can walk out to Salt Island, while at high tide, one can enjoy body surfing or boogie boards.', 
    url:'https://www.gloucester-ma.gov/1215/Gloucester-Beaches---Detailed-Informatio', 
    image: 'https://flic.kr/p/8WoLFj'
   )}
   let!(:first_review) { Review.create(
    title: "Beach Title",
    rating: 4,
    text: "This is a beach description"
  )}

  describe "POST#create" do
    it "creates a new review for a beach" do 
      post_json = {title: first_review.title, rating: first_review.rating, text: first_review.text}
      post :create, params: {review: post_json, beach_id: first_beach.id}, format: :json
      expect(Review.count).to eq(count + 1)
    end
    
    it "should return reviews of" do
      post_json = {title: first_review.title, rating: first_review.rating, text: first_review.text}
      post :create, params: {review: post_json, beach_id: first_beach.id}, format: :json
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json[first_review.id]["title"]).to eq first_review.title
      expect(returned_json[first_review.id]["rating"]).to eq first_review.rating
      expect(returned_json[first_review.id]["text"]).to eq first_review.text
    end
  end
end