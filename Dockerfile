# Use Nginx as the base image
FROM nginx:latest

# Copy the website files to the Nginx container
COPY ./ /usr/share/nginx/html

# Set the default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]