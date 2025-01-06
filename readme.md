🐔 **FarmStock Inventory**
FarmStock Inventory is a simple web application that allows users to order parts of a chicken (legs, wings, and flesh). The app checks if enough inventory is available, calculates the weight of the order, and displays the details such as the number of chickens required and remaining inventory.

Features
**Inventory Tracking**: Keeps track of the available chicken parts (legs, wings, and flesh).
**Order Handling**: Users can order chicken parts, and the app ensures there’s enough inventory to fulfill the request.
**Inventory Management**: Displays remaining inventory and how many chickens are needed to fulfill the order.
**Error Handling**: If the requested quantity exceeds the available stock, an error message is displayed.
Technologies Used
**HTML**: Structure of the page.
**CSS**: Styling of the page with a clean and modern UI.
**JavaScript**: Logic for inventory management, order calculation, and error handling.

**Installation**
To run the project locally, follow these steps:

**Clone the repository:**
git clone https://github.com/Rahuljha2210/FarmStock.git
Navigate into the project folder:




**How It Works**
The app displays a form where users can enter the number of legs, wings, and flesh portions they want to order.
Upon form submission, the app:
Checks if the requested quantities are available in inventory.
If enough inventory is available, the app calculates the weight of the order and the number of chickens needed.
Displays the order details and remaining inventory.
If the requested quantities exceed the available inventory, an error message is shown.
The total weight of the order is calculated in kilograms and displayed to the user.

**Example:**
If a user orders 10 legs, 15 wings, and 5 portions of flesh, the application will display:
The weight of the order in kilograms.
The total number of chickens required.
The remaining inventory of legs, wings, and flesh portions.

**User Interface
Form:**
Legs: Number of legs required (up to 60).
Wings: Number of wings required (up to 60).
Flesh: Number of flesh portions required (up to 30).
Error Message:
If the order exceeds the available inventory, an error message will be displayed.
**
Results:**
Displays the total weight of the order in kilograms.
Displays the number of chickens needed.
Displays the remaining inventory.
