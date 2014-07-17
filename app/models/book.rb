class Book < ActiveRecord::Base
	belongs_to :category
	has_many :images
    validates :category, :presence => true

    validates :title, :author, presence: true, length: {
    	maximum: 100, 
    	minimum: 3
    }
    validates :rating, numericality: {less_than_or_equal_to: 5}

    has_attached_file :image
	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]
end
