import pytest

from ciphers.ceasar_cipher import CeasarCipher


@pytest.fixture
def constant_char_codes() -> list:
    return [
        CeasarCipher.SPACE_CODE,
        CeasarCipher.A_CODE,
        CeasarCipher.a_CODE,
        CeasarCipher.Z_CODE,
        CeasarCipher.z_CODE,
    ]
