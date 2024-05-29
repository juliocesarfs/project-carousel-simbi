# Frontend Listagem de projetos

Para evitar erros de versões, recomendo rodar utilizando o docker.

- ```docker build -t frontend-simbi:dev .```
- ```docker run -p 5173:5173 frontend-simbi:dev```

Ou apenas certifique-se de estar com o Node **20.12.2** e rode:
- ```npm run dev```