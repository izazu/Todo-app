require 'json'

class TodosController < Sinatra::Base
  # Create a new todo
  post '/todos' do
    todo = Todo.new(JSON.parse(request.body.read))
    if todo.save
      status 201
      todo.to_json
    else
      status 422
      { error: 'Failed to create todo' }.to_json
    end
  end

  # Read all todos
  get '/todos' do
    todos = Todo.all
    todos.to_json
  end

  # Update a todo
  patch '/todos/:id' do
    todo = Todo.find(params[:id])
    if todo.update(JSON.parse(request.body.read))
      todo.to_json
    else
      status 422
      { error: 'Failed to update todo' }.to_json
    end
  end

  # Delete a todo
  delete '/todos/:id' do
    todo = Todo.find(params[:id])
    if todo.destroy
      todo.to_json
    else
      status 422
      { error: 'Failed to delete todo' }.to_json
    end
  end
end
# app/controllers/todos_controller.rb
class TodosController < ApplicationController
  # ... existing routes ...

  # Create a new todo associated with a category
  post '/todos' do
    todo = Todo.new(params[:todo])
    category = Category.find(params[:category_id])
    category.todos << todo
    if todo.save
      # Handle success
    else
      # Handle error
    end
  end

  # Update a todo associated with a category
  patch '/todos/:id' do
    todo = Todo.find(params[:id])
    category = Category.find(params[:category_id])
    todo.category = category
    if todo.update(params[:todo])
      # Handle success
    else
      # Handle error
    end
  end

  # ... more routes ...
end
