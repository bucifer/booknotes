class Book < ActiveRecord::Base
	belongs_to :category
	has_many :images
    validates :category, :presence => true

    validates :title, :author, presence: true, length: {
    	maximum: 100, 
    	minimum: 3
    }
    validates :rating, numericality: {less_than_or_equal_to: 5}
end
