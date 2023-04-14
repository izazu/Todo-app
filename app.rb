require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/cors'
require 'json'
require './models/post'
require './models/comment'

configure :development do
  require 'dotenv'
  Dotenv.load
end

configure do
  enable :cross_origin
end

# CORS configuration
set :allow_origin, :any
set :allow_methods, [:get, :post, :put, :delete, :options]
set :allow_credentials, true

