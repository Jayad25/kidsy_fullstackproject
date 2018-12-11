class ApplicationController < ActionController::Base
    


    def current_user
        @current_user ||=User.find_by(session_token: session[:session_token])

    end

    def logged_in?
        !!current_user
    end

    def login(user)
        # user.reset_session_token!
        session[:session]=user.reset_session_token!
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token]=nill
        current_user=nil
    end

    def require_login
        unless current_user
            render json:{base:['invalid credentials']},status: 401
        end
    end
end

