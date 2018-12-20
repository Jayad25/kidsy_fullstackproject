Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users,only:[:create,:show] 
    resources :products,except: [:new, :edit]
    resource :session,only:[:create,:destroy,:show]
    resources :carts,only:[:create]
    resources :cart_items,only:[:create,:index,:update,:show,:destroy]
  end
  root "static_pages#root"
end
