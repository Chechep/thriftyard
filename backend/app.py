from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
CORS(app)

# 🔹 Required secret key (sessions)
app.config["SECRET_KEY"] = "your-secret-key"

# 🔹 Database config (SQLite for testing)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///ecommerce.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# 🔹 Debug Toolbar settings
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
toolbar = DebugToolbarExtension(app)

# 🔹 Initialize database
db = SQLAlchemy(app)

# Example Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "price": self.price}


@app.route("/")
def home():
    return {"message": "E-commerce Flask API running"}


@app.route("/products")
def get_products():
    products = Product.query.all()
    return {"products": [p.to_dict() for p in products]}


if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create tables automatically for testing
        # Insert a sample product if table is empty
        if not Product.query.first():
            sample = Product(name="Test Product", price=19.99)
            db.session.add(sample)
            db.session.commit()

    app.run(debug=True, port=5000)
