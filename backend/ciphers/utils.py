def remove_pl_chars(text: str) -> str:
    change_pl = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z",
    }
    change_pl.update([(key.upper(), val.upper()) for key, val in change_pl.items()])
    for old, new in change_pl.items():
        text = text.replace(old, new)
    return text
