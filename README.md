# ClickBasket

ClickBasket is a browser-based e-commerce frontend built with HTML, CSS, and vanilla JavaScript. The project demonstrates a simple shopping journey from the home page to registration or login, product browsing, product details, and a local-storage shopping cart.

This is a frontend-only project. It does not use a backend, database, package manager, build tool, or external JavaScript library.

## Features

- Home page with links to the main shopping and account pages
- Registration page with required-field and password confirmation checks
- Login page with basic empty-field validation
- Product catalog with six products:
	- Mobile - INR 20,000
	- Laptop - INR 50,000
	- Watch - INR 3,000
	- Headphone - INR 2,000
	- Camera - INR 30,000
	- Tablet - INR 15,000
- Product detail page populated from the selected catalog item
- Add-to-cart flow backed by browser `localStorage`
- Cart page that displays products added during the current browser session
- Buy Now action with an order-success alert and return to the home page
- Responsive page layouts using HTML and embedded CSS
- Local image assets stored in the `assests/` directory

## User Flow

1. Open the home page.
2. Use **Register** to complete the registration form, or use **Login** to continue directly to the products page.
3. Open **Products** and select a product.
4. Review the product details and choose **Add to Cart**.
5. View the selected items on the cart page.
6. Choose **Buy Now** to display the order-success message.

## Requirements

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- Python 3, or another local static HTTP server

No `npm install` or dependency installation is required.

## Run Locally

### Option 1: Python static server

Open PowerShell in the project directory and run:

```powershell
py -m http.server 8000
```

If the `py` command is unavailable, use:

```powershell
python -m http.server 8000
```

Open the site at:

```text
http://localhost:8000/index.html
```

Stop the server with `Ctrl+C`.

### Option 2: Open the file directly

Double-click `index.html` or open it in a browser. A local server is recommended because it provides more consistent browser behavior for static assets and navigation.

## Project Structure

```text
E_Commerce_ClickBasket/
|-- index.html       Home page
|-- index.js         Home page behavior
|-- product.html     Product catalog
|-- product.js       Product selection and localStorage handoff
|-- detail.html      Selected product details
|-- details.js       Product details and cart actions
|-- cart.html        Shopping cart page
|-- cart.js          Cart rendering from localStorage
|-- login.html       Login form
|-- login.js         Login validation and redirect
|-- register.html    Registration form
|-- register.js      Registration validation and redirect
|-- contact.html     Contact page placeholder
|-- script.js        Older shared script, currently not referenced by a page
|-- assests/         Product and page image assets
`-- README.md        Project documentation
```

> The directory is named `assests` in the existing project and is intentionally shown with that spelling.

## Browser Storage

The application uses `localStorage` to pass data between pages:

- `product` stores the product selected on the catalog page.
- `cart` stores products added from the detail page.
- Registration-related data may be written by the current frontend script.

This data is stored only in the current browser profile. Clearing site data or using another browser removes or hides the stored cart state.

## Current Limitations

- Authentication is frontend validation only; there is no server-side account system.
- Registration and login do not verify users against a database.
- The cart currently has no quantity controls, remove action, clear-cart action, subtotal, total, or real checkout.
- The contact page is currently a placeholder.
- Opening `detail.html` without first selecting a product may not display a valid product.
- Some image paths and duplicated assets may need cleanup when deploying outside the current folder structure.
- Credentials and cart data are not suitable for production because they are stored in browser `localStorage`.

## Future Improvements

- Add a backend API and database for users, products, carts, and orders.
- Implement secure authentication and password handling.
- Add cart quantity, remove, totals, and checkout functionality.
- Complete the contact page and add form handling.
- Consolidate product data into one reusable JavaScript data structure.
- Fix unused or duplicated assets and normalize the `assests` directory name.

## License

No license has been specified for this project.
