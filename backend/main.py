from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

users_db = []


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if any(user['email'] == email for user in users_db):
        return jsonify({"error": "Email already registered"}), 400

    users_db.append({"email": email, "password": password})
    return jsonify({"message": "User registered successfully"}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if any(user['email'] == email and user['password'] == password for user in users_db):
        return jsonify({"message": "Good"}), 200

    return jsonify({"error": "Invalid email or password"}), 400


if __name__ == '__main__':
    app.run(debug=True)