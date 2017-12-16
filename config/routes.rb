Rails.application.routes.draw do
  resources :cards, only: %i[index create]

  resources :lists, only: %i[show create update]

  resources :users, only: %i[create]
end
