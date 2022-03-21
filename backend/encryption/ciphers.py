from abc import ABC, abstractmethod

class ICipher():

    @abstractmethod
    def __init__(self, text: str, params: dict) -> None:
        self.text = text
        self.params = params
    
    @abstractmethod
    def encrypt(self) -> str:
        pass


class TestCipher(ICipher):
    def encrypt(self) -> str:
        return f'TestCipher -> text: {self.text}'


class CeasarCipher(ICipher):

    def __init__(self, text, params) -> None:
        super().__init__(text, params)
        assert('transformation' in params.keys()), "'transformation' not specified"

    def encrypt(self) -> str:
        trans = self.params['transformation']
        result = ''
        for char in self.text:
            code = ord(char)
            if code in [32]:
                encrypted_code = code
            else:
                if code in list(range(65, 91 - trans)) + list(range(97, 123 - trans)):
                    encrypted_code = code + trans
                else:
                    if code not in range(65, 91 - trans):
                        encrypted_code = code - (91 - trans) + 65
                    elif code not in range(97, 123 - trans):
                        encrypted_code = code - (123 - trans) + 97
            result += chr(encrypted_code)
        return result


class SwitchCipher(ICipher):

    def __init__(self, text, params) -> None:
        super().__init__(text, params)
        assert('switch_key' in params.keys()), "'switch_key' not specified"

    def encrypt(self) -> str:
        key = self.params['switch_key'].split('-')
        print(key)
        key_map = {}
        for pair in key:
            key_map[pair[0]] = pair[1]
            key_map[pair[1]] = pair[0]
        result = self.text.translate(str.maketrans(key_map))
        return result