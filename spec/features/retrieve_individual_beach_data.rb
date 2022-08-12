require "rails_helper"

RSpec.describe Api::V1::BeachesController, type: :controller do
  let!(:first_beach) { Beach.create(
    name: 'Good Harbor Beach', 
    town: 'Gloucester', 
    state: 'MA', 
    description: 'Located on Thatcher Road/Route 127A, Good Harbor is a beautiful beach with lovely white sand. At low tide, one can walk out to Salt Island, while at high tide, one can enjoy body surfing or boogie boards.', 
    url:'https://www.gloucester-ma.gov/1215/Gloucester-Beaches---Detailed-Informatio', 
    image: 'https://flic.kr/p/8WoLFj'
   ) }

  let!(:second_beach) { Beach.create(
    name: 'Wingaersheek',
    town: 'Gloucester', 
    state: 'MA', 
    description: 'Situated in the western part of Gloucester at the end of Atlantic Street off Route 133 and Concord Street, this beautiful beach runs along the Annisquam River and Ipswich Bay. At low tide, the beach extends out for hundreds of yards and a long sandbar is exposed, making for a great place to walk.', 
    url: 'https://www.gloucester-ma.gov/1215/Gloucester-Beaches---Detailed-Informatio', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Wingaersheek_sunset.JPG/802px-Wingaersheek_sunset.JPG?20120919010648' 
  ) }

  describe "GET#show" do
    it "should return API data of first beach" do
      get :show, params: {id: first_beach.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
  
      expect(returned_json["beach"]["name"]).to eq first_beach.name
      expect(returned_json["beach"]["town"]).to eq first_beach.town
      expect(returned_json["beach"]["state"]).to eq first_beach.state
      expect(returned_json["beach"]["description"]).to eq first_beach.description
      expect(returned_json["beach"]["url"]).to eq first_beach.url
      expect(returned_json["beach"]["image"]).to eq first_beach.image
    end

    it "should return API data of second beach" do
      get :show, params: {id: second_beach.id}
      returned_json["beach"] = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
  
      expect(returned_json["beach"]["name"]).to eq second_beach.name
      expect(returned_json["beach"]["town"]).to eq second_beach.town
      expect(returned_json["beach"]["state"]).to eq second_beach.state
      expect(returned_json["beach"]["description"]).to eq second_beach.description
      expect(returned_json["beach"]["url"]).to eq second_beach.url
      expect(returned_json["beach"]["image"]).to eq second_beach.image
    end
  end
end