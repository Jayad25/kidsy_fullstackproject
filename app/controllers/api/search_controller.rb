class Api::SearchController < ApplicationController

    def index
        @products = Product.top_twelve_results(search_params[:title])
        
        render "api/products/index"
      end
    
      def search_params
        
        params.require(:search).permit(:title)
      end
end
