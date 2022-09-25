from typing import Dict, List, Union
import pytest

from ciphers.switch_cipher import SwitchCipher


def test_init_with_key_provided():
    params = {"switch_key": "ga-de-ry-po-lu-ki"}
    msg = "test"
    cipher = SwitchCipher(msg, params)

    assert type(cipher) == SwitchCipher


def test_init_without_key_provided() -> None:
    with pytest.raises(AssertionError):
        params: Dict[
            str,
            Union[str, int],
        ] = {}
        msg = "test"
        SwitchCipher(msg, params)


@pytest.mark.parametrize(
    "switch_key,expected",
    [
        ("ga-de-ry-po-lu-ki", "tdst"),
        ("ko-ni-ec-ma-tu-ry", "ucsu"),
        ("..", "test"),
    ],
)
def test_encrypt(switch_key: str, expected: str) -> None:
    cipher = SwitchCipher("test", {"switch_key": switch_key})
    result = cipher.encrypt()

    assert result == expected

@pytest.mark.parametrize(
    "switch_key,expected",
    [
        ("ga-de-ry-po-lu-ki", "Tdst Wpye"),
        ("ko-ni-ec-ma-tu-ry", "Ucsu Wkyd"),
        ("..", "Test Word"),
    ],
)
def test_encrypt_with_upper(switch_key: str, expected: str) -> None:
    cipher = SwitchCipher("Test Word", {"switch_key": switch_key})
    result = cipher.encrypt()

    assert result == expected


@pytest.mark.parametrize(
    "cipher_key,expected",
    [
        (["ga", "de"], {"g": "a", "a": "g", "d": "e", "e": "d"}),
    ],
)
def test_get_key_map(cipher_key: List[str], expected: Dict[str, str]) -> None:
    result = SwitchCipher.get_key_map(cipher_key)

    assert result == expected
