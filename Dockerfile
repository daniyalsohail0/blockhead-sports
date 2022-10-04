# ================================== PRODUCTION ===================================
ARG INSTALL_NODE_VERSION=${INSTALL_NODE_VERSION}
FROM node:${INSTALL_NODE_VERSION} AS production
WORKDIR /usr/src
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --production
COPY . ./
RUN npm run build
EXPOSE 3000
CMD npm run start