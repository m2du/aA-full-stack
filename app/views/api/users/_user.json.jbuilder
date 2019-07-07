json.extract! user, :id, :username, :email, :tag
json.image_url url_for(user.image) if user.image.attached?
