url "https://wdi-library-api.herokuapp.com/games" \
  --include \
  --request POST\
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
