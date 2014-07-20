json.extract! @image, :id, :book_id, :author_img_url, :created_at, :updated_at

json.book @image.book, :id, :title, :author
json.bookurl book_url(@image.book)