require 'rails_helper'

feature "user posts new beach" do
  scenario "create new beach, user is redirected to beach show page" do
    visit "/beaches/new"

    fill_in "Name",	with: "dat beach"
    fill_in "Town",	with: "dat town" 
    fill_in "State",	with: "dat state"  
    fill_in "Description",	with: "yah" 
    attach_file "Beach Image", "#{Rails.root}/spec/support/images/photo.png"

    click_button "Add Beach"
    
    expect(page).to have_content("Beach added successfully")
    expect(page).to have_current_path("/beaches/#{Beach.last.id}")
  end

  scenario "create incomplete beach, user is told their life mistakes" do
    visit "/beaches/new"

    fill_in "Name",	with: "dat beach"
    fill_in "Town",	with: "dat town" 
    fill_in "State",	with: ""  
    fill_in "Description",	with: "" 

    click_button "Add Beach"
    
    expect(page).to have_content("State can't be blank and Description can't be blank")
    expect(page).to have_content("New Beach Form")
  end
end