from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from typing import Generator, Dict
from fastapi.responses import StreamingResponse
import time
import asyncio
import json

app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    return "OK"

connections = {}


async def event_stream(user_id: str):
    queue = asyncio.Queue()
    connections[user_id] = queue
    try:
        while True:
            data = await queue.get()
            yield f"data: {data}\n\n"
    finally:
        del connections[user_id]


@app.get("/events")
async def events(user_id: str):
    return StreamingResponse(event_stream(user_id), media_type="text/event-stream")


@app.post("/send_event/{user_id}")
async def send_event(user_id: str, message: str):
    if user_id in connections:
        res_payload = {"message": message}
        json_data = json.dumps(res_payload)
        await connections[user_id].put(json_data)
        return {"message": "Event sent"}
    return {"error": "User not connected"}

if __name__ == '__main__':
    port = int(8000)
    uvicorn.run(app, host='0.0.0.0', port=port)
