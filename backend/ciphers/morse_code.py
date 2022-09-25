from ciphers.cipher import Cipher

class MorseCode(Cipher):
    MORSE_CODE = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "y": "-.--",
        "z": "--..",
        " ": "",
    }

    def __init__(self, text, cipher_params) -> None:
        super().__init__(text, cipher_params)
    
    def encrypt(self) -> str:
        result = ""
        for char in self.text.lower():
            result += self.MORSE_CODE[char] + "/"
        result += "/"
        return result