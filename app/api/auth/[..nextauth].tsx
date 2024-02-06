import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { hosturl } from "@/app/utils/host";

export default NextAuth({
providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",

        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password", placeholder: "********"}
        },
        async authorize(credentials, req) {
            const res = await fetch(`${hosturl}/login`,{
                method: "POST",
                headers: {
                    contentType: "application/json"
                },
                body: JSON.stringify({
                    username: credentials?.username,
                    password: credentials?.password
                })
            })

            const user = res.json()

            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        }
    })
]
})

