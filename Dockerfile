FROM node:18
 
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
