FROM node:lts-hydrogen

COPY ./build /peerprep_question_service_api/
COPY package.json /peerprep_question_service_api/
COPY package-lock.json /peerprep_question_service_api/

WORKDIR /peerprep_question_service_api

RUN npm install --omit=dev -y

CMD node server.js
