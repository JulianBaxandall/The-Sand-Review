class Beach < ApplicationRecord
    mount_uploader :image, BeachImageUploader

    validates :name, presence: true
    validates :town, presence: true
    validates :state, presence: true
    validates :description, presence: true

end