class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render "api/products/index"
    end

    def show
        @product = Product.find_by(id: params[:id])
        # render "api/products/show"
    end

    def create
        @product = Product.new(product_params);
        @product.seller_id = params[:user_id]
        if @product.save
            render "api/products/show"
        else
            render json:@product.errors.full_messages
        end
    end

    def update
        @product = Product.find(params[:id])
        if @product.update
            render "api/products/show"
        else
            render json:@product.errors.full_messages
        end
    end

    def destroy
        @product = Product.find(params[:id])
        if @product.destroy
            render "api/products"
        else
            render json:@product.errors.full_messages
        end
    end


    def product_params
        params.require(:product).permit(:title,:description,:price)
    end
end
