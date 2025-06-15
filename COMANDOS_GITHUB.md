# Comandos para carregar no GitHub

## 1. Preparar os arquivos
```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Versão inicial do dashboard de ferramentas web"
```

## 2. Conectar ao GitHub (substitua URL_DO_SEU_REPOSITORIO)
```bash
# Adicionar origem remota
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# Ou se já existe:
git remote set-url origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
```

## 3. Enviar para o GitHub
```bash
# Fazer push para a branch main
git push -u origin main
```

## Para atualizações futuras:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

## Verificar status atual:
```bash
git status
git log --oneline
```