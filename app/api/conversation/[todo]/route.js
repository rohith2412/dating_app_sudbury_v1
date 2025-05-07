// import { connectdb } from "@/connectdb/connectdb";
// import Message from "@/models/MessageModel";

// export async function GET(req, { params }) {
//   await connectdb();
//   const { toId } = await params;
//   const senderId = req.nextUrl.searchParams.get("senderId");

//   const messages = await Message.find({
//     $or: [
//       { sender: senderId, recipient: toId },
//       { sender: toId, recipient: senderId },
//     ],
//   }).sort({ createdAt: 1 });

//   return new Response(JSON.stringify({ messages }), { status: 200 });
// }
