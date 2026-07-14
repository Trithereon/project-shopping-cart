# Project: Shopping Cart

from The Odin Project

## Assignment

1. Create a new React project.
2. Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need? It’s a good idea to note this down somewhere you can easily get to and refer back and add to it to keep track.
3. You should have three pages: a home page, a shop page, and a cart page. Let the user navigate between the pages with a navigation bar, which will be shown on all pages.
4. To your homepage, you can add whatever you’d like! A few images or information will be totally fine; it doesn’t have to be something fancy - it’s to test the concepts taught thus far.
5. On the shop page, build individual card elements for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.
6. When there are items in your cart, the cart page link in the navbar should indicate how many items are in your cart. This should update in real time as the user adds or removes items from their cart.
7. On the cart page, you should display the items and their quantities, and allow users to increase/decrease the quantity of items in their cart (including removal if appropriate). There’s no need to implement any checkout/payment system.
8. Fetch your shop items from FakeStore API or something similar.
9. Make sure to test your app thoroughly using the React Testing Library. Be careful not to test react-router directly, since it is an external library and the developers working on it must have tested the library already.
10. As usual, style your application so you can show it off! You have a host of options provided already.
11. Lastly, it’s time to deploy it! Depending on what hosting solution you’re using, you may need some additional configuration so that your routing is handled correctly as a single page application (SPA).
    **Netlify**: You need to add a \_redirects file to the public/ directory of your project. Copy the following to redirect all routes to the index page and let react-router handle the rest. You can read more about this at the Netlify documentation on redirects.

`/* /index.html 200`
