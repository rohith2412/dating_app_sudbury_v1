// File: app/api/user/update/route.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import dbConnect from "@/connectdb/connectdb"
import User from "@/models/UserModel";

export async function PUT(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { age } = body;

  try {
    await dbConnect();
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { age },
      { new: true }
    );

    return Response.json({ message: "User updated", user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
