from __future__ import annotations
from . import ciphers

class EncryptionContext():
    cipher_list = {
        'test': ciphers.TestCipher,
        'ceasar': ciphers.CeasarCipher,
    }

    def __init__(self, cipher_code: str, text: str, params) -> None:
        self._cipher = self.get_cipher(cipher_code)(text, params)

    @classmethod
    def get_cipher(cls, code: str) -> ciphers.ICipher:
        assert(code in cls.cipher_list.keys()), "cipher not found"
        return cls.cipher_list[code]

    @property
    def cipher(self) -> ciphers.ICipher:
        return self._cipher
    
    @cipher.setter
    def cipher(self, cipher: ciphers.ICipher) -> None:
        self._cipher = cipher
    
    def encrypt(self) -> None:
        return self._cipher.encrypt()

    @classmethod
    def show_ciphers(cls) -> list:
        return list(cls.cipher_list.keys())
