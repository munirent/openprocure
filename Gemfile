source 'https://rubygems.org'
ruby '2.3.1'

gem "middleman", "~> 3.4.0"

# Live-reloading plugin
gem "middleman-livereload", "~> 3.4.3"

# Auto-generate favicon and touch icon
gem "middleman-favicon-maker"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw]

# Deploy to Github
gem "middleman-gh-pages"

# Tests
group :development do
  gem "rspec", "~> 3.3.0"
  gem "capybara", "~> 2.4.4"
  gem "rspec_junit_formatter", "~> 0.2.2"
end

