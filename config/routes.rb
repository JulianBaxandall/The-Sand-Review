Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/beaches", to: "homes#index"
  get "/beaches/new", to: "beaches#new"
  get "/beaches/:id", to: "homes#index"

  resources :beaches, only: [:new, :create]

  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index, :show]
    end
  end

end
