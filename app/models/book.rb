class Book < ActiveRecord::Base
	belongs_to :category
	has_many :images, :dependent => :destroy
    accepts_nested_attributes_for :images, allow_destroy: true

    validates :category, :presence => true

    validates :title, :author, presence: true, length: {
    	maximum: 300, 
    	minimum: 3
    }
    validates :rating, numericality: {less_than_or_equal_to: 5}

    has_attached_file :image, :styles => {:small_size => "150x150>", :cover_size => "350x350>" }
	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]

  def title
    read_attribute(:title).titleize.uncapitalize_puncs
  end

end
