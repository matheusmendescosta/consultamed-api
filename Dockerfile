FROM node:18

ARG USER_ID
ARG GROUP_ID
ARG PORT

RUN npm install -g npm@9.5.0

ENV INSTALL_PATH /opt/app
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH
COPY . .
RUN rm -rf node_modules

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE $PORT

USER $USER_ID

CMD ["npm", "run", "dev"]