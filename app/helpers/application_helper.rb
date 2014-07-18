module ApplicationHelper

	def error_messages_for(object)
		render(:partial => 'shared/error_messages', :locals => {:object => object})
	end

	def setup_book(book)
		book.images ||= Image.new
		book
	end

end
