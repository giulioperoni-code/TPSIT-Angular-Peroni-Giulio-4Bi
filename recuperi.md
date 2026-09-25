# Recuperi Git

1. **Togliere un file dall'indice**

   Comando: `git restore --staged prova-recupero.txt`

   Effetto: il file passa dall'indice all'area di lavoro; la modifica resta presente e non viene persa.

2. **Scartare una modifica nell'area di lavoro**

   Comando: `git restore README.md`

   Effetto: la modifica locale viene eliminata e il file torna alla versione dell'ultimo commit.

3. **Correggere l'ultimo messaggio di commit**

   Comando: `git commit --amend -m "docs(recovery): document recovery commands"`

   Effetto: il messaggio dell'ultimo commit viene sostituito senza creare un nuovo commit; l'identificativo del commit cambia.