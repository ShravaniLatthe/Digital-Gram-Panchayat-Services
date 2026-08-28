from fastapi import FastAPI

from pydantic import BaseModel

from sqlalchemy import text

from database import engine



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

@app.get("/")
def home():
    return {
        "message": "Digital Gram Panchayat Backend is running"
    }


@app.get("/test-db")
def test_database():

    try:

        with engine.connect() as connection:

            connection.execute(text("SELECT 1"))

        return {
            "message": "Database connected successfully"
        }

    except Exception as e:

        return {
            "message": "Database connection failed",
            "error": str(e)
        }

