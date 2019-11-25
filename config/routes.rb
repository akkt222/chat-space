Rails.application.routes.draw do
  devise_for :users
  root  "groups#index"
  resources :users, only: [:edit, :update, :index]
  resources :groups, only: [:new, :edit, :update, :create] do
    resources :message, only: [:index]
  end
end