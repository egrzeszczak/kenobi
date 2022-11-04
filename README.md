# kenobi

This is a K8s learning / testing ground

Base Nuxt 3 application to run in a K8s pod
 
## Setup

1. Deploy backend (MongoDB)
```
kubectl apply -f k8s/grievous.yml
```

2. Deploy frontend (Nuxt)
```
kubectl apply -f k8s/kenobi.yml
```