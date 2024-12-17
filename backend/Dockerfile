# Etapa 1: Build da aplicação
FROM maven:3.8.7-eclipse-temurin-17 AS builder
WORKDIR /app
# Copia o pom.xml primeiro para aproveitar cache do Docker
COPY pom.xml ./
# Baixa dependências sem o código fonte para utilizar cache
RUN mvn dependency:go-offline

# Agora copia o restante do código
COPY src ./src
# Compila e empacota a aplicação, gerando o jar no target/
RUN mvn clean package -DskipTests

# Etapa 2: Imagem final para execução
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
# Copia o jar da fase anterior
COPY --from=builder /app/target/*.jar app.jar

# Ajusta a porta caso seu Spring Boot esteja configurado para outra
EXPOSE 8002

# Comando para rodar o jar da aplicação
ENTRYPOINT ["java","-jar","app.jar"]
