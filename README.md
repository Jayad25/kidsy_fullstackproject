# Kidsy

 [Kidsy Live](https://kidsy.herokuapp.com/#/)


Kidsy is a shopping website for Kids Products. I used React and Redux on the frontend with Ruby on Rails on the backend, utilizing PostgreSQL as my datbase,AWS to store images.

## Features
* Secure frontend to backend user authentication using BCrypt.
* Users can create, edit,delete and see products that they have.
* Users can add  products to shopping cart.
* Users can also search for products by the name.
* Users not logged in will be redirected to sign in/register if trying to sell products.


![Homepage](https://i.imgur.com/0lv5Wvh.png)



### Sign In and Register

![Sign In & Register](https://i.imgur.com/eP5cerN.jpg)



### Products


![All Products](https://i.imgur.com/SkhXdum.png)
[](https://i.imgur.com/Ozwhy28.png)


![Search](https://i.imgur.com/aSOxQJh.png)




### Add to Cart

![Add to Cart](https://i.imgur.com/VNB12Ik.png)



### User's Profile

![Profile](https://i.imgur.com/Crw0was.png)



### Create A Product

![Create A Product](https://i.imgur.com/FVYMfb7.png)




### Editing A Product

![Edit a Product](https://i.imgur.com/YsLMGCY.png)




### Deleting A Product
![Delete a Product](https://i.imgur.com/vBBKh22.png)

```Javascript
// USers cann't list their product without loggedIN
const Protected = ({ component: Component, path, loggedIn, exact, redirectToModal }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Test redirectToModal={redirectToModal} />
            )
    )} />
);
```

### Additional Resources
* [Wiki](https://github.com/Jayad25/kidsy_fullstackproject/wiki)
* [Sample State](https://github.com/Jayad25/kidsy_fullstackproject/wiki/Sample-State)
* [Database Schema](https://github.com/Jayad25/kidsy_fullstackproject/wiki/Database-Schema)


## Possible Future Features
In the future I would like to add:
* Show cart page
* Comments/Reviews
* Add Loading
