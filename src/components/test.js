const data = [
    {
        "question": "Nematode del conejo",
        "answer": "Passalusus ambigua"
    },
    {
        "question": "diagnostico de sancocystin miescheriena y suihominis",
        "answer": "en musculo de cerdo , veo bradizoitos si hago digestor,hacer pcr o hp para diferenciar"
    },
    {
        "question": "como es el ciclo de sarcocystis miescheriena y suihominis",
        "answer": "indirecto perro y cerdo ,hombre cerdo"
    },
    {
        "question": "Hola como es el diagnostico de toxoplasma gondi",
        "answer": "gold stand en humano es sabin y feldman , en perros ifi , elisa y aglutinacion directa"
    },{
        "question": "Hola 5cual es el diagnostico de cisticercus celulosae en porcinos",
        "answer": "criterio sanitario con inspeccion de musculos macetero , diafragma intercostales , triceps , lengua y esofago"
    },
    {
        "question": "Hola 6como es la transmicion de cisticercus celulosae",
        "answer": "ano/mano/boca , agua o comida contaminada con kk humana , autoinfeccion por peristaltismo retrogado"
    },
    {
        "question": "diagnostico de trichinella spiralis",
        "answer": "en humanos es x 3 serologia y laboratorio que da eosinofilia con aumento de cpk y ldh,en cerdos DAR son 5 gr de diafragma de todos los faenados  en grupos de 20 , se pone pepsina hcl y agua mas la carne a 42grad y dsp la pepesina , sedimento x30min y tomo 50ml de los cuales me quedo con 10ml y veo en placa de petri"
    },
    {
        "question": "que pasa si DAR me da +",
        "answer": "hago 4 grupos de 5 cerdos y tomo 20gr de cada muestra , si uno grupo es positivo , tomo 20gr de cada cerdo y asi lo identifico ,todo el predio se interdicta y la canal se decomisa"
    },
    {
        "question": "diagnostico indirecto de trichinella spiralis",
        "answer": "elisa como vigilancia epidemiologica busca el antigeno tls1 del esticocito del parasito"
    },
    {
        "question": "que produce isospora suis en el cerdo",
        "answer": "diarrea neonatal en las primeras semanas de vida"
    },
    {
        "question": "cual es el ppp de isospora suis y cual su dx",
        "answer": "6 dias , flotacion con sol de bembruk para ver los ooquiste y mediante necropsia veo enteritis fibrinonecrotica y atrofia y fusion de bellosidades"
    },
    {
        "question": "cuales son las especies de eimeria en el cerdo",
        "answer": "suis, pollita, perminuta , porci y escabra"
    },
    {
        "question": "cual es la forma infectante de cryptosporidium parvum",
        "answer": "ooquiste esporulado desnudo con membrana gruesa en el ambiente y fina en intestino que genera autoinfeccion"
    },
    {
        "question": "diagnostico de cryptosporidium parvum",
        "answer": "ziel nielzen de mf en frotis , veo ooquistes rojos en fondo azul"
    },
    {
        "question": "cual es el dx de balamtidium coli y a quienes afecta",
        "answer": "afecta a inmunocomprometidos y jovenes , se diagnostica por copro de diarrea donde veo trofozoitos con movimiento ciliar o mf seca donde veo el quiste , a la necropsia observo ulceras en  ciego y colon"
    },
    {
        "question": "cual es la patogenia de hyostrongylus rubidus",
        "answer": "afecta la pred estomacal ,l3 dilata la glandula gastrica , l4 genera nodulos que disminuyen el hcl y produccion de jugo gastrico aumentando el ph, los adultos rompen el nodulo da ulceras dipteroides y gastritis catarran , anemia por hematofagia y proceso digestivo malo"
    },
    {
        "question": "cual es el dx de hyosttrongilus rubidus",
        "answer": "por flotacion con sn sobresaturada usando mf refrigerada observo huevos 75 micras con camara de aire y punta acuminada , luego cultivo de larvas para diferenciar de oesophagostomum, "
    },
    {
        "question": "que observo en la necropcia de hyostrongilus rubidus",
        "answer": "adultos y formas juveniles en nodulos y ulceras"
    },
    {
        "question": "cuales son los spiruridios del cerdo",
        "answer": "ascarops strongylina , physocephalus sexalatus"
    },
    {
        "question": "cual es el ciclo de los spiruridios del cerdos",
        "answer": "indirecto , el hd es el cerdo y el hi el escarabjo coprofago"
    }
    {
        "question": "dx de ascarops strongylina y physocephalus sexalatus",
        "answer": "flotacion , huevo larvado de 40micras , necropsia de raspado de mucosa"
    },
    {
        "question": "estrongyloides ramsomi , fi y transmision",
        "answer": "l3 , percutanea , oral en suelo contaminado o galactogena y transplacentaria"
    },
    {
        "question": "a quien afecta strongyloides ramsomi y cual es la patogenia",
        "answer": "lechones en la primer semana de vida , por via percutanea afecta pulmon dando petequias y neumonia exudativa , en id atrofia las vellosidades e inflama"
    },
    {
        "question": "cual es el dx de strongyloides ramsomi",
        "answer": "flotacion , huevo 50 micras larvado membrana lisa y fina"
    },
    {
        "question": "ascaris sum ,cuales son sus particularidades",
        "answer": "huevo infectante despues de 1 mes , ciclo entero hepato intestinal"
    },
    {
        "question": "patogenia ascaris sum",
        "answer": "l3 en higado genera focos hemorragicos , hepatitis intersticial eosinofilica , l4 en pulmon petequias , focos neumonicos y bronquitis, l5 en yeyuno lesion expoliatris y obstruccion intestinal"
    },
    {
        "question": "sx en lechones ascaris sum",
        "answer": "neumonia, tos , hipertermia , disnea , colicos , impanismo ,camada dispareja , obstruccion billiar , disminucion densidad osea x deficit de calcio"
    },
    {
        "question": "dx y tx ascaris sum",
        "answer": "flotacion , necropcia higado , pulmon y yeyuno, od en mf, piperazina 200mg kilo en comida o agua"
    },
    {
        "question": "macracantorrinchus hirundinaceus ciclo y formas juveniles",
        "answer": "indirecto , hd cerdo hi escarabajo coprofago , li es acantor , l2 acantela ,l3 cistacanto q es la fi para hi"
    },
    {
        "question": "macracantorrinchus hirundinaceus patogenia y dx",
        "answer": "accion traumatica x nodulos con el agente que va mudando de ubicacion , anemia e hipoproteinemia , reaccion fibrinosa , anafilactica e inflamatoria.dx x copro x sedimentacion veo huevos 90micras sin C/aire , c/4 membranas elipsoidal c/acantor y necropsia para ver los nodulos"
    },
    {
        "question": "tx macracantorrinchus hirundinaceos",
        "answer": "no hay"
    }
];

export default data;