FROM node:18-alpine
LABEL maintainer="ernest.grzeszczak@protonmail.com"

ARG BUILD_DATE
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.name="egrzeszczak/kenobi"
LABEL org.label-schema.description="Simple Nuxt web application to run in a Kubernetes cluster"
LABEL org.label-schema.url="http://egrzeszczak.netlify.app/"
LABEL org.label-schema.docker.cmd="docker run --rm -d -p 3000:3000/tcp egrzeszczak/kenobi"

RUN mkdir -p /app

COPY /app /app

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000/tcp

ENTRYPOINT ["node", "/app/server/index.mjs"]