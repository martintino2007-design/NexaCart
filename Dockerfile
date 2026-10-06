FROM tomcat:9.0-jdk17-temurin
RUN rm -rf /usr/local/tomcat/webapps/ROOT
COPY target/dailymart.war /usr/local/tomcat/webapps/dailymart.war
EXPOSE 8080
CMD ["catalina.sh","run"]
