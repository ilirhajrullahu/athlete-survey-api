FROM node:16

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json tsconfig.json wait.sh ./
COPY src ./src
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm config set strict-ssl false
RUN npm update npm –g
RUN npm config set strict-ssl true
RUN npm install
RUN npm run build
RUN npx prisma generate
EXPOSE 4000
CMD /wait && npm start