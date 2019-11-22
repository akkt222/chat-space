Rails.application.routes.draw do
  devise_for :users
  root to: "messages#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :edit, :update, :create] do
    resources :message, only: [:index]
  end
end