from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/compliance",
    tags=["Compliance"]
)


class ComplianceRequest(BaseModel):
    sop_available: bool
    ppe_used: bool
    emergency_exit_clear: bool
    fire_extinguisher: bool
    equipment_inspected: bool


@router.post("/check")
def check(req: ComplianceRequest):

    score = 0

    if req.sop_available:
        score += 20

    if req.ppe_used:
        score += 20

    if req.emergency_exit_clear:
        score += 20

    if req.fire_extinguisher:
        score += 20

    if req.equipment_inspected:
        score += 20

    if score >= 90:
        status = "Excellent"
    elif score >= 70:
        status = "Good"
    elif score >= 50:
        status = "Average"
    else:
        status = "Critical"

    return {
        "compliance_score": score,
        "status": status,
        "passed": score >= 70
    }