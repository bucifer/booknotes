class UserInterfaceController < ApplicationController

	def index 
		@books = Book.all.reorder('rating DESC').order('updated_at DESC').page(params[:page]).per(4)
		@categories = Category.all
		
	a = Quote.new("\"A reader lives a thousand lives before he dies. The man who never reads lives only one.\"", "George R.R. Martin")
	b = Quote.new("\"The more that you read, the more things you will know. The more that you learn, the more places you'll go.\"", "Dr.Seuss")
	c = Quote.new("\"If you only read the books that everyone else is reading, you can only think what everyone else is thinking.\"", "Haruki Murakami")
	d = Quote.new("\"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.\"", "Charles William Eliot")
	quotes = [a,b,c,d]
	@quote = quotes.sample
	end

	def category_index
		@categories = Category.all
	end


end

