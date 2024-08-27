import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "../../../../utils/database";
import User from "../../../../models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }){
            try {
                await connectToDB();
                //fetch user by email
                const sessionUser = await User.findOne({
                    email: session.user.email
                });

                if(sessionUser){
                    session.user.id = sessionUser._id.toString(); 
                }
            } catch (error) {
                console.log(`Error fetching session user: `, error);
            }
            
            return session;
        },
        async signIn({ profile }){
             try {
                await connectToDB();

                // Remove spaces from username and ensure it fits the criteria
                const sanitizedUsername = profile.name.replace(/\s+/g, '').toLowerCase();
    
                // check if user already exist
                const userExist = await User.findOne({
                    email: profile.email
                })
    
                // if not, create new user
                if(!userExist){
                    await User.create({
                        email: profile.email,
                        username: sanitizedUsername,
                        image: profile.picture
                    });
                }
                return true;
             } catch (error) {
                console.log(`Error during sign in: `, error);
                return false;
             }
        }
    }
    
});

export { handler as GET, handler as POST };