FROM ubuntu:12.04
MAINTAINER Brian Ketelsen "bketelsen@gmail.com"
RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y install nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
RUN mkdir /etc/nginx/ssl
ADD default /etc/nginx/sites-available/default

ADD . /var/www/

EXPOSE 80

CMD ["nginx"]

