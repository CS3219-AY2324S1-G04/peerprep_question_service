FROM node:hydrogen

RUN apt-get update
RUN apt-get install unzip -y

ENV TZ=Asia/Singapore
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN date

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . .

EXPOSE 9001

CMD [ "npm", "start", "dev"]
