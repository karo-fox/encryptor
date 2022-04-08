from typing import List
import pytest
from ciphers.ceasar_cipher import CeasarCipher


def test_init_with_shift_provided():
    params = {"shift": 1}
    msg = "test"
    cipher = CeasarCipher(msg, params)

    assert type(cipher) == CeasarCipher


def test_init_without_shift_provided():
    with pytest.raises(AssertionError):
        params = {}
        msg = "test"
        CeasarCipher(msg, params)


@pytest.mark.parametrize(
    "shift,expected",
    [
        (
            1,
            "uftu",
        ),
        (
            0,
            "test",
        ),
    ],
)
def test_encrypt(shift: int, expected: str) -> None:
    cipher = CeasarCipher("test", {"shift": shift})
    result = cipher.encrypt()

    assert result == expected


@pytest.mark.parametrize(
    "shift,expected",
    [
        (0, [32, 65, 97, 90, 122]),
        (1, [32, 66, 98, 65, 97]),
    ],
)
def test_get_encrypted_char_code(shift: int, expected: List[int]):
    char_codes = [
        CeasarCipher.SPACE_CODE,
        CeasarCipher.A_CODE,
        CeasarCipher.a_CODE,
        CeasarCipher.Z_CODE,
        CeasarCipher.z_CODE,
    ]
    results = [
        CeasarCipher.get_encrypted_char_code(char_code, shift)
        for char_code in char_codes
    ]
    assert results == expected
