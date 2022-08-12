require "rails_helper"

RSpec.describe Api::V1::BeachesController, type: :controller do 

  let!(:wells){Beach.create(name:"Wells", town: "York", state: "Maine", description: "This be a sandy place")}
  let!(:salisbury){Beach.create!(name:"Salisbury", town: "Salisbury", state: "Mass", description:"There's sand here too")}

  describe "GET#index" do
    it "should return a list of all the gifs" do

      get :index 
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
          
      expect(returned_json["beaches"][1]["name"]).to eq "Wells"
      expect(returned_json["beaches"][0]["name"]).to eq "Salisbury"
      expect(returned_json["beaches"][1]["town"]).to eq "York"
      expect(returned_json["beaches"][0]["town"]).to eq "Salisbury"

    end
  end

end
