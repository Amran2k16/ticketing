import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
it("should return a 404 if the provided id does not exist", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", global.signin())
    .send({ title: "fasdf", price: 20 })
    .expect(404);
});
it("should return a 401 if the user is not authenticated", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({ title: "fasdf", price: 20 })
    .expect(401);
});
it("should return a 401 if the user does not own the ticket", async () => {
  const ticket = await request(app)
    .post(`/api/tickets`)
    .set("Cookie", global.signin())
    .send({ title: "fasdf", price: 20 })
    .expect(201);

  await request(app)
    .put(`/api/tickets/${ticket.body.id}`)
    .set("Cookie", global.signin())
    .send({ title: "fasdfasdf", price: 23123 })
    .expect(401);
});
it("should return a 400 if the user provides an invalid title or price", async () => {});
it("should return a 404 if the provided id does not exist", async () => {});
it("should update the ticket ", async () => {});
