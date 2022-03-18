from __future__ import annotations
from .ciphers import ICipher, TestCipher, CeasarCipher, SwitchCipher

class EncryptionContext():
    cipher_list = {
        'test': TestCipher,
        'ceasar': CeasarCipher,
        'switch': SwitchCipher,
    }

    def __init__(self, cipher_code: str, text: str, params) -> None:
        self._cipher = self.get_cipher(cipher_code)(text, params)

    @classmethod
    def get_cipher(cls, code: str) -> ICipher:
        assert(code in cls.cipher_list.keys()), "cipher not found"
        return cls.cipher_list[code]

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
        return list(cls.cipher_list.keys())
