import { MongoClient } from "mongodb";

const menuHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://hsingla08:ndtcma9ZA3JhhaW4@menu.asfyhkj.mongodb.net/menu?retryWrites=true&w=majority&appName=Menu"
    );
    const db = client.db();

    //Collection is a table and document is a data in that table
    const menuCollection = db.collection("menu");

    const result = await menuCollection.insertOne(data);

    client.close();

    res.status("201").json({ message: "Meetup inserted" });
  }
};

export default menuHandler;

// mongodb+srv://hsingla08:ndtcma9ZA3JhhaW4@menu.asfyhkj.mongodb.net/?retryWrites=true&w=majority&appName=Menu
