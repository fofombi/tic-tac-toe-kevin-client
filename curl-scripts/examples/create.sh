url "https://wdi-library-api.herokuapp.com/examples" \
  --include \
  --request POST\
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
