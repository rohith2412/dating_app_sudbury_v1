import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const { name,email } = await req.json();

    await connectdb();

    const user = new User({ name, email });
    await user.save();

    return new Response("User added");
  } catch (error) {
    console.error(error);
    return new Response("Error saving user");
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { email, PhoneNumber, Address, College, Education, gender, Age } = body;

    await connectdb();

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          PhoneNumber,
          Address,
          College,
          Education,
          gender,
          Age
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

export async function GET(req) {
  try {
    // Get session info
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });
    }

    // Connect to database
    await connectdb();

    // Find user by email
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    // Return the user data (just a few fields for simplicity)
    return new Response(
      JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.PhoneNumber,
        address: user.Address
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}