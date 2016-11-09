require 'middleman-gh-pages'

# Use rake deploy to publish the website
task :deploy => :publish

# Use rake to run tests
require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec)

task :default => :spec
