require "middleman"
require "rspec"
require "capybara/rspec"

Capybara.app = Middleman::Application.server.inst do
  set :root, File.expand_path(File.join(File.dirname(__FILE__), ".."))
  set :environment, :development
  set :show_exceptions, false
end
