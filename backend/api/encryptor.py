from spwd import getspnam
from flask import Blueprint, request, jsonify, json
from ciphers.cipher import ICipher
from ciphers.switch_cipher import SwitchCipher
from ciphers.ceasar_cipher import CeasarCipher
from ciphers.cipher_context import CipherContext

bp = Blueprint("encryptor", __name__, url_prefix="/api")


@bp.route("", methods=["POST"])
def main():
    if request.method == "POST":
        encryption_data = json.loads(request.data)
        try:
            cipher = get_cipher(encryption_data)
            context = CipherContext(cipher)
            return jsonify(result=context.encrypt())
        except AssertionError as error:
            return jsonify(exception=f"bad data: {error.args.__str__()}")


def get_cipher(cipher_data: dict) -> ICipher:
    return available_ciphers()[cipher_data["cipher"]](
        cipher_data["text"], getSnakeCaseKeys(cipher_data["params"])
    )


def available_ciphers() -> dict:
    return {
        "ceasar": CeasarCipher,
        "switch": SwitchCipher,
    }


def getSnakeCaseKeys(dictionary: dict) -> dict:
    new_keys = [key.replace("-", "_") for key in dictionary.keys()]
    return dict(zip(new_keys, list(dictionary.values())))
