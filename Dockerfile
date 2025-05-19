FROM node:20

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma
COPY server ./server

RUN npm install
RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 3333

CMD ["npm", "run", "dev"]
