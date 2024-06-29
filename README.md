# UK Right to Work Sharecode Checker

This project demonstrates how to integrate with the UK Right to Work Sharecode API using a Next.js application. The application allows users to submit a form with their share code, forename, surname, and date of birth, which is then checked via an API.

## Prerequisites

- Node.js v14+
- React v16+
- npm or yarn
- A RapidAPI account
- Signed up to the UK RTW Sharecode API (You can sign up [here](https://rapidapi.com/jamesoneill997/api/uk-right-to-work-sharecode-checker))

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rtw-sharecode-checker.git
cd rtw-sharecode-checker
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory of your project and add the following environment variables. Replace the placeholder values with your actual RapidAPI credentials and other required values.

```
NEXT_PUBLIC_RAPIDAPI_HOST=uk-right-to-work-sharecode-checker.p.rapidapi.com
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key
RTW_COMPANY_NAME=Your Company Name
RTW_ALLOW_SPONSORSHIP=false
RTW_ALLOW_STUDENT=true
```

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Project Structure

- `src/app/api/check-rtw/route.tsx`: API route for checking the right to work using the provided share code and other details.
- `public/`: Public assets such as images.
- `src/app/`: Contains the main application components and pages.
- `next.config.mjs`: Configuration file for Next.js.
- `tailwind.config.ts`: Tailwind CSS configuration.

## API Endpoint

The API endpoint is defined in `src/app/api/check-rtw/route.tsx`. It processes GET requests and sends a request to the UK Right to Work Sharecode API using the provided parameters.

### Example Request

```bash
GET /api/check-rtw?share_code=W123X456Y&forename=John&surname=Doe&dob=07-09-1999
```

### Example Response

```json
{
  "data": {
  "code": 200,
  "error": null,
  "status": {
    "conditions": "They can also work on a placement which is part of the course their student visa is based on. The work placement must be:",
    "details": "They have permission to work in the UK until 30 March 2028, subject to the conditions and restrictions below.",
    "expiry_date": "30/03/2028",
    "name": "John Doe",
    "outcome": "REJECTED",
    "rejected_reason": "STUDENT",
    "start_date": "12/04/2024",
    "title": "Right to work"
  }
}
}
```

## Customization

- **Form Fields**: Modify the form fields in the main component to suit your requirements.
- **Styling**: Customize the styling using Tailwind CSS classes.

## Troubleshooting

- Ensure all environment variables are set correctly in your `.env.local` file.
- Check the browser console and terminal for any error messages.
- Verify your RapidAPI credentials and ensure they have the necessary permissions.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


