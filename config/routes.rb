Rails.application.routes.draw do
  resources :cards, only: %i[index create]

  resources :favorites_lists, only: %i[create show]
end
