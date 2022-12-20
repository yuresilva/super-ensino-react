FROM node:12
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
