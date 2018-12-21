class Api::CartsController < ApplicationController

    def create
        @cart = Cart.new(cart_params)
        if @cart.save
            render "api/cart_items"
        else
            render @cart.errors.full_messages, status:402
        end
    end

    def cart_params
        params.require(:cart).permit(:user_id)
    end
end
