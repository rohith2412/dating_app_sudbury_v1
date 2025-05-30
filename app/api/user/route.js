import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModel";


//test purpose post route
export async function POST(req) {
  try {
    const { name,email, gender, Age } = await req.json();

    await connectdb();

    const user = new User({ name, email, gender, Age  });
    await user.save();

  } catch (error) {
    console.error(error);
    return new Response("Error saving user");
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { email, PhoneNumber,Status, Address, College, Education, gender, Age, InstagramURL, checked } = body;

    await connectdb();

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {      
        $set: {
          PhoneNumber,
          Address,
          Status,
          College,
          Education,
          gender,
          Age,
          InstagramURL,
          checked
        }
      },
      { new: true } 
    );

    if (!updatedUser) {
      return new Response("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}

export async function GET(res) {
    try {
      const alluser = await User.find({
      Address: { $exists: true, $ne: null, $ne: "", $not: /^\s*$/, $nin: ["Not Provided", "", null], },
    });
      return new Response(JSON.stringify(alluser))
    } catch (error) {
      console.log(error)
    }
}

