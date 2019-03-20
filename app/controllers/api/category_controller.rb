class Api::CategoryController < ApplicationController
    def index
      x= ""
      debugger
    @products = Product.where(category: category_params[:type])
    render 'api/products/index'
  end

  def category_params
    params.require(:category).permit(:type)
  end
end
