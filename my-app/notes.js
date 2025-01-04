//Add(install) shacn ui  npx shadcn@latest init  //npm install -g shadcn-ui
// to add shadcn button npx shadcn@latest add button
// components we will use in this app is button avatar card carousal checkbox input drawer label select tabs textarea

// we have used CLERK for implement login log out functionality of user by his google account
   /// npm install @clerk/nextjs
// Set your Clerk API keys  paste the api key and secret key in .env file
// Add clerkMiddleware()  create a file name middleware.js and paste the middleware code their copied from clerk official website
// Add <ClerkProvider> and Clerk comp..// wrap our whole app inside layout.js file


//(auth) if we make folder like this in our app folder it will not create another path
//pages/[...slug].js
// http://localhost:3000/about
// Output: Matched Slug: about
// http://localhost:3000/products/phones/smartphones
// Output: Matched Slug: products / phones / smartphones
// http://localhost:3000/
// Output: No path segments

// The slug array dynamically captures all the path segments after /.

// For /about/team, slug = ['about', 'team'].
// For /products/phones, slug = ['products', 'phones'].

// paste the sing in and sign up url in .env file so that clerk will know which routes is for sign in and sign up


//DATABASE

//login in the website neon.tech
  // then go overview->roles and database --> add role  then copy password
  // then add data base
  // then go to dashboard select our database name and role and then copy the conencting string
    //this string will connect our app to the database paste that string in .env file in variable   DATABASE_URL









//CSS
//css given to header comp mx-auto py-2 px-4 flex justify-between