from __future__ import annotations
from ciphers.cipher import Cipher


class CipherContext:
    def __init__(self, cipher: Cipher) -> None:
        self._cipher = cipher

    @property
    def cipher(self) -> Cipher:
        return self._cipher

    @cipher.setter
    def cipher(self, cipher: Cipher) -> None:
        self._cipher = cipher

    def encrypt(self) -> str:
        return self._cipher.encrypt()

    def decrypt(self) -> str:
        return self._cipher.decrypt()
