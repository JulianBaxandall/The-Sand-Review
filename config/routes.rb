Rails.application.routes.draw do
  root 'beaches#index'
  devise_for :users

  get "/beaches", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index]
    end
  end

  # probably wont need line twelcome 
  # resources :beaches, only: [:index, :show, :new, :create]
end
