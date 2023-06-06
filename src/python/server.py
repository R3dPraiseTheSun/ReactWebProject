from flask_cors import CORS
from flask import Flask, jsonify
from RepositoryData import GetGithubData

app = Flask(__name__, static_folder='../../build', static_url_path='/')
CORS(app)

app.debug = True

@app.route("/")
def serve_react_app():
    return app.send_static_file('index.html')

@app.route("/api/data", methods=["GET"])
def get_data():
    # Your Python script logic here
    data = GetGithubData()
    print(data)
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="0.0.0.0")