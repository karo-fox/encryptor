from abc import ABC, abstractmethod

class ICipher():
    @abstractmethod
    def encrypt(self, text: str):
        pass


class TestCipher(ICipher):
    def encrypt(self, text) -> str:
        return f'TestCipher; text: {text}'