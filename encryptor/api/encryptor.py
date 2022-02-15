from flask import Blueprint, current_app

bp = Blueprint('encryptor', __name__, url_prefix='/enc')

@bp.route('/')
def main():
    return f'hello world'