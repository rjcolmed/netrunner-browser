Rails.application.routes.draw do
  resources :cards, only: %i[index create destroy]

  resources :favorites, only: %i[index create]

  resources :users, only: %i[create]

  post '/login', to: "sessions#create"
end
