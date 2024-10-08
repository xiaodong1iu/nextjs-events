import { insertDoc } from "../../utils/db-util";


async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    await insertDoc('emails', {email: userEmail})

    console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
