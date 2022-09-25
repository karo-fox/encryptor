import pytest
from ciphers.morse_code import MorseCode

@pytest.mark.parametrize(
    "msg,expected",
    [
        ("test", "-/./.../-//"),
        ("test test", "-/./.../-//-/./.../-//"),
        ("TEST", "-/./.../-//")
    ]
)
def test_encrypt(msg: str, expected: str) -> None:
    cipher = MorseCode(msg, {})
    result = cipher.encrypt()

    assert result == expected