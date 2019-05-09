FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR ./

# Installing dependencies
COPY package*.json ./
RUN yarn

# Copying source files
COPY . .

# Building app
RUN yarn

# Running the app
CMD [ "yarn", "web" ]
