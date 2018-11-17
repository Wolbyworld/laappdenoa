//Source:
    //EN: https://www.parents.com/pregnancy/week-by-week/how-big-is-your-baby-this-week/
    //ES: https://espanol.babycenter.com/cu%C3%A1l-es-el-tama%C3%B1o-de-tu-beb%C3%A9
    const ageFacts = {
    1:"Pequeñito, muy muy pequeñito",
    2:"Pequeñito, muy muy pequeñito",
    3:"Pequeñito, muy muy pequeñito",
    4:"Tu bebé es oficialmente un embrión y tiene el tamaño de una semillita de amapola",
    5:"Tu bebé ya tiene el tamaño de una pequeña semillita de sésamo. Todavía no se parece mucho a un bebé, por ahora parece más un renacuajito.",
    6:"Tu bebé ya tiene el tamaño de la semilla de una granada.",
    7:"El pequeño (o pequeña!) sigue creciendo. Tiene el tamaño de un arándano.",
    8:"Una pequeña frambuesa, así de grande es ya tu bebé",
    9:"Tu bebé ya tiene el tamaño de una cereza. ¡Ya mide casi 2.5 centímetros! (más o menos)",
    10:"Llámale aceitunita. Tan grande como una bonita oliva.",
    11:"Tu bebé tiene el tamaño apróximado de un higo. Desde ahora hasta la semana 20, su tamaño se multiplicará por 30, ¡sí por 30!.",
    12:"Tu bebé ya mide casi 6 cm, esto es, casi tan grande como una ciruela. Ahora empieza a tener uñas, y sus huesos se están formando.",
    13:"Esta semana tu bebé es tan grande como un limon (pequeño, eso sí). Sus cuerdas vocales se están empezando a desarrollar.",
    14:"Bienvenida al segundo trimestre, tu bebé ahora es un pequeño melocotón. Sus órganos están formados, incluyendo su corazoncito. De aquí en adelante le queda ponerse fuerte.",
    15:"Steve Jobs estaría orgulloso, tu pequeño es del tamaño de una manzana -apple-. Su cerebro está en control y ya se puede mover, pero no te pongas nerviosa, todavía te quedan una semanas para notarle.",
    16:"La fruta de moda, ¿cuál? El aguacate. Pequeñajo es ya como un aguacate. Esta semana se la pasará chupándose el pulgar",
    17:"A falta de una fruta, hortaliza. Esta semana tu bebé es del tamaño de una cebolla. Los bebés más fiesteros empiezan a notarse esta semana, pero no te preocupes sino lo notas todavía, ya te dará la lata.",
    18:"Tu bebé es del tamaño de un pimiento. ¡Cuánto ha crecido! Empezó siendo una semillita, y ahora mide 14 centímetros.",
    19:"Ahora ya mide como un mango. Sus piernas ahora son más largas que sus brazos. Ahora empezará a moverse, pero no le notarás si eres mamá primeriza.",
    20:"Estás a medio camino. Menuda aventura. Tu bebé es tan grande como un plátano. Acostúmbrate a nombres de frutas más largas porque ahora el pequeño se mide desde la cabecita hasta los pies, en lugar de a la rabadilla. A estas alturas es muy probable que sepas si será niño o niña. No te olvides de decírmelo (maytia esto todavía no lo he programado).",
    21:"Tu bebé es tan largo ahora como una zanahoria. Ya puede notar la presión, así que si le tocas, se moverá o te empujará de vuelta.",
    22:"Pequeña papaya. Quizás la semana con el nombre más molón. Tu pequeño ya mide 27 centímetros. Ahora toca desarrollar los pulmones. Importante para cuando quiera ganar los Games 2030.",
    23:"El pequeño ya pesa medio kilo (más de una libra). Ahora mide unos 28 centímetros y pesa tanto como un mango. WoW",
    24:"Tan largo como una mazorca de maiz. ¡Como crece!",
    25:"Lo siento, sabría que esta fruta llegaría. Tu pequeño pesa tanto como un nabo, unos 680 gramos. A partir de esta semana podría sacarse selfies, porque ha aprendido a sacar la lengua. ¡Que peligro!",
    26:"Tu bebé es casi casi tan largo como un pepino. Si la semana pasada se podía sacar selfies, ahora se puede pintar los ojos. Sus pestañas ya están perfectamente perfiladas",
    27:"Tu pequeño es del tamaño de una coliflor. Esta semana empieza a ser capaz de distinguir entre la voz de papá, mamá y los pedos.",
    28:"¡Sí! El bebé ya es un MVP o como diría Bill Aulet, un MLP, un mínimum lovable product.",
    29:"Ya lo añadiré",
    30:"Ya lo añadiré",
    31:"Ya lo añadiré",
    32:"Ya lo añadiré",
    33:"Ya lo añadiré",
    34:"Ya lo añadiré",
    35:"Ya lo añadiré",
    36:"Ya lo añadiré",
    37:"Ya lo añadiré",
    38:"Ya lo añadiré",
    39:"Ya lo añadiré",
    40:"Ya lo añadiré"
};
    
function babyInfo () {
    
    
    
    this.getWeekFact = function(_week){
        return ageFacts[_week];
    }
}

    
module.exports = babyInfo;