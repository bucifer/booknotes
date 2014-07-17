json.extract! @category, :id, :name, :created_at, :updated_at

json.books @category.books, :id, :title, :author, :rating 