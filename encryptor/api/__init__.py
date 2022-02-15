from flask import Flask

from . import config, encryptor

def create_app():
    app = Flask(__name__)

    if app.config["ENV"] == "production":
        app.config.from_object(config.ProductionConfig)
    else:
        app.config.from_object(config.DevelopmentConfig)

    app.register_blueprint(encryptor.bp)

    return app