from flask import Blueprint, request, jsonify, json
from ciphers.cipher_context import CipherContext

bp = Blueprint('encryptor', __name__, url_prefix='/api')


@bp.route('', methods=('GET', 'POST'))
def main():
    if request.method == 'POST':
        encryption_data = json.loads(request.data)
        try:
            cipher = CipherContext(
                encryption_data['cipher'], encryption_data['text'], getSnakeCaseKeys(encryption_data['params']))
            return jsonify(result=cipher.encrypt())
        except AssertionError as error:
            return jsonify(exception=f"bad data: {error.args.__str__()}")

    return jsonify(available_ciphers=CipherContext.show_ciphers())


def getSnakeCaseKeys(dictionary: dict) -> dict:
    new_keys = [key.replace('-', '_') for key in dictionary.keys()]
    return dict(zip(new_keys, list(dictionary.values())))
