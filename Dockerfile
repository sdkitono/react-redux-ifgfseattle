FROM node:5.8
MAINTAINER Samuel Kitono <samuel@kitono.id>

# Create app directory
RUN mkdir -p /usr/src/react-redux-ifgfseattle
WORKDIR /usr/src/react-redux-ifgfseattle

# Install dependencies first so we do not have to this everytime
COPY package.json /usr/src/react-redux-ifgfseattle
RUN npm install

# Copy in the application code from your work station at the current directory
# over to the working directory.
COPY . .

# Expose port and then start the app
EXPOSE 8080
RUN npm run build
CMD [ "npm", "run", "start" ]

