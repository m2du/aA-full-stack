export const fetchDMs = () => (
  $.ajax({
    method: 'get',
    url: 'api/private_subscriptions'
  })
)

export const createDM = userId => (
  $.ajax({
    method: 'post',
    url: 'api/private_subscriptions',
    data: {dm: {user_id: userId}}
  })
)