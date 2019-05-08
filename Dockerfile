FROM microsoft/aspnetcore:2.0 AS build-env
WORKDIR /app

#RUN dotnet publish -c Release -o out

COPY . ./

# Copy csproj and restore as distinct layers
#COPY *.csproj ./
#RUN dotnet restore

# Copy everything else and build

# Build runtime image
#FROM microsoft/dotnet:aspnetcore-runtime
#WORKDIR /app
#COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "AndCultureDemo.dll"]