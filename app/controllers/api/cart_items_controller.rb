class Api::CartItemsController < ApplicationController
    def index
        @cart_items = CartItem.find_by(cart_id:params[:cart_id])
            render "api/cart_items/index"
    end

    def show
        @cart_item = CartItem.find_by(id:params[:id])
            render "api/cart_items/show"
    end

    def create
        

        if(current_user.cart)
            cart_id=current_user.cart.id
        else
            cart=Cart.create(user_id:current_user.id)
            cart_id=cart.id
        end
        @cart_item = CartItem.new(cart_item_params)
        @cart_item.cart_id=cart_id;
            if @cart_item.save
                render "api/cart_items/show"
            else
                render json:@cart_item.errors.full_messages,status:402
            end
    end


    def destroy
        @cart_item = CartItem.find_by(id:params[:id])
        if @cart_item.destroy
            render "api/cart_items"
        else
            render json:@cart_item.errors.full_messages,status:402
        end
    end


    def cart_item_params
        
        params.require(:cart_item).permit(:product_id,:quantity)
    end
end
