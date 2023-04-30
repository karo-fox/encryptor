import pytest

from ciphers.utils import remove_pl_chars


@pytest.mark.parametrize(
    "text,expected",
    [
        ("żółć", "zolc"),
        ("ąćęłńóśźż", "acelnoszz"),
        ("ĄĆĘŁŃÓŚŹŻ", "ACELNOSZZ"),
        ("nic", "nic"),
        (
            "Sphinx of black quartz, judge my vow",  # English pangram
            "Sphinx of black quartz, judge my vow",
        ),
        (
            "Zbłaźń mżystość ględów hiperfunkcją.",  # Polish pangram
            "Zblazn mzystosc gledow hiperfunkcja.",
        ),
    ],
)
def test_remove_pl_chars(text: str, expected: str) -> None:
    result = remove_pl_chars(text)

    assert result == expected
