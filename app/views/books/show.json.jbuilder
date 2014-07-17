json.extract! @book, :id, :title, :author, :rating, :created_at, :updated_at, :category_id

json.category @book.category 

json.images @book.images, :id, :cover_img_url, :author_img_url, :created_at, :updated_at