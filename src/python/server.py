from flask_cors import CORS
from flask import Flask, request, jsonify
from RepositoryData import GetGithubData

app = Flask(__name__)
CORS(app)

@app.route("/api/data", methods=["GET"])
def get_data():
    # Your Python script logic here
    data = GetGithubData()
    print(data)
    return jsonify(data)

if __name__ == "__main__":
    app.run()