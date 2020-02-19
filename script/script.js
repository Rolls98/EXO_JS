(function () {
    var btn_ajout = document.querySelector(".btn_ajout"),
        input = document.querySelector("input"),
        liste = document.querySelector(".liste");

    window.load = load(); //charger les elements au demarrage de la page;

    btn_ajout.addEventListener("click", function (e) {
        e.preventDefault();

        if (input.value) {
            /*
                si input n'est pas vide
                alors on cree une balise li et span
                puis on ajoute span à li enfin d'ajouter
                li lui meme à la liste
                =>span contient la croix de la supprission de li;
            */
            var li = document.createElement("li"),
                span = document.createElement("span");
            span.className = "close";
            span.innerHTML = "X";

            li.append(input.value, span);
            liste.appendChild(li);
            input.value = "";
            save(); //Sauvagarder le dernier element dans LocalStorage
            ferme(); //Mettre a jour les closes pour pouvoir supprimer le nouveau element ajouter

        } else {
            alert("vous n'avez rien saisir");
        }
    });

    ferme();

    function ferme() {
        var closes = document.querySelectorAll(".close"); //recuperer toute les fermerture des elements li
        closes.forEach(close => {
            var p = close.parentNode; //recuperer le parent de l'élement cliqué
            close.addEventListener("click", (e) => {
                e.stopPropagation();
                p.remove(); //supprimer le li de la fermerture x dont le clique a été fait
                save(); //Sauvegarder encore la liste
            });
        });
    }

    function save() {
        var children = []; //initialisation
        for (var i = 0; i < liste.children.length; i++) {
            children.push(liste.children[i].outerHTML); //ajouter tout les element de la liste ecrits en html
        }
        localStorage.setItem("element", children.join("|")); //conversion du tableau en chaine de caractere en separant par | et sauvegarder dans LocalStorage(espace de memoire en interne);
    }

    /* 
        @no params;
        @no return;
        la fonction verifie si il existe une sauvegarde dans localStorage
        => si oui alors on vide la liste et on remplie par la sauvegarde
        => si non, on laisse la liste par default;
    
    
    */

    function load() {
        if (localStorage.getItem("element")) {
            liste.innerHTML = "";
            var result = "";
            var items = localStorage.getItem("element").split("|");
            items.forEach((item) => {
                result += item;
            });
            liste.innerHTML = result;
            ferme();
        }
    }
})();