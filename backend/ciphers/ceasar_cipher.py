from ciphers.cipher import Cipher


class CeasarCipher(Cipher):
    ALPHABETS = {
        "en": "abcdefghijklmnopqrstuvwxyz",
        "pl": "aąbcćdeęfghijklłmnńoóprsśtuwyzźż",
    }
    EXCLUDED = " "

    def __init__(self, text, cipher_params) -> None:
        super().__init__(text, cipher_params)
        assert "shift" in cipher_params.keys(), "'shift' not specified"
        self.alphabet = self.__get_alphabet()
        self.shift = self.params["shift"]

    def __get_alphabet(self) -> str:
        if "alphabet" in self.params and self.params["alphabet"]:
            return self.ALPHABETS[self.params["alphabet"]]
        return self.ALPHABETS["en"]

    def encrypt(self) -> str:
        result = ""
        for char in self.text:
            result += self.__get_encrypted_char(char)
        return result

    def __get_encrypted_char(self, char: str) -> str:
        if char in self.EXCLUDED:
            return char
        else:
            end_index = len(self.alphabet) - self.shift - 1
            alphabet = self.alphabet.upper() if char.isupper() else self.alphabet
            char_index = alphabet.find(char)
            reverse_letters = self.alphabet[end_index:]
            if char in reverse_letters:
                reverse_index = char_index - len(alphabet) + self.shift
                return alphabet[reverse_index]
            else:
                return alphabet[char_index + self.shift]
