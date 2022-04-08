import pytest


@pytest.mark.parametrize(
    "cipher_code,msg_text,cipher_params,result",
    [
        (
            "switch",
            "test",
            {"switch_key": "ga-de-ry-po-lu-ki"},
            "tdst",
        ),
        (
            "ceasar",
            "test",
            {"shift": 1},
            "uftu",
        ),
    ],
)
def test_encryptor(
    client, cipher_code: str, msg_text: str, cipher_params: dict, result: str
) -> None:
    request_data = {
        "cipher": cipher_code,
        "text": msg_text,
        "params": cipher_params,
    }
    response = client.post("/api", json=request_data)

    print(response)

    assert response.status_code == 200
    assert response.json["result"] == result
    assert response.json["result"] != msg_text
