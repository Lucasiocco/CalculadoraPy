from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data.get('expression')
    try:
        if 'sqrt' in expression:
            expression = expression.replace('sqrt', 'math.sqrt')
        result = eval(expression)
    except Exception as e:
        result = "Error"
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)