require "rails_helper"

feature "visitor sees a list of beaches" do
  scenario "sees a list of beaches and link for posting new beach" do
    wells = Beach.create!(name:"Wells", town: "York", state: "Maine", description: "This be a sandy place")
    salisbury = Beach.create!(name:"Salisbury", town: "Salisbury", state: "Mass", description:"There's sand here too")

    visit beaches_path

    expect(page).to have_content wells.name
    expect(page).to have_content salisbury.name
    expect(page).to have_content "Submit New Beach"

  end

  # scenario "visitor clicks link and sees the show page for that beach" do
  #   plumb_island = Beach.create!()

  #   visit root_path

  #   click_link "Plumb Island"
    
  #   expect(page).to have_content plumb_island.name 
  #   expect(page).to have_content plumb_island. 
  #   expect(page).to have_content plumb_island. 
  #   expect(page).to have_content plumb_island. 
  # end
end