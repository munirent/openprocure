require "spec_helper"

describe "index", :type => :feature do
  before do
    visit "/"
  end
  
  it "has the correct title header" do
    within "h1" do
      expect(page).to have_content "Open Procure"
    end
  end

  describe "procurement table" do
    it "has the data table" do
      expect(page).to have_selector "table.procurement-table"
    end
    it "contains the data" do
      within "table.procurement-table" do
        expect(page).to have_content "County of Sacramento"
      end
    end
  end
end

