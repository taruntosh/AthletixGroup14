# AthletixNodeBackend
# Project Setup

## Prerequisites:
> [!CAUTION]
Node.js ( version v21.1.0 or later ), MongoDB URI

## Install dependencies:
sudo npm install(MAC/LINUX) or npm install(WINDOWS WITH ADMINISTRATIVE ACCESS)


## Environment Variables:

1. Create a .env file in the root directory
2. Add the following variables with appropriate values

> [!IMPORTANT]
````
# Database connection string
MONGO_URI="mongo db URI"

# Frontend URL (adjust if needed)
ORIGIN="http://localhost:3000"

# Email credentials for sending password resets and OTPs
EMAIL="email@example.com"
PASSWORD="email-password"

# Token and cookie expiration settings
LOGIN_TOKEN_EXPIRATION="30d"  # Days
OTP_EXPIRATION_TIME="120000"  # Milliseconds
PASSWORD_RESET_TOKEN_EXPIRATION="2m"  # Minutes
COOKIE_EXPIRATION_DAYS="30"    # Days

# Secret key for jwt security
SECRET_KEY="your-secret-key"

# Environment (production/development)
PRODUCTION="false" # Initially set to false for development
````
