from __future__ import annotations
from . import ciphers

class EncryptionContext():
    cipher_list = {
        'test': ciphers.TestCipher(),
    }

    def __init__(self, cipher_code: str) -> None:
        self._cipher = self.get_cipher(cipher_code)

    @classmethod
    def get_cipher(cls, code: str) -> ciphers.ICipher:
        assert(code in cls.cipher_list.keys())
        return cls.cipher_list[code]

    @property
    def cipher(self) -> ciphers.ICipher:
        return self._cipher
    
    @cipher.setter
    def cipher(self, cipher: ciphers.ICipher) -> None:
        self._cipher = cipher
    
    def encrypt(self, text: str) -> None:
        return self._cipher.encrypt(text)

    @classmethod
    def show_ciphers(cls) -> dict:
        return cipher_list
