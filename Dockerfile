FROM node:current-slim

WORKDIR /app
COPY package.json .

COPY . .

RUN npm install
RUN npm run build

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3001

EXPOSE 3001

CMD ["npm", "start"]


# 'from inside the app directory, run
# $ docker build --tag windflow.io:0.1 .
# 'typing docker image ls will return
# 'REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
# 'windflow.io           0.1                 e92aa7ad7cf2        41 seconds ago      423MB
# 'then, to run it...
# $ docker run --publish 3300:3000 --detach --name wfio3 windflow.io:0.1
# 'this runs the container, detached (in the background) mapping port 8000 in the real world to 3000 inside the container
# 'with a shortcut called wfio








