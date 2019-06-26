# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

# BAhJIiU2ODgyYmZiMzI0OGVjNGQyZDY0NzI1NTQxODE0NzUyZgY6BkVG--4b587249db80de9732b7b8f0e0fe626bb2b5308b

curl "https://wdi-library-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
  "passwords":{
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'

echo
