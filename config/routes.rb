Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users,only:[:create] 
      resources :products,only:[:create,:new,:update,:destroy,:index,:show]
    
    # resources :products,only:[:index,:show]
    resource :session,only:[:create,:destroy,:show]
  end
end
