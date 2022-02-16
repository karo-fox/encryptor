from abc import ABC, abstractmethod

class ICipher():

    @abstractmethod
    def __init__(self, text: str, params: dict):
        self.text = text
        self.params = params
    
    @abstractmethod
    def encrypt(self):
        pass


class TestCipher(ICipher):
    def encrypt(self) -> str:
        return f'TestCipher -> text: {self.text}'


class CeasarCipher(ICipher):

    def __init__(self, text, params):
        super().__init__(text, params)
        assert('transformation' in params.keys()), "'transformation' not specified"

    def encrypt(self) -> str:
        return f'CeasarCipher -> text: {self.text}, transformation: {self.params["transformation"]}'