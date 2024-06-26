# Loan App

Welcome to the Loan App! This application provides a platform for managing loans for both administrators and clients.

## About the Application

The Loan App offers a seamless experience for users to register, request loans with customized terms, and manage their repayments. Administrators have the authority to review loan requests, approve or reject them, and monitor the overall loan portfolio.

### User Registration and Loan Request

Users can easily register on the platform by providing necessary details. Once registered, they can submit loan requests specifying the desired loan amount and repayment terms. The application allows users to customize repayment schedules based on their financial preferences.

### Loan Approval Process

Loan requests are processed by administrators who review the user's information. Administrators have the discretion to approve or reject loan requests based on predefined criteria such as creditworthiness and risk assessment.

### Repayment Management

Upon approval, users are notified, and they can start making weekly payments towards their loans. The application provides a user-friendly interface for managing repayments, tracking payment history.

### Additional Loan Requests

Users have the flexibility to request additional loan amounts if needed. Whether it's for unexpected expenses or personal investments, users can submit new loan requests..

## Cloning the Project from GitHub

To clone the Loan App project from GitHub, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Use the following command to clone the repository:

   ```bash
   git clone https://github.com/Yashop181/Loan-Project-Mern.git
   
   cd mini-loan-app


### Running on Local Server

If you prefer to run the application locally, follow these steps:

#### Using npm

1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Run the client: `npm run dev`
4. Navigate to the server directory: `cd ../server`
5. Install dependencies: `npm install`
6. Run the server: `nodemon`

Make sure the server is running on Port 5000 and the client on Port 5173.

## Admin Credentials

To upgrade a user to an administrator:

1. Register as a User: Begin by registering on the platform as a regular user.
2. Access MongoDB: Once registered, access the MongoDB database associated with the Loan App.
3. Modify User Profile:
   - Locate the user profile you want to upgrade within the MongoDB database.
   - Find the `user_type` field in the user's profile document.
   - Change the value of `user_type` from "user" to "admin". This action grants administrative privileges to the user.
5. Log in as an Administrator:
   - Use the provided admin credentials to log in to the Loan App.

You can log in as an administrator using the following credentials:

- **Email:** yash123@gmail.com
- **Password:** yash1234

By following these steps, you can seamlessly transition from being a regular user to an administrator and enjoy managing loans with enhanced privileges.

Feel free to explore and enjoy managing your loans!

