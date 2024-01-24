# PLSComeback
_This is the BackEnd branch of a small IT school project_

**API**

The API is built using ExpressJS. It communicates with a MongoDB docker (in the docker compose file).
To run the API, you have to first launch the docker compose through :
```bash
docker-compose up
```

Then you can launch the Node.JS server like that (in debug mode for development)
```bash
DEBUG:api* npm start
```
> [!note]
> You have to be in the `api/` folder
