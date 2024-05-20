import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(

);
// Public routes



export const config = {
  matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};