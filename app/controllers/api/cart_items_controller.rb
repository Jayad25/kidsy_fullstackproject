class Api::CartItemsController < ApplicationController
  def create
    @cart_item = cartItem.new(cart_item_params)
    product = Product.find_by(id: @cart_item.product_id)


    if current_user.cart
      @cart = current_user.cart

      @cart.products.each do |already_exist_item| 
        if already_exist_item.product_id == @cart_item.product_id
          @cart_item = already_exist_item
        end
      end

    else
      @cart = Cart.new({ user_id: current_user.id })
    end

    
    @cart.save
    @cart_item.cart_id = @cart.id

    if @cart_item.save

      render "api/carts/show"
    else
      render json: @cart_item.errors.full_messages, status: 422
    end

  end


  def destroy
    @cart_item = cartItem.find(params[:id])
    item = Product.find_by(id: @cart_item.product_id)
    @cart = Cart.find_by(id: @cart_item.cart_id)
    @cart.save
    
    
      @cart_item.destroy
      render "api/carts/show"
    
    
  end


  def cart_item_params
    snackcase_params
    params.require(:cartItem).permit(:product_id, :cart_id)
  end

    def snackcase_params
    params[:cartItem] = params[:cartItem].transform_keys(&:underscore)
  end
end
