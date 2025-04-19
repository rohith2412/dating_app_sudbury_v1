import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModel";


export async function POST(req) {
  try {
    const { name, PhoneNumber, Address, College, Education, gender, Age } = await req.json();
    await connectdb();

    const user = new User({
      name,
      PhoneNumber,
      Address,
      College,
      Education,
      gender,
      Age,
    });

    await user.save();
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
