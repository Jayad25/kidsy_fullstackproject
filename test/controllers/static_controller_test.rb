require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get pages" do
    get static_pages_url
    assert_response :success
  end

end
