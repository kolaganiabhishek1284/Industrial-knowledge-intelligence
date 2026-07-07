from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/maintenance",
    tags=["Predictive Maintenance"]
)


class Equipment(BaseModel):
    equipment: str
    temperature: float
    vibration: float
    pressure: float
    running_hours: int


@router.post("/predict")
def predict(data: Equipment):

    score = 0

    if data.temperature > 80:
        score += 30

    if data.vibration > 7:
        score += 35

    if data.pressure > 150:
        score += 20

    if data.running_hours > 10000:
        score += 15

    if score >= 70:
        status = "Critical"

    elif score >= 40:
        status = "Warning"

    else:
        status = "Healthy"

    return {
        "equipment": data.equipment,
        "health_score": 100 - score,
        "status": status,
        "recommendation":
            "Schedule preventive maintenance immediately."
            if status != "Healthy"
            else
            "Equipment operating normally."
    }