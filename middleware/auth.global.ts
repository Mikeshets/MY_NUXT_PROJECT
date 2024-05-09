export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Global Middleware")
//   console.log(to);
//   console.log(from);
//   const isLloggedIn = true;

  // to is the destination
//   if (isLloggedIn) {
//       // Redirect to the page we want to go
//       return navigateTo(to.fullPath)
//   } else {
//       // Redirect to login page
//       return navigateTo("/login")
//   }
});
