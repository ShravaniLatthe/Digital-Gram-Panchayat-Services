from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class BirthCertificate(BaseModel):
    child_name: str
    date_of_birth: str
    gender: str
    birth_place: str
    father_name: str
    mother_name: str
    address: str
    village: str
    district: str
    pincode: str


@app.get("/")
def home():
    return {"message": "Digital Gram Panchayat Backend Running"}


@app.post("/birth-certificate")
def submit_birth_certificate(application: BirthCertificate):
    return {
        "message": "Birth certificate application received successfully",
        "application": application
    }