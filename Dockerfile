# Step 1: Use the official nginx image as the base
FROM nginx:alpine

# Step 2: Copy the website files into the container
COPY . /usr/share/nginx/html

# Step 3: Expose port 80 to serve the website
EXPOSE 80

# The website will be served by nginx automatically
