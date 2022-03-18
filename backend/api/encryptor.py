from flask import Blueprint, current_app, request, jsonify, json
from encryption import ciphers
from encryption.context import EncryptionContext

bp = Blueprint('encryptor', __name__, url_prefix='/api')

@bp.route('', methods=('GET', 'POST'))
def main():
    if request.method == 'POST':
        data = json.loads(request.data)
        try:
            context = EncryptionContext(data['cipher'], data['text'], data['params'])
            return jsonify(result=context.encrypt())
        except AssertionError as error:
            return jsonify(exception=f"bad data: {error.args.__str__()}")

    
    return jsonify(available_ciphers=EncryptionContext.show_ciphers())