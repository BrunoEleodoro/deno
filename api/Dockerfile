FROM hayd/alpine-deno:1.0.0

EXPOSE 1993

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]