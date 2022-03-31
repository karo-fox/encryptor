from ciphers.cipher import ICipher


class TestCipher(ICipher):
    def encrypt(self) -> str:
        return f"TestCipher -> text: {self.text}"
