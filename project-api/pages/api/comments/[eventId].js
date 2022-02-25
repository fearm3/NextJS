//!/api/comments/some-event-id
import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://fearm3:123456Pp@cluster0.q0r77.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    //add server side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    newComment.id = result.insertedId;

    console.log(result);

    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Ford",
        text: "A first comment! ",
      },
      {
        id: "c2",
        name: "Honda",
        text: "A second comment! ",
      },
    ];
    res.status(200).json({ comments: dummyList });
  }
  client.close();
}

export default handler;
