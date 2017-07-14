Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  resources :todos, only: [:index, :show, :create, :destroy, :update]
end
