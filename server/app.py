from config import app, db, Api
from flask_restful import Resource

class HomePage(Resource):
    def get(self):
        return {'message': '200: Welcome to my Home Page'}, 200
    
    
if __name__ == '__main__':
    app.run(port = 5555, debug = True)