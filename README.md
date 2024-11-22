# Artifex - AI Image Generator

## Overview
Artifex is a full-stack AI image generation application that allows users to create unique images from text prompts using OpenAI's DALL-E model. The project demonstrates advanced web development and AI integration skills.

## 🚀 Features
- Generate images from text descriptions
- Responsive and modern user interface
- Cloud-based image storage with Cloudinary
- Seamless user experience

## 🛠 Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI DALL-E
- **Image Storage**: Cloudinary

## 🔗 Live Demo
[Artifex AI Image Generator](https://artifex.host/)

## ⚠️ Quick Request
Please note that the server may go to sleep during periods of inactivity. If you experience delays, kindly reload the page a couple of times when accessing the link to reactivate the server.

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/artifex.git

# Install dependencies
cd artifex
npm install

# Run the application in two steps 

# For the server:
cd server
npm install
npm run server


# For the client:
Open a new Bash Terminal
cd artifex
cd client
npm install
npm start
```

## 🌟 How It Works
1. Enter a text description
2. Click generate
3. Receive a unique AI-generated image

## 📝 Key Implementations
- Responsive UI design
- Secure API integrations
- Efficient image management
- Smooth user interaction

## Setup
To set up the environment for your Artifex AI Image Generator project, follow these steps:

1. Navigate to the `server` directory in your project.

2. Create a new file named `.env` in the `server` directory.

3. Open the `.env` file and add the following content:

```
MONGODB_URL="Replace with your url"
OPEN_AI_KEY="Replace with your key"
CLOUDINARY_CLOUD_NAME="Replace with yours"
CLOUDINARY_API_KEY="Your api key"
CLOUDINARY_API_SECRET="Your app secret key"
```

4. Replace the placeholder values with your actual credentials:
   - Add your MongoDB connection URL
   - Insert your OpenAI API key
   - Enter your Cloudinary cloud name
   - Provide your Cloudinary API key
   - Include your Cloudinary API secret

5. Save the `.env` file.

6. Ensure that `.env` is listed in your `.gitignore` file to prevent sensitive information from being committed to version control.

This setup will allow your application to securely access the necessary services for database connectivity, AI image generation, and cloud-based image storage.


## 🤝 Contributing
Contributions are welcome! Please check the issues page.

## 📄 License
This project is open-source. This README format clearly outlines what Artifex is, its features, installation instructions, and includes your quick request about reloading the page to reactivate the server. This should help users understand how to interact with your application effectively.

