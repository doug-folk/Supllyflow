# supllyflow-api

## Rodar Api

### Entrar na pasta da api

```bash
    cd supllyflow-api
```

### Configurar arquivo .env

- Duplicar arquivo .env.example
- Renomear .env.example para .env
- No arquivo .env colocar ip da maquina fisica no local "meu_ip"

### Iniciar docker

```bash
    docker-compose up --build
```

### Aplicar migrations no banco

```bash
    npx prisma migrate dev
```

## Rodar App

### Entrar na pasta app

### Executar o comando

```bash
    npx expo start
```
