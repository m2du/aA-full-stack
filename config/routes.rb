Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :guilds, only: [:create, :index, :show, :update, :destroy] do
      resources :invites, only: [:create]
      resources :channels, only: [:create]
    end
    resources :invites, only: [:show]
    resources :channels, only: [] do 
      resources :messages, only: [:index]
    end
  end
end
