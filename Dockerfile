# Parametr VERSION bude specifikován při spuštění kontejneru
ARG VERSION=latest
# Nový obraz bude vytvořen ze základního obrazu (image) node a verze specifikované parametrem VERSION
FROM node:${VERSION}
# Vytvoření pracovního adresáře v obrazu, do něhož budou nakopírovány soubory aplikace
WORKDIR /app
# Zkopírování souboru package.json do pracovního adresáře
COPY package.json ./
# Spuštění příkazu "npm install" v obrazu - nainstaluje všechny potřebné moduly
RUN npm install
# Zkopírování obsahu aplikační složky do pracovního adresáře obrazu (ignorovány budou položky v souboru .dockerignore)
COPY . .
# Port, na němž bude v kontejneru přístupná serverová aplikace
EXPOSE 5000
# Provedení příkazu "node" s parametrem "server.js" v konzoli kontejneru (zajistí automatické spuštění serverové aplikace)
CMD [ "node", "server.js" ]
