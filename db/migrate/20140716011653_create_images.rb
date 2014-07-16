class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :cover_img_url
      t.string :author_image_url

      t.timestamps
    end
  end
end
