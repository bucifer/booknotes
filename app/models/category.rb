class Category < ActiveRecord::Base
	has_many :books	
	accepts_nested_attributes_for :books

	validates :name, length: { minimum: 2, maximum: 20}, presence: true

end
