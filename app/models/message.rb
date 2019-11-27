class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unlesss: :image?

  mount_uploader :image, ImageUploader
end
