class Api::v1Beaches::ApplicationController
  def index
    render json: Beaches.all
  end
end