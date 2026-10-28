import os

import jwt
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from passlib.context import CryptContext

app = FastAPI(title="Yquest API")

pwd = CryptContext(schemes=["pbkdf2_sha256"])
SECRET = os.getenv("SECRET")
HASH = pwd.hash("dragon123")

oauth2 = OAuth2PasswordBearer(tokenUrl="login")


class Login(BaseModel):
    username: str
    password: str


# TODO 1 : POST /login (token ou 401)
@app.post("/login")
def login(login: Login):
    if login.username == "kaz" and pwd.verify(login.password, HASH):
        token = jwt.encode(
            {"sub": "kaz"},
            SECRET,
            algorithm="HS256"
        )
        return {
            "access_token": token,
            "token_type": "bearer"
        }

    raise HTTPException(status_code=401, detail="Identifiants incorrects")


# TODO 2 : dépendance user_courant (decode ou 401)
def user_courant(token: str = Depends(oauth2)):
    try:
        payload = jwt.decode(token, SECRET, algorithms=["HS256"])
        username = payload.get("sub")

        if username is None:
            raise HTTPException(status_code=401, detail="Token invalide")

        return username

    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Token invalide")


# TODO 3 : GET /me protégée -> {"username": sub}
@app.get("/me")
def me_protegee(username: str = Depends(user_courant)):
    return {"username": username}
