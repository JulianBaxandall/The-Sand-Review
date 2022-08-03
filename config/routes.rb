Rails.application.routes.draw do
  root 'beaches#index'
  devise_for :users

  get "/beaches", to: "beaches#index"

  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index]
    end
  end
end
