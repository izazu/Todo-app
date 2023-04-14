require 'sinatra/base'
require 'rack/cors'

class ApplicationController < Sinatra::Base
  use Rack::Cors do
    allow do
      origins '*' # Update this with the URL of your React frontend
      resource '*', headers: :any, methods: [:get, :post, :patch, :delete]
    end
  end
end
