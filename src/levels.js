// 40 retos originales de Pascal, revisados. Todos los casos se muestran al alumno.
export const levels = [
  {
    "id": 1,
    "code": "GREMLIN1",
    "enemy": {
      "name": "Gremlin Literal",
      "hp": 30,
      "kind": "gremlin"
    },
    "narrative": "Un pequeño y molesto Gremlin Literal ha aparecido. Solo reacciona a su propio nombre. ¡Lanza un hechizo que coincida exactamente con la palabra \"bicho\"!",
    "hint": "Para encontrar una coincidencia exacta, simplemente escribe los caracteres literales.",
    "solution": "bicho",
    "damage": 30,
    "reward": 50,
    "concept": "Texto literal",
    "mode": "full",
    "positive": [
      "bicho"
    ],
    "negative": [
      "bichos",
      "Bicho",
      "hechizo"
    ],
    "explanation": "Para encontrar una coincidencia exacta, simplemente escribe los caracteres literales.",
    "targets": null
  },
  {
    "id": 2,
    "code": "DUENDE2",
    "enemy": {
      "name": "Duende indeciso",
      "hp": 40,
      "kind": "duende"
    },
    "narrative": "Este duende no puede decidir si es 'gris' o 'gres'. Crea un hechizo que atrape ambas palabras.",
    "hint": "Usa corchetes [...] para crear un conjunto de caracteres. Por ejemplo, [ae] coincidirá con 'a' o 'e'.",
    "solution": "gr[ie]s",
    "damage": 20,
    "reward": 60,
    "concept": "Conjuntos",
    "mode": "full",
    "positive": [
      "gris",
      "gres"
    ],
    "negative": [
      "gros",
      "grs",
      "xgris",
      "gresx"
    ],
    "explanation": "Usa corchetes [...] para crear un conjunto de caracteres. Por ejemplo, [ae] coincidirá con 'a' o 'e'.",
    "targets": null
  },
  {
    "id": 3,
    "code": "RANGO3",
    "enemy": {
      "name": "Duende Cambiante",
      "hp": 40,
      "kind": "duende"
    },
    "narrative": "¡El duende sigue cambiando! Ahora puede ser 'gra', 'grb' o 'grc'. Atrapa a cualquiera de ellos.",
    "hint": "Dentro de los corchetes [...], puedes definir un rango de caracteres con un guion. Por ejemplo, [a-c].",
    "solution": "gr[a-c]",
    "damage": 20,
    "reward": 60,
    "concept": "Rangos",
    "mode": "full",
    "positive": [
      "gra",
      "grb",
      "grc"
    ],
    "negative": [
      "grd",
      "gr",
      "graa"
    ],
    "explanation": "Dentro de los corchetes [...], puedes definir un rango de caracteres con un guion. Por ejemplo, [a-c].",
    "targets": null
  },
  {
    "id": 4,
    "code": "BLOB4",
    "enemy": {
      "name": "Blob Comodín",
      "hp": 50,
      "kind": "blob"
    },
    "narrative": "Un Blob Comodín aparece. Es muy escurridizo. Busca un patrón de tres letras que empiece por 'c', termine en 's' y tenga cualquier carácter en medio, como 'cas', 'cos' o 'ces'.",
    "hint": "El punto . es un comodín que representa cualquier carácter (excepto una nueva línea).",
    "solution": "c.s",
    "damage": 25,
    "reward": 70,
    "concept": "El comodín",
    "mode": "full",
    "positive": [
      "cas",
      "cos",
      "ces",
      "c9s",
      "c s"
    ],
    "negative": [
      "cs",
      "caas",
      "gas"
    ],
    "explanation": "El punto . es un comodín que representa cualquier carácter (excepto una nueva línea).",
    "targets": null
  },
  {
    "id": 5,
    "code": "INICIO5",
    "enemy": {
      "name": "Blob Anclado",
      "hp": 50,
      "kind": "blob"
    },
    "narrative": "El Blob se esconde al principio de los encantamientos. Encuentra la palabra \"magia\" solo si está al principio de la frase.",
    "hint": "Usa el acento circunflejo ^ para anclar tu patrón al inicio de la cadena.",
    "solution": "^magia",
    "damage": 25,
    "reward": 70,
    "concept": "Inicio de texto",
    "mode": "search",
    "positive": [
      "magia es poder",
      "magia",
      "magia despierta"
    ],
    "negative": [
      "el poder es magia",
      "sin magia",
      "Magia"
    ],
    "explanation": "Usa el acento circunflejo ^ para anclar tu patrón al inicio de la cadena.",
    "targets": [
      [
        {
          "text": "magia",
          "index": 0
        }
      ],
      [
        {
          "text": "magia",
          "index": 0
        }
      ],
      [
        {
          "text": "magia",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 6,
    "code": "FINAL6",
    "enemy": {
      "name": "Fantasma Final",
      "hp": 60,
      "kind": "fantasma"
    },
    "narrative": "Un Fantasma Final solo aparece al final de los susurros. Encuentra la palabra \"fin\" solo si está al final de la frase.",
    "hint": "Usa el símbolo de dólar $ para anclar tu patrón al final de la cadena.",
    "solution": "fin$",
    "damage": 30,
    "reward": 80,
    "concept": "Final de texto",
    "mode": "search",
    "positive": [
      "este es el fin",
      "fin",
      "hasta el fin"
    ],
    "negative": [
      "el fin de todo",
      "final",
      "fin aquí"
    ],
    "explanation": "Usa el símbolo de dólar $ para anclar tu patrón al final de la cadena.",
    "targets": [
      [
        {
          "text": "fin",
          "index": 11
        }
      ],
      [
        {
          "text": "fin",
          "index": 0
        }
      ],
      [
        {
          "text": "fin",
          "index": 9
        }
      ]
    ]
  },
  {
    "id": 7,
    "code": "MAS7",
    "enemy": {
      "name": "Fantasma Multiplicado",
      "hp": 60,
      "kind": "fantasma"
    },
    "narrative": "El fantasma se multiplica. Busca la palabra 'fantasma' seguida de uno o más signos de exclamación. Por ejemplo, 'fantasma!' o 'fantasma!!!'.",
    "hint": "Escribe fantasma y después !+. El + repite el signo anterior una o más veces. El signo ! no necesita una barra invertida.",
    "solution": "fantasma!+",
    "damage": 30,
    "reward": 80,
    "concept": "Una o más veces",
    "mode": "full",
    "positive": [
      "fantasma!",
      "fantasma!!!"
    ],
    "negative": [
      "fantasma",
      "fantasma?",
      "fantasma!x"
    ],
    "explanation": "Escribe fantasma y después !+. El + repite el signo anterior una o más veces. El signo ! no necesita una barra invertida.",
    "targets": null
  },
  {
    "id": 8,
    "code": "CERO8",
    "enemy": {
      "name": "Fantasma Tímido",
      "hp": 70,
      "kind": "fantasma"
    },
    "narrative": "Este fantasma a veces susurra 'ah', 'ahhh' o simplemente 'a'. Atrapa todas sus formas.",
    "hint": "El asterisco * coincide con cero o más repeticiones del carácter anterior.",
    "solution": "ah*",
    "damage": 35,
    "reward": 90,
    "concept": "Cero o más veces",
    "mode": "full",
    "positive": [
      "a",
      "ah",
      "ahhh"
    ],
    "negative": [
      "ha",
      "ahha",
      "b"
    ],
    "explanation": "El asterisco * coincide con cero o más repeticiones del carácter anterior.",
    "targets": null
  },
  {
    "id": 9,
    "code": "OPCION9",
    "enemy": {
      "name": "Espectro Bilingüe",
      "hp": 70,
      "kind": "espectro"
    },
    "narrative": "Un espectro habla dos dialectos arcanos. Atrapa tanto \"color\" como \"colour\".",
    "hint": "El signo de interrogación ? hace que el carácter anterior sea opcional (cero o una vez).",
    "solution": "colou?r",
    "damage": 35,
    "reward": 90,
    "concept": "Un carácter opcional",
    "mode": "full",
    "positive": [
      "color",
      "colour"
    ],
    "negative": [
      "colouur",
      "colr",
      "colorido"
    ],
    "explanation": "El signo de interrogación ? hace que el carácter anterior sea opcional (cero o una vez).",
    "targets": null
  },
  {
    "id": 10,
    "code": "DIGITO10",
    "enemy": {
      "name": "Golem Numérico",
      "hp": 80,
      "kind": "gremlin"
    },
    "narrative": "Un golem formado por números te bloquea el paso. Lanza un hechizo que coincida con cualquier par de dígitos, como '12' o '99'.",
    "hint": "Usa \\d para coincidir con cualquier dígito del 0 al 9.",
    "solution": "\\d\\d",
    "damage": 40,
    "reward": 100,
    "concept": "Dígitos",
    "mode": "full",
    "positive": [
      "12",
      "99",
      "45",
      "00"
    ],
    "negative": [
      "a5",
      "123",
      "1",
      "12x"
    ],
    "explanation": "Usa \\d para coincidir con cualquier dígito del 0 al 9.",
    "targets": null
  },
  {
    "id": 11,
    "code": "PALABRA11",
    "enemy": {
      "name": "Libro Parlante",
      "hp": 80,
      "kind": "espectro"
    },
    "narrative": "Este libro solo responde a palabras mágicas. Encuentra cualquier secuencia de 'caracteres de palabra'.",
    "hint": "En JavaScript, \\w equivale a [A-Za-z0-9_]: letras sin tilde, dígitos y guion bajo. \\w+ pide uno o más.",
    "solution": "\\w+",
    "damage": 40,
    "reward": 100,
    "concept": "Caracteres de palabra",
    "mode": "full",
    "positive": [
      "palabra",
      "jugador_1",
      "ABC42"
    ],
    "negative": [
      "hola-mundo",
      "café",
      "hola mundo",
      ""
    ],
    "explanation": "En JavaScript, \\w equivale a [A-Za-z0-9_]: letras sin tilde, dígitos y guion bajo. \\w+ pide uno o más.",
    "targets": null
  },
  {
    "id": 12,
    "code": "GRUPO12",
    "enemy": {
      "name": "Quimera Inestable",
      "hp": 90,
      "kind": "blob"
    },
    "narrative": "Una quimera repite su risa 'ha' varias veces. Atrapa 'haha', 'hahaha', etc.",
    "hint": "Usa paréntesis () para agrupar caracteres. Luego puedes aplicarles cuantificadores como {2,} (dos o más veces).",
    "solution": "(ha){2,}",
    "damage": 45,
    "reward": 110,
    "concept": "Grupos y repetición",
    "mode": "full",
    "positive": [
      "haha",
      "hahaha",
      "hahahaha"
    ],
    "negative": [
      "ha",
      "hahah",
      "ahaha",
      ""
    ],
    "explanation": "Usa paréntesis () para agrupar caracteres. Luego puedes aplicarles cuantificadores como {2,} (dos o más veces).",
    "targets": null
  },
  {
    "id": 13,
    "code": "OESTE13",
    "enemy": {
      "name": "Gato Sonriente",
      "hp": 90,
      "kind": "espectro"
    },
    "narrative": "El gato aparece y desaparece, dejando solo 'gato' o 'perro'. Lanza un hechizo que atrape a cualquiera de los dos.",
    "hint": "La barra vertical | actúa como un OR, permitiéndote elegir entre diferentes patrones.",
    "solution": "gato|perro",
    "damage": 45,
    "reward": 110,
    "concept": "Una opción u otra",
    "mode": "full",
    "positive": [
      "gato",
      "perro"
    ],
    "negative": [
      "loro",
      "gatito",
      "xgato",
      "perrox"
    ],
    "explanation": "La barra vertical | actúa como un OR, permitiéndote elegir entre diferentes patrones.",
    "targets": null
  },
  {
    "id": 14,
    "code": "ESCAPE14",
    "enemy": {
      "name": "Erizo Puntiagudo",
      "hp": 100,
      "kind": "gremlin"
    },
    "narrative": "Este erizo está cubierto de puntos. Necesitas un hechizo que coincida con un punto literal '.' y no con el comodín.",
    "hint": "Usa la barra invertida \\ para 'escapar' un carácter especial y tratarlo como un literal.",
    "solution": "\\.",
    "damage": 50,
    "reward": 120,
    "concept": "Caracteres especiales",
    "mode": "full",
    "positive": [
      "."
    ],
    "negative": [
      "a",
      "?",
      "..",
      ""
    ],
    "explanation": "Usa la barra invertida \\ para 'escapar' un carácter especial y tratarlo como un literal.",
    "targets": null
  },
  {
    "id": 15,
    "code": "ESPACIO15",
    "enemy": {
      "name": "Pesadilla Alada",
      "hp": 110,
      "kind": "pesadilla"
    },
    "narrative": "Una pesadilla susurra frases. Debes aislar la palabra 'de' solo cuando está rodeada de espacios.",
    "hint": "A veces, la solución más simple es la mejor. Incluye los espacios en tu patrón.",
    "solution": " de ",
    "damage": 55,
    "reward": 130,
    "concept": "Espacios literales",
    "mode": "search",
    "positive": [
      "el libro de magia",
      "poción de salud"
    ],
    "negative": [
      "el duende mágico",
      "de magia",
      "libro de",
      "el libro\tde\tmagia"
    ],
    "explanation": "A veces, la solución más simple es la mejor. Incluye los espacios en tu patrón.",
    "targets": [
      [
        {
          "text": " de ",
          "index": 8
        }
      ],
      [
        {
          "text": " de ",
          "index": 6
        }
      ]
    ]
  },
  {
    "id": 16,
    "code": "SEIS16",
    "enemy": {
      "name": "Demonio de las Sombras",
      "hp": 110,
      "kind": "pesadilla"
    },
    "narrative": "Un demonio solo es vulnerable si el encantamiento termina en el número 6.",
    "hint": "Combina un carácter literal con el ancla de final de línea $.",
    "solution": "6$",
    "damage": 55,
    "reward": 130,
    "concept": "Terminar en un número",
    "mode": "search",
    "positive": [
      "poder_arcano_6",
      "6",
      "nivel 16"
    ],
    "negative": [
      "6_dado_arcano",
      "poder_7",
      "poder_6x"
    ],
    "explanation": "Combina un carácter literal con el ancla de final de línea $.",
    "targets": [
      [
        {
          "text": "6",
          "index": 13
        }
      ],
      [
        {
          "text": "6",
          "index": 0
        }
      ],
      [
        {
          "text": "6",
          "index": 7
        }
      ]
    ]
  },
  {
    "id": 17,
    "code": "VACIO17",
    "enemy": {
      "name": "El Vacío Resonante",
      "hp": 120,
      "kind": "espectro"
    },
    "narrative": "Frente a ti, la nada. Debes lanzar un hechizo que coincida con una línea completamente vacía.",
    "hint": "¿Qué pasa si combinas el ancla de inicio ^ y el de final $ sin nada en medio?",
    "solution": "^$",
    "damage": 60,
    "reward": 140,
    "concept": "El texto vacío",
    "mode": "full",
    "positive": [
      ""
    ],
    "negative": [
      " ",
      "a",
      "\n"
    ],
    "explanation": "¿Qué pasa si combinas el ancla de inicio ^ y el de final $ sin nada en medio?",
    "targets": null
  },
  {
    "id": 18,
    "code": "RM18",
    "enemy": {
      "name": "Gárgola Bicefala",
      "hp": 120,
      "kind": "pesadilla"
    },
    "narrative": "Una gárgola protege la salida. Su encantamiento de apertura empieza con 'R' o 'M', seguido de 3 caracteres cualesquiera y termina en dos puntos ':'.",
    "hint": "Combina un conjunto de caracteres [RM] con comodines . y un literal al final.",
    "solution": "[RM]...:",
    "damage": 60,
    "reward": 140,
    "concept": "Combinar patrones",
    "mode": "full",
    "positive": [
      "Romu:",
      "Mylo:",
      "R123:",
      "Mabc:"
    ],
    "negative": [
      "Rmu:",
      "Xabc:",
      "Romuu:",
      "xRomu:"
    ],
    "explanation": "Combina un conjunto de caracteres [RM] con comodines . y un literal al final.",
    "targets": null
  },
  {
    "id": 19,
    "code": "VOCAL19",
    "enemy": {
      "name": "Eco Mágico",
      "hp": 130,
      "kind": "espectro"
    },
    "narrative": "Solo los encantamientos que comienzan por una vocal pueden romper el silencio de esta sala.",
    "hint": "Usa el ancla de inicio ^ seguido de un conjunto con todas las vocales, mayúsculas y minúsculas.",
    "solution": "^[aeiouAEIOU]",
    "damage": 65,
    "reward": 150,
    "concept": "Empezar por vocal",
    "mode": "search",
    "positive": [
      "abracadabra",
      "invocación",
      "Oro",
      "eco",
      "uva"
    ],
    "negative": [
      "poder",
      "brisa",
      "xabracadabra"
    ],
    "explanation": "Usa el ancla de inicio ^ seguido de un conjunto con todas las vocales, mayúsculas y minúsculas.",
    "targets": [
      [
        {
          "text": "a",
          "index": 0
        }
      ],
      [
        {
          "text": "i",
          "index": 0
        }
      ],
      [
        {
          "text": "O",
          "index": 0
        }
      ],
      [
        {
          "text": "e",
          "index": 0
        }
      ],
      [
        {
          "text": "u",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 20,
    "code": "PAR20",
    "enemy": {
      "name": "Serpiente Numérica",
      "hp": 130,
      "kind": "blob"
    },
    "narrative": "La serpiente solo es vulnerable a números pares. Lanza un hechizo que coincida con cualquier línea que termine en un dígito par.",
    "hint": "Crea un conjunto de caracteres con todos los dígitos pares y únelo al ancla de final de línea $.",
    "solution": "[02468]$",
    "damage": 65,
    "reward": 150,
    "concept": "Terminar en dígito par",
    "mode": "search",
    "positive": [
      "linea_2",
      "linea_8",
      "nivel_0",
      "nivel_4",
      "nivel_6"
    ],
    "negative": [
      "linea_3",
      "linea_21",
      "2_linea"
    ],
    "explanation": "Crea un conjunto de caracteres con todos los dígitos pares y únelo al ancla de final de línea $.",
    "targets": [
      [
        {
          "text": "2",
          "index": 6
        }
      ],
      [
        {
          "text": "8",
          "index": 6
        }
      ],
      [
        {
          "text": "0",
          "index": 6
        }
      ],
      [
        {
          "text": "4",
          "index": 6
        }
      ],
      [
        {
          "text": "6",
          "index": 6
        }
      ]
    ]
  },
  {
    "id": 21,
    "code": "CIUDAD21",
    "enemy": {
      "name": "Espejismo Urbano",
      "hp": 140,
      "kind": "espectro"
    },
    "narrative": "Un espejismo muestra dos ciudades oníricas. Lanza un hechizo que coincida con \"Madrid\" o \"Guadalajara\".",
    "hint": "Recuerda que la barra vertical | te permite elegir entre dos patrones completos.",
    "solution": "Madrid|Guadalajara",
    "damage": 70,
    "reward": 160,
    "concept": "Alternativas de texto",
    "mode": "full",
    "positive": [
      "Madrid",
      "Guadalajara"
    ],
    "negative": [
      "Barcelona",
      "madrid",
      "xMadrid"
    ],
    "explanation": "Recuerda que la barra vertical | te permite elegir entre dos patrones completos.",
    "targets": null
  },
  {
    "id": 22,
    "code": "SIMBOLO22",
    "enemy": {
      "name": "Guardián de Puntuación",
      "hp": 140,
      "kind": "pesadilla"
    },
    "narrative": "Este guardián es débil a la duda y a la certeza. Ataca con un hechizo que coincida con un punto '.' o una interrogación '?'.",
    "hint": "Dentro de un conjunto [...], muchos caracteres especiales como el punto pierden su poder y se vuelven literales.",
    "solution": "[.?]",
    "damage": 70,
    "reward": 160,
    "concept": "Símbolos en un conjunto",
    "mode": "full",
    "positive": [
      ".",
      "?"
    ],
    "negative": [
      "a",
      "!",
      "..",
      ""
    ],
    "explanation": "Dentro de un conjunto [...], muchos caracteres especiales como el punto pierden su poder y se vuelven literales.",
    "targets": null
  },
  {
    "id": 23,
    "code": "FINALCORTO23",
    "enemy": {
      "name": "Escriba Fantasma",
      "hp": 150,
      "kind": "fantasma"
    },
    "narrative": "El escriba deja notas por todas partes, separadas por ':'. Encuentra una nota donde el último campo sea un solo carácter.",
    "hint": "Busca : y después un solo carácter que no sea otro separador: [^:]. Termina con $ para exigir el final del texto.",
    "solution": ":[^:]$",
    "damage": 75,
    "reward": 170,
    "concept": "El último campo",
    "mode": "search",
    "positive": [
      "ID:Nombre:Clase:A",
      "a:b:7"
    ],
    "negative": [
      "ID:Nombre:Clase:AB",
      "a:b:",
      "sin separador",
      "ID:Nombre:Clase::"
    ],
    "explanation": "Busca : y después un solo carácter que no sea otro separador: [^:]. Termina con $ para exigir el final del texto.",
    "targets": [
      [
        {
          "text": ":A",
          "index": 15
        }
      ],
      [
        {
          "text": ":7",
          "index": 3
        }
      ]
    ]
  },
  {
    "id": 24,
    "code": "INICIOLARGO24",
    "enemy": {
      "name": "Escriba Fantasma Vengativo",
      "hp": 150,
      "kind": "fantasma"
    },
    "narrative": "El escriba ahora quiere que encuentres una nota donde el primer campo tenga exactamente cuatro caracteres.",
    "hint": "[^:] admite un carácter que no sea dos puntos; {4} pide cuatro; ^ obliga a empezar por ahí. Después escribe el separador :.",
    "solution": "^[^:]{4}:",
    "damage": 75,
    "reward": 170,
    "concept": "El primer campo",
    "mode": "search",
    "positive": [
      "Raza:Elfo:Nivel:10",
      "Abcd:Orco"
    ],
    "negative": [
      "RazaElfo:Nivel:10",
      "Abc:Elfo",
      "A:bc:Elfo"
    ],
    "explanation": "[^:] admite un carácter que no sea dos puntos; {4} pide cuatro; ^ obliga a empezar por ahí. Después escribe el separador :.",
    "targets": [
      [
        {
          "text": "Raza:",
          "index": 0
        }
      ],
      [
        {
          "text": "Abcd:",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 25,
    "code": "EXTREMO25",
    "enemy": {
      "name": "Doble Amenaza",
      "hp": 160,
      "kind": "pesadilla"
    },
    "narrative": "¡Dos escribas a la vez! Encuentra notas cuyo primer O último campo tengan exactamente cuatro caracteres.",
    "hint": "Una opción comprueba el primer campo; otra comprueba el último. [^:] impide cruzar un separador. Une las opciones con |.",
    "solution": "^[^:]{4}:|:[^:]{4}$",
    "damage": 80,
    "reward": 180,
    "concept": "Dos condiciones posibles",
    "mode": "search",
    "positive": [
      "Raza:Elfo:10",
      "ID:Orco:XXXX",
      "Abcd:x"
    ],
    "negative": [
      "ID:Orco:XX",
      "A:B",
      "A:B:C:DE"
    ],
    "explanation": "Una opción comprueba el primer campo; otra comprueba el último. [^:] impide cruzar un separador. Une las opciones con |.",
    "targets": [
      [
        {
          "text": "Raza:",
          "index": 0
        }
      ],
      [
        {
          "text": ":XXXX",
          "index": 7
        }
      ],
      [
        {
          "text": "Abcd:",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 26,
    "code": "DOSLETRAS26",
    "enemy": {
      "name": "Enjambre de Sílabas",
      "hp": 160,
      "kind": "gremlin"
    },
    "narrative": "Un enjambre de letras te rodea. Lanza un hechizo que solo atrape palabras de exactamente dos letras. En este reto usamos letras inglesas sin tilde.",
    "hint": "[A-Za-z]{2} pide dos letras sin tilde; \\b marca los bordes de la palabra. \\w también admitiría números y guiones bajos.",
    "solution": "\\b[A-Za-z]{2}\\b",
    "damage": 80,
    "reward": 180,
    "concept": "Palabras completas",
    "mode": "search",
    "positive": [
      "es un si o un no",
      "es",
      "un",
      "si",
      "no"
    ],
    "negative": [
      "hola",
      "a",
      "sol",
      "12",
      "_a"
    ],
    "explanation": "[A-Za-z]{2} pide dos letras sin tilde; \\b marca los bordes de la palabra. \\w también admitiría números y guiones bajos.",
    "targets": [
      [
        {
          "text": "es",
          "index": 0
        },
        {
          "text": "un",
          "index": 3
        },
        {
          "text": "si",
          "index": 6
        },
        {
          "text": "un",
          "index": 11
        },
        {
          "text": "no",
          "index": 14
        }
      ],
      [
        {
          "text": "es",
          "index": 0
        }
      ],
      [
        {
          "text": "un",
          "index": 0
        }
      ],
      [
        {
          "text": "si",
          "index": 0
        }
      ],
      [
        {
          "text": "no",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 27,
    "code": "REPETIDO27",
    "enemy": {
      "name": "Eco Duplicado",
      "hp": 170,
      "kind": "espectro"
    },
    "narrative": "Este eco repite la primera letra de una palabra al final. Atrapa palabras como 'anana' o 'rotor'. La palabra debe tener al menos dos letras sin tilde; la primera y la última deben ser iguales.",
    "hint": "([A-Za-z]) captura una letra sin tilde. [A-Za-z]* admite las letras intermedias y \\1 exige repetir la primera letra al final. \\b marca los bordes de la palabra.",
    "solution": "\\b([A-Za-z])[A-Za-z]*\\1\\b",
    "damage": 85,
    "reward": 190,
    "concept": "Reutilizar una captura",
    "mode": "search",
    "positive": [
      "rotor",
      "anana",
      "radar",
      "oso"
    ],
    "negative": [
      "motor",
      "casa",
      "r",
      "rotors"
    ],
    "explanation": "([A-Za-z]) captura una letra sin tilde. [A-Za-z]* admite las letras intermedias y \\1 exige repetir la primera letra al final. \\b marca los bordes de la palabra.",
    "targets": [
      [
        {
          "text": "rotor",
          "index": 0
        }
      ],
      [
        {
          "text": "anana",
          "index": 0
        }
      ],
      [
        {
          "text": "radar",
          "index": 0
        }
      ],
      [
        {
          "text": "oso",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 28,
    "code": "SINVOCAL28",
    "enemy": {
      "name": "Silencio Absoluto",
      "hp": 170,
      "kind": "fantasma"
    },
    "narrative": "El Silencio Absoluto solo admite palabras formadas por consonantes inglesas. Acepta rhythm, myth y try, sin números, signos ni vocales.",
    "hint": "Usa rangos de consonantes dentro de [...], repítelos con + y exige todo el texto con ^ y $. Aquí y cuenta como consonante.",
    "solution": "^[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]+$",
    "damage": 85,
    "reward": 190,
    "concept": "Excluir caracteres",
    "mode": "full",
    "positive": [
      "rhythm",
      "myth",
      "try",
      "BCDF"
    ],
    "negative": [
      "rhythma",
      "mythe",
      "ÁRBOL",
      "123",
      "my-th",
      ""
    ],
    "explanation": "Usa rangos de consonantes dentro de [...], repítelos con + y exige todo el texto con ^ y $. Aquí y cuenta como consonante.",
    "targets": null
  },
  {
    "id": 29,
    "code": "CONTRASEÑA29",
    "enemy": {
      "name": "Guardián de la Cripta",
      "hp": 180,
      "kind": "pesadilla"
    },
    "narrative": "El Guardián protege la entrada a los dominios de Sandman. La contraseña debe tener entre 8 y 12 caracteres, incluyendo letras y números.",
    "hint": "(?=.*[A-Za-z]) exige al menos una letra y (?=.*[0-9]) al menos un número. [A-Za-z0-9]{8,12} limita los caracteres y la longitud.",
    "solution": "^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,12}$",
    "damage": 90,
    "reward": 200,
    "concept": "Contraseñas sencillas",
    "mode": "full",
    "positive": [
      "P4ssw0rd1",
      "Segura123",
      "a1234567",
      "1234567Z"
    ],
    "negative": [
      "pass",
      "longpassword12345",
      "abcdefgh",
      "12345678",
      "Segura12!"
    ],
    "explanation": "(?=.*[A-Za-z]) exige al menos una letra y (?=.*[0-9]) al menos un número. [A-Za-z0-9]{8,12} limita los caracteres y la longitud.",
    "targets": null
  },
  {
    "id": 30,
    "code": "TRANSFORMAR30",
    "enemy": {
      "name": "Ilusión de Sandman",
      "hp": 200,
      "kind": "sandman"
    },
    "narrative": "Has entrado en los dominios de Sandman. Las palabras cambian de forma. Lanza un hechizo para identificar la palabra 'ajo' para ser transformada.",
    "hint": "El arte de la transformación empieza por identificar el objetivo. Simplemente, encuéntralo.",
    "solution": "ajo",
    "damage": 50,
    "reward": 210,
    "concept": "Buscar para transformar",
    "mode": "search",
    "positive": [
      "diente de ajo",
      "ajo y sal"
    ],
    "negative": [
      "cebolla",
      "Ajo",
      "viaje"
    ],
    "explanation": "El arte de la transformación empieza por identificar el objetivo. Simplemente, encuéntralo.",
    "targets": [
      [
        {
          "text": "ajo",
          "index": 10
        }
      ],
      [
        {
          "text": "ajo",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 31,
    "code": "MAYUSCULA31",
    "enemy": {
      "name": "Sombra de Sandman",
      "hp": 200,
      "kind": "sandman"
    },
    "narrative": "La sombra juega con mayúsculas y minúsculas. Identifica 'Ajo' o 'ajo'.",
    "hint": "Un conjunto de caracteres es perfecto para manejar diferentes capitalizaciones de una letra.",
    "solution": "[Aa]jo",
    "damage": 50,
    "reward": 220,
    "concept": "Mayúsculas y minúsculas",
    "mode": "search",
    "positive": [
      "sopa de Ajo",
      "sopa de ajo"
    ],
    "negative": [
      "sopa de AJ0",
      "sopa de AJO",
      "cebolla"
    ],
    "explanation": "Un conjunto de caracteres es perfecto para manejar diferentes capitalizaciones de una letra.",
    "targets": [
      [
        {
          "text": "Ajo",
          "index": 8
        }
      ],
      [
        {
          "text": "ajo",
          "index": 8
        }
      ]
    ]
  },
  {
    "id": 32,
    "code": "PALABRAAJO32",
    "enemy": {
      "name": "Susurro de Sandman",
      "hp": 220,
      "kind": "sandman"
    },
    "narrative": "El susurro te confunde con palabras como 'viajo'. Debes identificar la palabra exacta 'Ajo' o 'ajo', no como parte de otra.",
    "hint": "¡Los límites de palabra \\b son tu mejor aliado para aislar palabras completas!",
    "solution": "\\b[Aa]jo\\b",
    "damage": 55,
    "reward": 230,
    "concept": "Aislar una palabra",
    "mode": "search",
    "positive": [
      "un Ajo y sal",
      "ajo",
      "¡Ajo!"
    ],
    "negative": [
      "me bajo de aqui",
      "viajo",
      "ajolote"
    ],
    "explanation": "¡Los límites de palabra \\b son tu mejor aliado para aislar palabras completas!",
    "targets": [
      [
        {
          "text": "Ajo",
          "index": 3
        }
      ],
      [
        {
          "text": "ajo",
          "index": 0
        }
      ],
      [
        {
          "text": "Ajo",
          "index": 1
        }
      ]
    ]
  },
  {
    "id": 33,
    "code": "GRUPOANIDADO33",
    "enemy": {
      "name": "Eco de Sandman",
      "hp": 220,
      "kind": "sandman"
    },
    "narrative": "El eco repite patrones complejos como 'ab cde' o 'ab cde cde'. Atrapa la estructura 'ab' seguido de uno o más ' cde'.",
    "hint": "Agrupa la parte que se repite ( cde) y aplícale el cuantificador +.",
    "solution": "ab( cde)+",
    "damage": 55,
    "reward": 240,
    "concept": "Repetir un grupo",
    "mode": "full",
    "positive": [
      "ab cde",
      "ab cde cde",
      "ab cde cde cde"
    ],
    "negative": [
      "ab",
      "abcde",
      "ab cdeX",
      "xab cde"
    ],
    "explanation": "Agrupa la parte que se repite ( cde) y aplícale el cuantificador +.",
    "targets": null
  },
  {
    "id": 34,
    "code": "NOAVANZADO34",
    "enemy": {
      "name": "Mirada de Sandman",
      "hp": 240,
      "kind": "sandman"
    },
    "narrative": "La mirada de Sandman te paraliza. Encuentra la letra 'q' solo si NO va seguida de una 'u'.",
    "hint": "Un \"negative lookahead\" (?!...) mira hacia adelante sin consumir caracteres. q(?!u) significa 'una q no seguida de u'.",
    "solution": "q(?!u)",
    "damage": 60,
    "reward": 250,
    "concept": "Mirar sin consumir",
    "mode": "search",
    "positive": [
      "iraq",
      "cinq",
      "qatar"
    ],
    "negative": [
      "que",
      "quinto",
      "qu"
    ],
    "explanation": "Un \"negative lookahead\" (?!...) mira hacia adelante sin consumir caracteres. q(?!u) significa 'una q no seguida de u'.",
    "targets": [
      [
        {
          "text": "q",
          "index": 3
        }
      ],
      [
        {
          "text": "q",
          "index": 3
        }
      ],
      [
        {
          "text": "q",
          "index": 0
        }
      ]
    ]
  },
  {
    "id": 35,
    "code": "HTML35",
    "enemy": {
      "name": "Arquitecto de Sueños",
      "hp": 240,
      "kind": "sandman"
    },
    "narrative": "El Arquitecto usa etiquetas sencillas sin atributos: <h1>, </h1> y <p>. Reconoce una etiqueta completa con nombre que empiece por letra. Este ejercicio no analiza documentos HTML.",
    "hint": "Empieza con <, añade /? para el cierre opcional, una letra y cero o más letras o dígitos. Termina con >.",
    "solution": "</?[A-Za-z][A-Za-z0-9]*>",
    "damage": 60,
    "reward": 260,
    "concept": "Etiquetas sencillas",
    "mode": "full",
    "positive": [
      "<h1>",
      "</h1>",
      "<p>",
      "</p>",
      "<span>"
    ],
    "negative": [
      "h1",
      "<>",
      "<p",
      "<3>"
    ],
    "explanation": "Empieza con <, añade /? para el cierre opcional, una letra y cero o más letras o dígitos. Termina con >.",
    "targets": null
  },
  {
    "id": 36,
    "code": "FECHA36",
    "enemy": {
      "name": "El Tiempo Onírico",
      "hp": 260,
      "kind": "sandman"
    },
    "narrative": "El tiempo fluye de forma extraña. Atrapa fechas en formato AAAA-MM-DD. Solo comprobamos el formato, no si la fecha existe en el calendario.",
    "hint": "Usa cuantificadores de tamaño exacto {n} para los dígitos y no te olvides de los guiones.",
    "solution": "\\d{4}-\\d{2}-\\d{2}",
    "damage": 65,
    "reward": 270,
    "concept": "Formato de fecha",
    "mode": "full",
    "positive": [
      "2025-10-08",
      "2026-01-02",
      "0000-00-00"
    ],
    "negative": [
      "2025-1-8",
      "25-10-08",
      "x2025-10-08",
      "2025/10/08"
    ],
    "explanation": "Usa cuantificadores de tamaño exacto {n} para los dígitos y no te olvides de los guiones.",
    "targets": null
  },
  {
    "id": 37,
    "code": "EMAIL37",
    "enemy": {
      "name": "Mensajero de Sueños",
      "hp": 260,
      "kind": "sandman"
    },
    "narrative": "Un mensajero te trae un acertijo en forma de email. Valida una dirección de correo simple. En este ejercicio, cada parte usa solo letras sin tilde, dígitos o guion bajo; es un modelo didáctico, no una validación completa de correo.",
    "hint": "Combina secuencias de caracteres de palabra \\w+ con los literales '@' y '.' (escapado).",
    "solution": "\\w+@\\w+\\.\\w+",
    "damage": 65,
    "reward": 280,
    "concept": "Correo sencillo",
    "mode": "full",
    "positive": [
      "aprendiz@dominio.com",
      "a_b@web.es",
      "ana2@correo.org"
    ],
    "negative": [
      "aprendiz@dominio",
      "@web.com",
      "ana@@web.com",
      "ana@web.com texto"
    ],
    "explanation": "Combina secuencias de caracteres de palabra \\w+ con los literales '@' y '.' (escapado).",
    "targets": null
  },
  {
    "id": 38,
    "code": "HEXADECIMAL38",
    "enemy": {
      "name": "Color del Vacío",
      "hp": 280,
      "kind": "sandman"
    },
    "narrative": "El color del sueño se define por códigos hexadecimales. Atrapa un código de color de 6 dígitos, como '#FF33AA'.",
    "hint": "Empieza con '#', seguido de un conjunto de caracteres para dígitos y letras de la 'a' a la 'f' (mayúsculas y minúsculas), repetido 6 veces.",
    "solution": "#[0-9a-fA-F]{6}",
    "damage": 70,
    "reward": 290,
    "concept": "Color hexadecimal",
    "mode": "full",
    "positive": [
      "#FF33AA",
      "#abcdef",
      "#012345"
    ],
    "negative": [
      "#GG33AA",
      "#FFF",
      "FF33AA",
      "#FF33AA0"
    ],
    "explanation": "Empieza con '#', seguido de un conjunto de caracteres para dígitos y letras de la 'a' a la 'f' (mayúsculas y minúsculas), repetido 6 veces.",
    "targets": null
  },
  {
    "id": 39,
    "code": "IP39",
    "enemy": {
      "name": "Nexo de los Sueños",
      "hp": 280,
      "kind": "sandman"
    },
    "narrative": "Estás cerca del nexo. Su dirección es como una IP. Valida una dirección IPv4 simple.",
    "hint": "Un bloque válido va de 0 a 255: 25[0-5], 2[0-4][0-9], 1[0-9]{2} o [1-9]?[0-9]. Une tres bloques seguidos de punto literal y un cuarto bloque. No aceptamos ceros iniciales como 01.",
    "solution": "(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])",
    "damage": 70,
    "reward": 300,
    "concept": "IPv4 de 0 a 255",
    "mode": "full",
    "positive": [
      "192.168.1.1",
      "0.0.0.0",
      "255.255.255.255",
      "10.20.30.40"
    ],
    "negative": [
      "192.168.1.256",
      "999.1.1.1",
      "1.2.3",
      "1.2.3.4.5",
      "01.2.3.4"
    ],
    "explanation": "Un bloque válido va de 0 a 255: 25[0-5], 2[0-4][0-9], 1[0-9]{2} o [1-9]?[0-9]. Une tres bloques seguidos de punto literal y un cuarto bloque. No aceptamos ceros iniciales como 01.",
    "targets": null
  },
  {
    "id": 40,
    "code": "SANDMAN40",
    "enemy": {
      "name": "Sandman, El Eterno",
      "hp": 400,
      "kind": "sandman"
    },
    "narrative": "¡El Oniromante se alza ante ti! \"Para despertar\", susurra, \"debes desterrar la palabra prohibida de mis dominios. Identifica la palabra 'Ajo' o 'ajo' para que mi hechizo de borrado la elimine por completo.\" ¡Este es el hechizo final!",
    "hint": "¡Lo sabes! ¡Combina todo tu conocimiento! Usa los límites de palabra \\b y un conjunto para mayúsculas y minúsculas para lanzar el hechizo definitivo.",
    "solution": "\\b[Aa]jo\\b",
    "damage": 100,
    "reward": 1000,
    "concept": "El hechizo definitivo",
    "mode": "search",
    "positive": [
      "El Ajo es una pesadilla.",
      "ajo",
      "Ajo y ajo"
    ],
    "negative": [
      "viajo en sueños",
      "bajo",
      "ajolote"
    ],
    "explanation": "¡Lo sabes! ¡Combina todo tu conocimiento! Usa los límites de palabra \\b y un conjunto para mayúsculas y minúsculas para lanzar el hechizo definitivo.",
    "targets": [
      [
        {
          "text": "Ajo",
          "index": 3
        }
      ],
      [
        {
          "text": "ajo",
          "index": 0
        }
      ],
      [
        {
          "text": "Ajo",
          "index": 0
        },
        {
          "text": "ajo",
          "index": 6
        }
      ]
    ]
  }
];
