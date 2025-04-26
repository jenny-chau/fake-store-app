# Fake Store E-Commerce App

## Project: 
- Create a fake store e-commerce app that displays products and allows for addition, modification, and deletion of products by interacting with an external API (FakeStoreAPI)
    - Uses an external API (FakeStoreAPI) for data management
    - Receive, update, delete products by interacting with the API
> [!IMPORTANT]
> IMPORTANT NOTE: Products on the page do not actually change when adding/editing/deleting products. A success or error message will simply display to the user upon the successful/failed API call.

## Languages and Libraries Used:
- React
- React Bootstrap

## Key Elements Used:
- React
    - useState, useNavigate, useEffect, Axios, React Router
- Bootstrap
    - Card, Modal, Alert, Spinner, Button, Form, Image, Nav, NavBar

## App Pages (related component .jsx file in parenthesis):
- **Home Page (HomePage.jsx)**
    - Welcome message
    - Button to link to the product list page
- **Product List Page (ProductList.jsx)**
    - List of all products organized in cards (calls ProductCard.jsx)
        - Each product has a button to view more details about the item
    - When the "Details" button is clicked, the user is redirected to the product detail page (ProductDetails.jsx)
        - Displays more info about the item (title, category, detail, price) and an "Add to cart" button that is currently not functional
        - Also has "Edit Product" and "Delete Product" buttons
            - "Edit Product" button brings up a Modal with the current product information filled in (EditModal.jsx and ProductForm.jsx)
                - Handles successful update/errors by notifying users appropriately
            - "Delete Product" button brings up a delete confirmation modal (DeleteModal.jsx)
                - User must confirm product delete before the API is called to delete the product.
                - Also handles successful deletion/errors appropriately by notifying users.
- **Add Product Page (AddProduct.jsx)**
    - Form for user to fill out to add a product
    - Form is displayed using the same component (ProductForm.jsx) as when the product edit modal is displayed.
    - A success modal is displayed the notify the user the product has been successfully added (AddProductModal.jsx)
- **Not Found Page (NotFound.jsx)**
    - Not found error page will load if link path is unknown
- **All pages have a navbar the collapses for responsive design and a footer (NavBar.jsx and Footer.jsx)**