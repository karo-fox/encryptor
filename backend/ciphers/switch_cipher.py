from ciphers.cipher import ICipher


class SwitchCipher(ICipher):
    def __init__(self, text, cipher_params) -> None:
        super().__init__(text, cipher_params)
        assert "switch_key" in cipher_params.keys(), "'switch_key' not specified"

    def encrypt(self) -> str:
        cipher_key = self.params["switch_key"].split("-")
        key_map = self.__get_key_map(cipher_key)
        result = self.text.translate(str.maketrans(key_map))
        return result

    def __get_key_map(self, cipher_key: str) -> dict:
        key_map = {}
        for pair in cipher_key:
            key_map[pair[0]] = pair[1]
            key_map[pair[1]] = pair[0]
        return key_map
