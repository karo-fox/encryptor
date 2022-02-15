from flask import Blueprint, current_app, request, jsonify, json
from encryption import ciphers
from encryption.context import EncryptionContext

bp = Blueprint('encryptor', __name__, url_prefix='/enc')

@bp.route('/', methods=('GET', 'POST'))
def main():
    if request.method == 'POST':
        data = json.loads(request.data)
        try:
            context = EncryptionContext(data['cipher-code'])
            return jsonify(result=context.encrypt('test message'))
        except AssertionError:
            return jsonify(exception=f"cipher not found")

    
    return jsonify(available_ciphers=EncryptionContext.show_ciphers())