import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([])


export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.pathname;

  // Verifique se a rota é pública
  // if (url.startsWith('/sign-in') || url.startsWith('/sign-up')) {
  //   return; 
  // }

  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};