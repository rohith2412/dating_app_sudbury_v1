import { connectdb } from "@/connectdb/connectdb";
import User from "@/models/UserModel";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("Session Token:", token); // Log the token to verify it's correct
      console.log("Session before:", session); // Log the session before modification
  
      if (token?.user) {
        session.user = token.user;
      }
  
      const sessionUser = await User.findOne({ email: session.user?.email });
      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
      }
  
      console.log("Session after:", session); // Log the session after modification
  
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
          });
        }

        return {
          email: profile.email,
          user: {
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          },
        };
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; 
      }
    },
  },
});

export { handler as GET, handler as POST };