import requests
import os
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

profanity_filter_url = "https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter"
api_key = os.environ['PROFANITY_API_KEY']
profanity_api_headers = {
    'content-type': "application/x-www-form-urlencoded",
    'x-rapidapi-key': api_key,
    'x-rapidapi-host': "neutrinoapi-bad-word-filter.p.rapidapi.com"
}

conn = psycopg2.connect(
    database=os.environ['DB_DATABASE'],
    user=os.environ['DB_USER'],
    password=os.environ['DB_PASSWD'],
    sslmode='require',
    port=26257,
    host=os.environ['DB_HOST'],
    options=os.environ['DB_OPTIONS']
)


@app.route('/api/createpost', methods=['POST'])
def index():
    data = ""
    try:
        data = request.get_json()['content']
    except:
        print(request)
        print(request.headers)
        print(request.get_json())
        error_msg = {"error": "Request not in correct JSON format"}
        return jsonify(error_msg), 400

    response = requests.request(
        "POST", profanity_filter_url, data=f"content={data}", headers=profanity_api_headers)

    if response.json()['is-bad']:
        error_msg = {"error": "Profanity was detected in your post"}
        return jsonify(error_msg), 400

    with conn.cursor() as cur:
        current_date_string = datetime.now().date()

        # Get latest ID
        cur.execute(
            "SELECT id FROM JAMHACKS.posts ORDER BY id DESC LIMIT 1")
        old_id = cur.fetchall()[0][0]
        conn.commit()
        new_id = old_id + 1

        cur.execute(
            "CREATE TABLE IF NOT EXISTS JAMHACKS.posts (id INT PRIMARY KEY, content STRING, date DATE)"
        )
        cur.execute(
            "UPSERT INTO JAMHACKS.posts (id, content, date) VALUES (%s, %s, %s)", (new_id, data, current_date_string))
        conn.commit()
    success_msg = {"success": "Data added to databse"}
    return jsonify(success_msg)


@app.route('/api/getposts', methods=['GET'])
def get_posts():
    posts = []
    with conn.cursor() as cur:
        cur.execute(
            "SELECT * FROM JAMHACKS.posts ORDER BY id DESC")
        posts = cur.fetchall()
        conn.commit()

    return jsonify({"posts": posts})


if __name__ == "__main__":
    app.run()
    print("Done")
    conn.close()
