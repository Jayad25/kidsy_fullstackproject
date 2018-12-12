class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],params[:user][:password])
            if @user
                login(@user)
                # debugger
                render "api/users/show"
            else
                render json:["invalid username/password"],status:101
            end
    end
    
    def destroy
        
        @user = current_user
        # debugger
        if @user
            logout
            render "api/users/show"
        else
            render json:["Nobody signed in"],status: 404
        end
    end
end
