Rails.application.routes.draw do
  resources :cards, only: %i[index create]

  resources :favorites, only: %i[create show]
end
