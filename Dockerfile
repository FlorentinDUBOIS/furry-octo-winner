FROM frekele/gradle

WORKDIR /opt/app

EXPOSE 8080

CMD gradle bootRun
