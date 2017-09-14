Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:create, :index]
    end
    resources :steps, only: [:update, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
end
