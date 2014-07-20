class AddShortSummaryToBook < ActiveRecord::Migration

  def change
  	add_column :books, :short_summary, :text
  end

end
