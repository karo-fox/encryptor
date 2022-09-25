from abc import abstractmethod


class Cipher:
    @abstractmethod
    def __init__(self, text: str, cipher_params: dict) -> None:
        self.text = text
        self.params = cipher_params

    @abstractmethod
    def encrypt(self) -> str:
        pass

    @abstractmethod
    def decrypt(self) -> str:
        pass