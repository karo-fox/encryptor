from __future__ import annotations
from ciphers.cipher import ICipher

from ciphers.test_cipher import TestCipher
from ciphers.ceasar_cipher import CeasarCipher
from ciphers.switch_cipher import SwitchCipher


class CipherContext:
    def __init__(self, cipher: ICipher) -> None:
        self._cipher = cipher

    @property
    def cipher(self) -> ICipher:
        return self._cipher

    @cipher.setter
    def cipher(self, cipher: ICipher) -> None:
        self._cipher = cipher

    def encrypt(self) -> str:
        return self._cipher.encrypt()
