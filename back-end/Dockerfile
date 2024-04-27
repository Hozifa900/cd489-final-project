FROM adoptopenjdk/openjdk17:alpine-jre
ARG JAR_FILE=target/*.jar
COPY ./target/SpringAPI-0.0.1.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
