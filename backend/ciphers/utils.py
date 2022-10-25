def remove_pl_chars(text: str) -> str:
    pl_chars = {'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'}
    for char in pl_chars:
        while char in text:
            text = text.replace(char, pl_chars[char])
    return text