from ciphers.cipher import ICipher


class CeasarCipher(ICipher):
    SPACE_CODE = 32
    A_CODE = 65
    Z_CODE = 90
    a_CODE = 97
    z_CODE = 122

    def __init__(self, text, cipher_params) -> None:
        super().__init__(text, cipher_params)
        assert('shift' in cipher_params.keys()
               ), "'shift' not specified"

    def encrypt(self) -> str:
        shift = self.params['shift']
        result = ''
        for char in self.text:
            char_code = ord(char)
            encrypted_char_code = self.__get_encrypted_char_code(
                char_code, shift)
            result += chr(encrypted_char_code)
        return result

    def __get_encrypted_char_code(cls, char_code: int, shift: int) -> int:
        if char_code in [cls.SPACE_CODE]:
            encrypted_char_code = char_code
        else:
            if char_code in cls.__get_letters_minus_shift(shift, capital=True) + cls.__get_letters_minus_shift(shift, capital=False):
                encrypted_char_code = char_code + shift
            else:
                if char_code not in cls.__get_letters_minus_shift(shift, capital=True):
                    encrypted_char_code = char_code + \
                        cls.__get_reverse_shift(shift, capital=True)
                elif char_code not in cls.__get_letters_minus_shift(shift, capital=False):
                    encrypted_char_code = char_code + \
                        cls.__get_reverse_shift(shift, capital=False)
        return encrypted_char_code

    def __get_reverse_shift(cls, shift: int, capital: bool) -> int:
        if capital:
            a_code = cls.A_CODE
        else:
            a_code = cls.a_CODE
        return a_code - cls.__get_ending_code(shift, capital)

    def __get_letters_minus_shift(cls, shift: int, capital: bool) -> list:
        if capital:
            a_code = cls.A_CODE
        else:
            a_code = cls.a_CODE
        return list(range(a_code, cls.__get_ending_code(shift, capital)))

    def __get_ending_code(cls, shift: int, capital: bool) -> int:
        if capital:
            z_code = cls.Z_CODE
        else:
            z_code = cls.z_CODE
        return z_code - shift + 1
