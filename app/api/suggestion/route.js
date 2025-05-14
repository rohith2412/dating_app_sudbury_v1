import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModel";

export async function GET() {
  try {
    await connectdb();

    const users = await User.find().lean();

    const matchedPairs = [];
    const usedIds = new Set();

    for (const user of users) {
      if (usedIds.has(user._id.toString())) continue;

      const oppositeGender = user.gender === "Male" ? "Female" : "Male";

      const match = users.find(
        (u) =>
          u._id.toString() !== user._id.toString() &&
          u.gender === oppositeGender &&
          u.Age === user.Age &&
          !usedIds.has(u._id.toString())
      );

      if (match) {
        matchedPairs.push({
          user1: { name: user.name, age: user.Age, gender: user.gender, image: user.image, Education: user.Education, Address: user.Address },
          user2: { name: match.name, age: match.Age, gender: match.gender, image: match.image, Education: match.Education, Address: match.Address },
        });

        usedIds.add(user._id.toString());
        usedIds.add(match._id.toString());
      }
    }

    return new Response(JSON.stringify(matchedPairs));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error", error }));
  }
}
