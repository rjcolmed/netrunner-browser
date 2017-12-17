Rails.application.routes.draw do
  resources :cards, only: %i[index create]

  resources :favorites, only: %i[index show create update]

  resources :users, only: %i[create]

  post '/login', to: "sessions#create"
end
