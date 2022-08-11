Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :beaches, only: [:new, :create]

  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index, :show, :destroy] do 
        resources :reviews, only: [:create]
      end
    end
  end

  get "/beaches", to: "homes#index"
  get "/beaches/:id", to: "homes#index"
  delete '/beaches/:id', to: 'beaches#destroy'

end
