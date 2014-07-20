module BooksHelper

	def exist_show(field)
		if !field.nil?
			return field
		else
			return "N/A"
		end 
	end

end
