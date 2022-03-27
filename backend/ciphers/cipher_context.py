from __future__ import annotations
from ciphers.cipher import ICipher

from ciphers.test_cipher import TestCipher
from ciphers.ceasar_cipher import CeasarCipher
from ciphers.switch_cipher import SwitchCipher


class CipherContext():
    ciphers = {
        'test': TestCipher,
        'ceasar': CeasarCipher,
        'switch': SwitchCipher,
    }

    def __init__(self, cipher_code: str, text: str, cipher_params) -> None:
        self._cipher = self.get_cipher(cipher_code)(text, cipher_params)

    @property
    def cipher(self) -> ICipher:
        return self._cipher

    @cipher.setter
    def cipher(self, cipher: ICipher) -> None:
        self._cipher = cipher

    def encrypt(self) -> str:
        return self._cipher.encrypt()

    @classmethod
    def show_ciphers(cls) -> list:
        return list(cls.ciphers.keys())

    @classmethod
    def get_cipher(cls, cipher_code: str) -> ICipher:
        assert(cipher_code in cls.ciphers.keys()), "cipher not found"
        return cls.ciphers[cipher_code]
