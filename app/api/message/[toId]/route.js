import { connectdb } from "@/connectdb/connectdb";
import Message from "@/models/MessageModel";

export async function POST(req, context) {
  try {
    await connectdb();

    const { params } = context;
    const awaitedParams = await params; 
    const recipientId = awaitedParams.toId;

    const body = await req.json();
    const senderId = body.senderId;
    const content = body.content;

    if (!senderId || !recipientId || !content) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    const message = await Message.create({
      sender: senderId,
      recipient: recipientId,
      content,
    });

    return new Response(JSON.stringify({ success: true, message }), { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}


export async function GET(req, context) {
  try {
    await connectdb();
    const { params } = context;
    const recipientId = params.id;

    const messages = await Message.find({
      recipient: recipientId,
    }).sort({ createdAt: 1 });

    return new Response(JSON.stringify({ success: true, messages }), { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}