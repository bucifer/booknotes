class Quote
	attr_accessor :body, :author
	def initialize(body, author)
		@body = body
		@author = author
	end
end

a = Quote.new("A reader lives a thousand lives before he dies. The man who never reads lives only one.", "George R.R. Martin")
b = Quote.new("The more that you read, the more things you will know. The more that you learn, the more places you'll go.", "Dr.Seuss")
c = Quote.new("If you only read the books that everyone else is reading, you can only think what everyone else is thinking.", "Haruki Murakami")

quotes = [a,b,c]
