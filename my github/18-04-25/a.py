from flask import Flask, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('form'))

@app.route('/form')
def form():
    return '''
        <form action="/result" method="get">
            Name: <input name="name" value="admin">
            <input type="submit">
        </form>
    '''

@app.route('/result')
def result():
    name = request.args.get('name')
    return f"Hello, {name}!"

if __name__ == '__main__':
    app.run(debug=True)