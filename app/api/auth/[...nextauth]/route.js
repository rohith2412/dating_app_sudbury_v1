import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModel";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      await connectdb();

      const sessionUser = await User.findOne({ email: session.user?.email }).lean();

      if (sessionUser) {
        session.user = {
          id: sessionUser._id.toString(),
          name: sessionUser.name,
          email: sessionUser.email,
          image: sessionUser.image,
          PhoneNumber: sessionUser.PhoneNumber,
          Address: sessionUser.Address,
          College: sessionUser.College,
          Education: sessionUser.Education,
          gender: sessionUser.gender,
          Age: sessionUser.Age,
          InstagramURL: sessionUser.InstagramURL
        };
      }

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectdb();

        const userExist = await User.findOne({ email: profile.email });

        if (!userExist) {
          await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture, 
            PhoneNumber: 0,
            Address: "Not Provided",
            College: "Not Provided",
            Education: "Not Provided",
            gender: "Not Provided",
            Age: 0,
            InstagramURL: "Not Provided"
          });
        } else {
          
          await User.updateOne(
            { email: profile.email },
            {
              $set: {
                name: profile.name,
                image: profile.picture, 
              },
            }
          );
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
