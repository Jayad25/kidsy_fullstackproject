class Api::CartsController < ApplicationController

    def show

    if current_user.cart
      id = current_user.cart.id
      @cart = Cart.find(id)
    else
      @cart = Cart.new({ user_id: current_user.id})
      @cart.save
    end
  end
end
