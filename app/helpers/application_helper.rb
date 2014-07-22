module ApplicationHelper

	def test_blank_author_img_url(object)
		if object.images.first.author_img_url == "author_images/" || object.images.first.author_img_url == "" || object.images.nil?
			return true
		else
			return false
		end
	end

	def error_messages_for(object)
		render(:partial => 'shared/error_messages', :locals => {:object => object})
	end

	def flash_class_returner(key)
	    case key
	        when 'notice' then "alert alert-info"
	        when 'success' then "alert alert-success"
	        when 'alert' then "alert alert-warning"
	        when 'error' then "alert alert-error"
	    end
	end

end
