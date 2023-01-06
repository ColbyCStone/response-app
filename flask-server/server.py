from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#members API Route
@app.route('/get',methods=['GET'])
def testGet():
        return {
            'name': 'Hello World', 
        }

if __name__ == "__main__":
    app.run(debug=True)

