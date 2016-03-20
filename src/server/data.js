module.exports = {
    people: getPeople(),
    contests: getContests()
};

function getPeople() {
    return [
        {id: 3, firstName: 'Christer', lastName: 'Johansson', age: 62},
        {id: 4, firstName: 'Eva', lastName: 'Johansson', age: 61},
        {id: 2, firstName: 'Malin', lastName: 'Johansson', age: 38},
        {id: 1, firstName: 'Patrik', lastName: 'Berander', age: 38},
        {id: 5, firstName: 'Per', lastName: 'Johansson', age: 31},
        {id: 6, firstName: 'Petter', lastName: 'Bengtsson', age: 33},
        {id: 7, firstName: 'Åsa', lastName: 'Johansson', age: 36}
    ];
}

function getContests() {
    return [
        {
            id: 1, 
            title: 'Gröna fingrar',
            task: 'Uppgiften är att med start från och med erhållandet av de frön som tävlingsledningen bidrar med, ' +
                  'fram tills då tävlingshelgen (prel. augusti månad) äger rum, plantera samt underhålla växterna.' +
                  'Två typer av krukväxter har delats ut till samtliga deltage. Varje hushåll skall ha mottagit ' +
                  '5st frön av typen "Camelia japonica" samt 5st frön av typen "Kong" (Jättesolros).' +
                  'Varje enskild deltagare ordineras två Camelia-frön samt två Solros-frön.' +
                  'Det sista fröet som blir över för varje hushålls disponeras på valfritt vis.' +
                  'Om det sista fröet kommer att representera den blomma som presenteras på ' +
                  'tävlingsdagen så kommer poäng att delas ut enligt regler för en partävling.',
            pointdist: 'Poäng utdelas främst till den eller de deltagare som har uppnått från topp till ' +
                       'rot den längst mätbara Kamelia-växten. Övrigt gäller som utslagning ' +
                       '(eller då två Kamelia upmäts till samma längd)' +
                       'längden på respektive deltages solros. Om ingen kamelia presenteras ' +
                       'från någon deltagare kommer poäng utdelas i ordning av deras solros längd.',
            seeds: [
                {
                    name: 'Camellia japonica', 
                    type: 'Krukväxt', 
                    description: 'Sägenomspunnen, japansk växt med furstliga anor. En blommande Kamelia ' +
                                 'är bland det vackraste (källa?) som finns. Mer eller mindre dubbelblommande ' +
                                 'i olika nyanser av rosa.', 
                    cultivation: 'Blötläggs i hett vatten 1 dygn före sådd. Låt svalna. Sås inomhus i ' +
                                 ' planteringsjord blandad med 1/4 torv och 1/4 perlit eller finkornigt grus.' +
                                 'Täck med sand eller perlit. Täck sådden med klar plast försedd med lufthål. ' +
                                 'Vatten tillförs underifrån. Om groning ej inträffat inom 1 månad placeras sådden i ' +
                                 'kylskåp ca 1 månad, därefter rumstemperatur. Övervintras i ca 15 gr. ' +
                                 'Använd kalkfritt vatten. Om kamelian får torka ut så faller knopparna av.' +
                                 'Jorden får inte heller bli för blöt, ' +
                                 'och under viloperioden på vintern behöver växten mycket mindre vatten än på ' +
                                 'sommaren. Jorden ska vara sur och helst ha ett pH-värde på omkring 5. Från april ' +
                                 'till augusti tillförs näring en gång i veckan vid vattning.' +
                                 'Under sommaren bör den omgivande temperaturen vara 15-18 °C. ' +
                                 'Kamelian trivs inte i direkt solsken, men måste ha en så ljus ' +
                                 'växtplats som möjligt. Krukan ska inte vridas för då kan knopparna ' +
                                 'ramla av. För att blomknoppar ska bildas bör temperaturen' +
                                 'på vintern vara omkring 10 °C. Omplantering och beskärning ' +
                                 'kan göras vid behov och utförs då på våren.' +
                                 'Kamelia anses vara en av de svåraste krukväxterna i världen att sköta.'
                },
                {
                    name: 'Helianthus Annuus (trist namn)', 
                    type: 'Krukväxt', 
                    description: 'Imponerande höjdare som kan bli över 4 m. Stor, ljusgul, utstrålande toppblomma ' +
                                 'med mörkare mitt. Därefter kommer  många kortare sidostjälkar med blommor, ' +
                                 'som en bukett. Används även som tävlingssort.', 
                    cultivation: 'Blötlägg fröerna ett dygn före sådd. Förkultiveras inomhus i planteringsjord ' +
                                 'mars-april med ett frö/kruka. Täck sådden med klar plast försedd med lufthål.' +
                                 'Placeras i 20-25 grader, ljust och svalt efter groning.' +
                                 'Utplanteras efter avhärdning ' +
                                 'när frostrisken är över. Kan även sås direkt på friland när jorden är uppvärmd.' 
                }
            ]
        }
    ];
}
