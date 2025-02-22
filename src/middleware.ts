// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'


// const isPublicRoute = createRouteMatcher([
//   '/sign-in(.*)',
//   '/sign-up(.*)',
//   '/',
//   '/(api|trpc)(.*)'

// ])

// export default clerkMiddleware(async (auth:any, request:any) => {
//   if (!isPublicRoute(request)) {
//     await auth.protect()
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)'

//     ,'/admin(.*)'
//   ],
  
// };
import { authMiddleware } from "@clerk/nextjs";

// Define public routes (No authentication required)
export default authMiddleware({
  publicRoutes: ["/", "/about"],
});

// Apply middleware to all routes except _next/static, _next/image, and API routes
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};


// import { authMiddleware } from "@clerk/nextjs/server";


// export default authMiddleware({
//   publicRoutes:
// });

// // Clerk Middleware ke liye Next.js config
// export const config = {
//   matcher: ["/((?!_next|.*\\..*).*)"], // Ignore _next aur static files
// };
