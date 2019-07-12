@subs.each do |sub|
  json.set! sub.id do
    json.partial! 'api/private_subscriptions/dm', dm: sub
  end
end