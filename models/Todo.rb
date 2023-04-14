# app/models/todo.rb
class Todo < ActiveRecord::Base
    belongs_to :category
  end
  