import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModal";

export async function POST(req) {
  try {
    const { name } = await req.json();
  await connectdb();

  const user = new User({
    name,
  });

  await user.save();
  return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error)
  }
}
