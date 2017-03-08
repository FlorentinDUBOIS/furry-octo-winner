FROM frekele/gradle

RUN mkdir -p /opt/app/build/resources/main/public

WORKDIR /opt/app

EXPOSE 8080

CMD gradle bootRun
