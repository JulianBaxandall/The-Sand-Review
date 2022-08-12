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

  describe "Beaches#edit" do
    it "Should edit the corresponding beach" do
      Beach.update(name: "Bad Harbor Beach")
      expect(response.status).to eq 200
      
      get :show, params: {id: good_harbor.id}
      returned_json = JSON.parse(response.body)
      expect(returned_json["beach"]["name"]).to eq "Bad Harbor Beach"
    end
  end
end