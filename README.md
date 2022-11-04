# kenobi

This is a K8s learning / testing ground

Base Nuxt 3 application to run in a K8s cluster that connects to a MongoDB instance
 
## Setup

Run via Docker
```
docker run --rm -d --env NUXT_MONGO_ADDRESS=localhost -p 3000:3000/tcp egrzeszczak/kenobi
```

Or run in a [K8s cluster](https://github.com/egrzeszczak/utapau)

## Directory tree

```
├── app.vue
├── Dockerfile
├── nuxt.config.ts
├── package.json
├── package-lock.json
├── public
│   └── hello-there.png
├── README.md
├── server
│   ├── api
│   │   └── hostname.get.ts
│   └── database
│       └── grievous.ts
├── tailwind.config.js
└── tsconfig.json
```