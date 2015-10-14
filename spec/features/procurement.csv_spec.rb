require "spec_helper"
require "csv"

describe "procurement.csv", :type => :feature do
  before do
    visit "/procurement.csv"
  end
  
  let(:csv) { CSV.parse(page.body, headers: true) }

  it "has the correct headers" do
    expect(csv.headers).to include "agency", "state", "type"
  end

  it "contains the data" do
    expect(csv.size).to be > 50
  end
end
