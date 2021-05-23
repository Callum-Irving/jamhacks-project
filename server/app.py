import requests
import os
from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

profanity_filter_url = "https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter"
api_key = os.environ['PROFANITY_API_KEY']
profanity_api_headers = {
    'content-type': "application/x-www-form-urlencoded",
    'x-rapidapi-key': api_key,
    'x-rapidapi-host': "neutrinoapi-bad-word-filter.p.rapidapi.com"
}


@app.route('/api/createpost', methods=['POST'])
def index():
    data = ""
    try:
        data = request.get_json()
    except:
        print("Error: request not in json format")
        error_msg = {"error": "Request not in JSON format"}
        return jsonify(error_msg), 400

    response = requests.request(
        "POST", profanity_filter_url, data=data, headers=profanity_api_headers)

    if response.json()['is-bad']:
        error_msg = {"error": "Profanity was detected in your post"}
        return jsonify(error_msg), 400
    else:
        success_msg = {"success": "Data added to databse"}
        return jsonify(success_msg)


if __name__ == "__main__":
    app.run()
