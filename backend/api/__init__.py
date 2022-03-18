from flask import Flask

def create_app():
    app = Flask(__name__)

    from .config import ProductionConfig, DevelopmentConfig
    from .encryptor import bp

    if app.config["ENV"] == "production":
        app.config.from_object(ProductionConfig)
    else:
        app.config.from_object(DevelopmentConfig)

    app.register_blueprint(bp)

    return app