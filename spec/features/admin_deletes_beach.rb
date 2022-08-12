require "rails_helper"

RSpec.describe Api::V1::BeachesController, type: :controller do
  let!(:good_harbor) { Beach.create(
    name: 'Good Harbor Beach', 
    town: 'Gloucester', 
    state: 'MA', 
    description: 'Located on Thatcher Road/Route 127A, Good Harbor is a beautiful beach with lovely white sand. At low tide, one can walk out to Salt Island, while at high tide, one can enjoy body surfing or boogie boards.', 
    url:'https://www.gloucester-ma.gov/1215/Gloucester-Beaches---Detailed-Informatio', 
    image: 'https://flic.kr/p/8WoLFj'
   ) }

  describe "Beaches#delete" do
    it "Should delete the corresponding beach" do
      get :show, params: {id: good_harbor.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
  
      expect(returned_json["beach"]["name"]).to eq good_harbor.name
      expect(returned_json["beach"]["town"]).to eq good_harbor.town
      expect(returned_json["beach"]["state"]).to eq good_harbor.state
      expect(returned_json["beach"]["description"]).to eq good_harbor.description
      
      before_delete = Beach.all.length
      Beach.delete(good_harbor.id)
      expect(response.status).to eq 200

      expect(Beach.all.length).to eq (before_delete - 1)
  
    end
  end
end