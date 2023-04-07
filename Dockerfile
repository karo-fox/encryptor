FROM node:17-alpine3.14 as build-vue
WORKDIR /app
COPY ./client/package*.json /
RUN npm install
COPY ./client .
RUN npm run build

FROM nginx:stable-alpine as production
WORKDIR /app
RUN apk update && apk add --no-cache python3 && \
    pip3 install --upgrade pip setuptools && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
    if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi && \
    rm -r /root/.cache
RUN apk update && apk add gcc python3-dev musl-dev
COPY --from=build-vue /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./backend/requirements.txt .
RUN pip install -r requirements.txt
RUN pip install gunicorn
ENV FLASK_APP=api
COPY ./backend .
CMD gunicorn -b "0.0.0.0:5000" "api:create_app()" --daemon && \
    sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && \
    nginx -g 'daemon off;'