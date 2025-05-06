import { connectdb } from "@/connectdb/connectdb";
import Message from "@/models/MessageModel";

export async function POST(req, { params }) {
  try {
    await connectdb();

    const body = await req.json();
    const senderId = body.senderId;
    const recipientId = params.toId;
    const content = body.content;

    if (!senderId || !recipientId || !content) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }


    const message = await Message.create({ sender: senderId, recipient: recipientId, content });

    return new Response(JSON.stringify({ success: true, message }), { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response(JSON.stringify({ message: "Server error", error: error.message }), { status: 500 });
  }
}
