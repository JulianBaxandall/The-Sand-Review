Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/beaches", to: "homes#index"
  get "/beaches/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index, :show]
    end
  end

end
