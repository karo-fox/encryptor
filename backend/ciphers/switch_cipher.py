from typing import List
from ciphers.cipher import Cipher


class SwitchCipher(Cipher):
    def __init__(self, text, cipher_params) -> None:
        super().__init__(text, cipher_params)
        assert (
            "switch_key" in cipher_params.keys()
        ), f"'switch_key' not specified, {cipher_params.keys()}"

    def encrypt(self) -> str:
        cipher_key_str = self.params["switch_key"] + '-' +  self.params["switch_key"].upper()
        cipher_key = cipher_key_str.split("-")
        key_map = self.get_key_map(cipher_key)
        result = self.text.translate(str.maketrans(key_map))
        return result
    
    def decrypt(self) -> str:
        return self.encrypt()

    @classmethod
    def get_key_map(cls, cipher_key: List[str]) -> dict:
        key_map = {}
        for pair in cipher_key:
            key_map[pair[0]] = pair[1]
            key_map[pair[1]] = pair[0]
        return key_map