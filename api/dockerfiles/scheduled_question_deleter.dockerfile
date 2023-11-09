FROM node:lts-hydrogen

COPY ./build /peerprep_question_service_scheduled_question_deleter/
COPY package.json /peerprep_question_service_scheduled_question_deleter/
COPY package-lock.json /peerprep_question_service_scheduled_question_deleter/

WORKDIR /peerprep_question_service_scheduled_question_deleter

RUN npm install --omit=dev -y

CMD node ./jobs/scheduled_question_deleter.js
