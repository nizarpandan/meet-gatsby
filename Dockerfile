FROM node:lts-slim as build

RUN npm install -g pnpm@latest

WORKDIR /app

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY . .
RUN pnpm install
RUN pnpm run build

FROM node:lts-slim as run

RUN npm install -g pnpm@latest

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=build /app/build ./build
RUN pnpm install --prod

EXPOSE 3000
ENTRYPOINT [ "pnpm", "run", "start" ]