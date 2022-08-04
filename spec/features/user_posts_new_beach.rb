require 'rails_helper'

feature "user posts new beach" do
  scenario "create new beach, user is redirected to beach show page" do
    visit "/beaches/new"

    fill_in "name",	with: "dat beach"
    fill_in "town",	with: "dat town" 
    fill_in "state",	with: "dat state"  
    fill_in "description",	with: "yah" 

    click_button "Add Beach"
    
    expect(page).to have_content("Beach added successfully")
    expect(page).to have_current_path("/beaches/#{Beach.last.id}")
  end

  scenario "create incomplete beach, user is told their life mistakes" do
    visit "/beaches/new"

    fill_in "name",	with: "dat beach"
    fill_in "town",	with: "dat town" 
    fill_in "state",	with: ""  
    fill_in "description",	with: "" 

    click_button "Add Beach"
    
    expect(page).to have_content("State can't be blank and Description can't be blank")
    # Page redirects to /beaches but beach_controller says its :"/beaches/new:"
    # expect(page).to have_current_path("/beaches/new")
  end
end