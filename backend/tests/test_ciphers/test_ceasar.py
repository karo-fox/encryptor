from typing import Dict, List, Union

import pytest
from ciphers.ceasar_cipher import CeasarCipher


def test_init_with_shift_provided() -> None:
    params = {"shift": 1}
    msg = "test"
    cipher = CeasarCipher(msg, params)

    assert cipher.shift == 1


def test_init_without_shift_provided() -> None:
    with pytest.raises(AssertionError):
        params: Dict[
            str,
            Union[str, int],
        ] = {}
        msg = "test"
        CeasarCipher(msg, params)


def test_init_with_alphabet_provided() -> None:
    params = {"shift": 1, "alphabet": "pl"}
    msg = "test"
    cipher = CeasarCipher(msg, params)

    assert cipher.alphabet == "aąbcćdeęfghijklłmnńoóprsśtuwyzźż"


def test_init_without_alphabet_provided() -> None:
    params = {"shift": 1}
    msg = "test"
    cipher = CeasarCipher(msg, params)

    assert cipher.alphabet == "abcdefghijklmnopqrstuvwxyz"


@pytest.mark.parametrize(
    "shift,expected",
    [
        (1, "uftu"),
        (0, "test"),
    ],
)
def test_encrypt(shift: int, expected: str) -> None:
    cipher = CeasarCipher("test", {"shift": shift})
    result = cipher.encrypt()

    assert result == expected
