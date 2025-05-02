import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModel";

export async function GET(req, { params }) {
    try {
        await connectdb();
        const { id } = params;

        const user = await User.findById(id);
        if (!user) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error);
        return new Response(JSON.stringify({ message: 'Server error', error: error.message }), { status: 500 });
    }
}
