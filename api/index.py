from flask import Flask, request, jsonify
from flask_cors import CORS
from app import main

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/query', methods=['POST'])
def query():
    try:
        data = request.get_json()
        query = data.get('query', '')
        if query:
            response = main(query)
            return jsonify({'response': response})
        else:
            return jsonify({'error': 'No query provided'}), 400
    except Exception as e:
        print(f"Error: {e}")  # Log the error to the console
        return jsonify({'error': 'An internal error occurred'}), 500

if __name__ == '__main__':
    app.run(port=5000)
