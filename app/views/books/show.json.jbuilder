json.extract! @book, :id, :title, :author, :rating, :created_at, :updated_at, :short_summary, :category_id

json.category @book.category 

json.images @book.images, :id, :author_img_url, :created_at, :updated_at