from __future__ import annotations
from ciphers.cipher import ICipher


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
