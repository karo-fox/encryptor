from typing import Dict, List, Union

import pytest
from ciphers.ceasar_cipher import CeasarCipher


def test_init_with_shift_provided() -> None:
    params = {"shift": 1}
    msg = "test"
    cipher = CeasarCipher(msg, params)

    assert type(cipher) == CeasarCipher


def test_init_without_shift_provided() -> None:
    with pytest.raises(AssertionError):
        params: Dict[
            str,
            Union[str, int],
        ] = {}
        msg = "test"
        CeasarCipher(msg, params)


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


@pytest.mark.parametrize(
    "shift,expected",
    [
        (0, [32, 65, 97, 90, 122]),
        (1, [32, 66, 98, 65, 97]),
        (-1, [32, 64, 96, 89, 121]),  # TODO: get this working
    ],
)
def test_get_encrypted_char_code(
    constant_char_codes, shift: int, expected: List[int]
) -> None:
    results = [
        CeasarCipher.get_encrypted_char_code(char_code, shift)
        for char_code in constant_char_codes
    ]

    assert results == expected


@pytest.mark.parametrize(
    "shift,expected",
    [
        (0, -26),
        (26, 0),
    ],
)
def test_get_reverse_shift(shift: int, expected: int) -> None:
    result = CeasarCipher.get_reverse_shift(shift, False)

    assert result == expected


@pytest.mark.parametrize(
    "shift,expected",
    [
        (0, list(range(97, 123))),
        (1, list(range(97, 122))),
        (20, list(range(97, 103))),
    ],
)
def test_get_letters_minus_shift(shift: int, expected: List[int]) -> None:
    results = CeasarCipher.get_letters_minus_shift(shift, False)

    assert results == expected


@pytest.mark.parametrize(
    "shift,expected",
    [
        (0, 123),
        (123, 0),
        (20, 103),
    ],
)
def test_get_ending_code(shift: int, expected: int) -> None:
    result = CeasarCipher.get_ending_code(shift, False)

    assert result == expected
