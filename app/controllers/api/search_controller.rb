class Api::SearchController < ApplicationController

    def index
        @products = Product.top_twelve_results(search_params[:title])
        # debugger
        render "api/products/index"
      end
    
      def search_params
        sd="asgd"
        # debugger
        params.require(:search).permit(:title)
      end
end
