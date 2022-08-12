Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :beaches, only: [:new, :create, :update, :edit]

  namespace :api do
    namespace :v1 do
      resources :beaches, only: [:index, :show, :destroy] do 
        resources :reviews, only: [:create]
        resources :votes, only: [:create]
      end
    end
  end

  get "/beaches", to: "homes#index"
  get "/beaches/:id/edit", to: "beaches#edit"
  patch "/beaches/:id", to: "beaches#update"
  get "/beaches/:id", to: "homes#index"
  delete '/beaches/:id', to: 'beaches#destroy'

end
