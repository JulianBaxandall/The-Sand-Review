Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/beaches", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index]
    end
  end

end
