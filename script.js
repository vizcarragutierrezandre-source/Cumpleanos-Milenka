document.addEventListener(
    "DOMContentLoaded",
    () => {


        console.log(
            "🌌 Experiencia Milenka iniciada"
        );


        /* =====================================
           ESCENAS
        ===================================== */

        const escenas = {

            intro:
                document.getElementById("intro"),

            birthday:
                document.getElementById("birthday"),

            memories:
                document.getElementById("memories"),

            videos:
                document.getElementById("videosScene"),

            letter:
                document.getElementById("letterScene"),

            galaxy:
                document.getElementById("galaxyScene"),

            details:
                document.getElementById("detailsScene"),

            final:
                document.getElementById("finalScene")

        };



        /* =====================================
           BOTONES
        ===================================== */

        const openButton =
            document.getElementById(
                "openButton"
            );

        const continueButton =
            document.getElementById(
                "continueButton"
            );

        const nextMemoryButton =
            document.getElementById(
                "nextMemoryButton"
            );

        const nextVideoButton =
            document.getElementById(
                "nextVideoButton"
            );

        const letterContinueButton =
            document.getElementById(
                "letterContinueButton"
            );

        const galaxyContinueButton =
            document.getElementById(
                "galaxyContinueButton"
            );

        const detailsContinueButton =
            document.getElementById(
                "detailsContinueButton"
            );

        const restartButton =
            document.getElementById(
                "restartButton"
            );



        /* =====================================
           MÚSICA
        ===================================== */

        const music =
            document.getElementById(
                "backgroundMusic"
            );

        const musicButton =
            document.getElementById(
                "musicButton"
            );



        /* =====================================
           FOTOS
        ===================================== */

        const memoryImage =
            document.getElementById(
                "memoryImage"
            );

        const memoryNumber =
            document.getElementById(
                "memoryNumber"
            );

        const memoryCaption =
            document.getElementById(
                "memoryCaption"
            );


        const fotos = [

            "./fotos/foto1.jpeg",
            "./fotos/foto2.jpeg",
            "./fotos/foto3.jpeg",
            "./fotos/foto4.jpeg",
            "./fotos/foto5.jpeg",
            "./fotos/foto6.jpeg"

        ];


        const captions = [

            "Un momento para guardar. ❤️",

            "Hay recuerdos que siempre tienen algo especial. ✨",

            "Un instante que merece quedarse. 💜",

            "Algunas imágenes dicen más que mil palabras. 🌙",

            "Un pequeño recuerdo de un día bonito. ❤️",

            "Y todavía quedan muchos momentos por vivir. ✨"

        ];


        let fotoActual = 0;



        /* =====================================
           VIDEOS
        ===================================== */

        const video =
            document.getElementById(
                "memoryVideo"
            );

        const videoSource =
            document.getElementById(
                "videoSource"
            );

        const videoNumber =
            document.getElementById(
                "videoNumber"
            );


        const videos = [

            "./videos/video1.mp4",
            "./videos/video2.mp4",
            "./videos/video3.mp4"

        ];


        let videoActual = 0;



        /* =====================================
           CAMBIAR ESCENA
        ===================================== */

        function mostrarEscena(
            escena
        ) {

            Object.values(
                escenas
            ).forEach(
                elemento => {

                    elemento.classList
                        .add("hidden");

                }
            );


            escena.classList
                .remove("hidden");

        }



        /* =====================================
           MÚSICA
        ===================================== */

        function iniciarMusica() {

            music.volume = 0.35;

            music.play()
                .then(
                    () => {

                        musicButton
                            .textContent =
                            "🔊";

                    }
                )
                .catch(
                    () => {

                        console.log(
                            "El navegador requiere interacción."
                        );

                    }
                );

        }


        musicButton.addEventListener(
            "click",
            () => {

                if (
                    music.paused
                ) {

                    music.play();

                    musicButton
                        .textContent =
                        "🔊";

                } else {

                    music.pause();

                    musicButton
                        .textContent =
                        "🔇";

                }

            }
        );



        /* =====================================
           FOTO
        ===================================== */

        function mostrarFoto() {

            memoryImage.style.opacity =
                "0";


            setTimeout(
                () => {

                    memoryImage.src =
                        fotos[fotoActual];

                    memoryNumber
                        .textContent =
                        String(
                            fotoActual + 1
                        ).padStart(
                            2,
                            "0"
                        );

                    memoryCaption
                        .textContent =
                        captions[
                            fotoActual
                        ];

                    memoryImage.style.opacity =
                        "1";

                },
                300
            );

        }



        /* =====================================
           VIDEO
        ===================================== */

        function cargarVideo() {

            video.pause();

            videoSource.src =
                videos[videoActual];

            video.load();

            videoNumber
                .textContent =
                `MOMENTO ${
                    String(
                        videoActual + 1
                    ).padStart(2, "0")
                } / 03`;

        }



        /* =====================================
           ESTRELLAS
        ===================================== */

        function crearEstrellas() {

            const container =
                document.getElementById(
                    "stars"
                );

            container.innerHTML =
                "";


            for (
                let i = 0;
                i < 220;
                i++
            ) {

                const star =
                    document.createElement(
                        "span"
                    );

                star.className =
                    "star";


                star.style.left =
                    Math.random() *
                    100 +
                    "%";


                star.style.top =
                    Math.random() *
                    100 +
                    "%";


                const size =
                    Math.random() *
                    3 +
                    1;


                star.style.width =
                    size + "px";

                star.style.height =
                    size + "px";


                star.style.setProperty(
                    "--duration",
                    (
                        Math.random() *
                        4 +
                        2
                    ) +
                    "s"
                );


                star.style.animationDelay =
                    (
                        Math.random() *
                        5
                    ) +
                    "s";


                container.appendChild(
                    star
                );

            }

        }



        /* =====================================
           POLVO
        ===================================== */

        function crearPolvo() {

            const container =
                document.getElementById(
                    "galaxyDust"
                );

            container.innerHTML =
                "";


            for (
                let i = 0;
                i < 130;
                i++
            ) {

                const particle =
                    document.createElement(
                        "span"
                    );

                particle.className =
                    "galaxy-dust";


                particle.style.left =
                    Math.random() *
                    100 +
                    "%";


                particle.style.top =
                    Math.random() *
                    100 +
                    "%";


                particle.style.setProperty(
                    "--duration",
                    (
                        Math.random() *
                        3 +
                        2
                    ) +
                    "s"
                );


                particle.style.animationDelay =
                    Math.random() *
                    4 +
                    "s";


                container.appendChild(
                    particle
                );

            }

        }



        /* =====================================
           DESTELLOS
        ===================================== */

        function crearDestellos() {

            const container =
                document.getElementById(
                    "galaxyFlashes"
                );

            container.innerHTML =
                "";


            for (
                let i = 0;
                i < 25;
                i++
            ) {

                const flash =
                    document.createElement(
                        "span"
                    );

                flash.className =
                    "galaxy-flash";


                flash.style.left =
                    Math.random() *
                    100 +
                    "%";


                flash.style.top =
                    Math.random() *
                    100 +
                    "%";


                flash.style.setProperty(
                    "--duration",
                    (
                        Math.random() *
                        3 +
                        2
                    ) +
                    "s"
                );


                flash.style.animationDelay =
                    Math.random() *
                    5 +
                    "s";


                container.appendChild(
                    flash
                );

            }

        }



        /* =====================================
           CORAZONES
        ===================================== */

        function crearCorazones() {

            const container =
                document.getElementById(
                    "hearts"
                );

            container.innerHTML =
                "";


            const tipos = [

                "❤️",
                "💗",
                "💖",
                "💕",
                "💓",
                "💞",
                "💘",
                "💝"

            ];


            for (
                let i = 0;
                i < 70;
                i++
            ) {

                const heart =
                    document.createElement(
                        "span"
                    );

                heart.className =
                    "floating-heart";


                heart.textContent =
                    tipos[
                        Math.floor(
                            Math.random() *
                            tipos.length
                        )
                    ];


                heart.style.left =
                    Math.random() *
                    100 +
                    "%";


                heart.style.setProperty(
                    "--size",
                    (
                        15 +
                        Math.random() *
                        30
                    ) +
                    "px"
                );


                heart.style.setProperty(
                    "--duration",
                    (
                        10 +
                        Math.random() *
                        10
                    ) +
                    "s"
                );


                heart.style.setProperty(
                    "--delay",
                    Math.random() *
                    10 +
                    "s"
                );


                heart.style.setProperty(
                    "--move",
                    (
                        Math.random() *
                        240 -
                        120
                    ) +
                    "px"
                );


                container.appendChild(
                    heart
                );

            }

        }



        /* =====================================
           ÓRBITAS
        ===================================== */

        function crearOrbitas() {

            const container =
                document.getElementById(
                    "orbitHearts"
                );

            container.innerHTML =
                "";


            const tipos = [

                "❤️",
                "💗",
                "💖",
                "💕",
                "💘"

            ];


            for (
                let i = 0;
                i < 45;
                i++
            ) {

                const heart =
                    document.createElement(
                        "span"
                    );

                heart.className =
                    "orbit-heart";


                heart.textContent =
                    tipos[
                        Math.floor(
                            Math.random() *
                            tipos.length
                        )
                    ];


                heart.style.setProperty(
                    "--radius",
                    (
                        150 +
                        Math.random() *
                        260
                    ) +
                    "px"
                );


                heart.style.setProperty(
                    "--size",
                    (
                        12 +
                        Math.random() *
                        23
                    ) +
                    "px"
                );


                heart.style.setProperty(
                    "--duration",
                    (
                        12 +
                        Math.random() *
                        15
                    ) +
                    "s"
                );


                heart.style.setProperty(
                    "--delay",
                    -Math.random() *
                    15 +
                    "s"
                );


                heart.style.setProperty(
                    "--angle",
                    Math.random() *
                    360 +
                    "deg"
                );


                container.appendChild(
                    heart
                );

            }

        }



        /* =====================================
           GALAXIA
        ===================================== */

        const frases = [

            "Entre millones de personas, qué bonito haber coincidido contigo. ❤️",

            "Hay personas que hacen especiales los días normales. ✨",

            "Tu forma de ser tiene algo que hace diferentes los momentos. 💜",

            "Admiro tus sueños, tus metas y todo lo que estás construyendo. 🌙",

            "Que nunca dejes de perseguir aquello que realmente quieres. ✨",

            "Tu sonrisa tiene una manera especial de iluminar los momentos. ❤️",

            "Entre tantos caminos, qué bonito que la vida nos haya hecho coincidir. 🌌",

            "Dicen que los doctores cuidan corazones... y tú tienes una forma especial de alegrar uno. 🩺❤️",

            "Entre batas, sueños y metas, nunca olvides lo especial que eres. 🩺✨",

            "Elegiste un camino para cuidar a otros; nunca olvides cuidar también tus propios sueños. 🩺",

            "Esta galaxia tiene millones de estrellas, pero esta noche está dedicada a ti. 🌌❤️",

            "Ojalá este nuevo año esté lleno de momentos que algún día quieras recordar. 💖",

            "Que la vida te devuelva todo lo bonito que das a los demás. ❤️",

            "Hoy el universo tiene una pequeña celebración con tu nombre. 🌌",

            "Hay recuerdos que duran segundos y otros que se quedan para siempre. ✨",

            "Esta pequeña galaxia solamente necesitaba un nombre: Milenka. ❤️"

        ];


        let frase =
            0;

        let fraseTimer =
            null;


        const galaxyPhrase =
            document.getElementById(
                "galaxyMainPhrase"
            );


        function iniciarGalaxia() {

            crearEstrellas();

            crearPolvo();

            crearDestellos();

            crearCorazones();

            crearOrbitas();


            const intro =
                document.getElementById(
                    "galaxyIntro"
                );


            const center =
                document.getElementById(
                    "galaxyCenter"
                );


            const constellation =
                document.getElementById(
                    "constellation"
                );


            intro.classList
                .remove("hide");


            center.classList
                .remove("reveal");


            constellation.classList
                .remove("show");


            frase = 0;


            galaxyPhrase
                .textContent =
                frases[0];


            galaxyPhrase.style.opacity =
                "0";


            setTimeout(
                () => {

                    center.classList
                        .add("reveal");

                },
                3500
            );


            setTimeout(
                () => {

                    constellation.classList
                        .add("show");

                },
                4300
            );


            setTimeout(
                () => {

                    intro.classList
                        .add("hide");

                },
                5200
            );


            setTimeout(
                () => {

                    galaxyPhrase.style.opacity =
                        "1";

                },
                6000
            );


            if (fraseTimer) {

                clearInterval(
                    fraseTimer
                );

            }


            fraseTimer =
                setInterval(
                    () => {

                        galaxyPhrase.style.opacity =
                            "0";


                        setTimeout(
                            () => {

                                frase++;

                                if (
                                    frase >=
                                    frases.length
                                ) {

                                    frase = 0;

                                }


                                galaxyPhrase
                                    .textContent =
                                    frases[
                                        frase
                                    ];


                                galaxyPhrase
                                    .style.opacity =
                                    "1";

                            },
                            700
                        );

                    },
                    5000
                );

        }



        /* =====================================
           DETALLES
        ===================================== */

        detailsContinueButton
            .addEventListener(
                "click",
                () => {

                    iniciarFinal();

                    mostrarEscena(
                        escenas.final
                    );

                }
            );



        /* =====================================
           FINAL TYPEWRITER
        ===================================== */

        function iniciarFinal() {

            const text =
                "Espero que este pequeño universo te recuerde algo sencillo: que tu cumpleaños merece ser celebrado, que tus sueños merecen ser perseguidos y que todavía quedan muchísimos momentos bonitos por vivir. Feliz cumpleaños, Milenka. ❤️";


            const target =
                document.getElementById(
                    "finalTypewriter"
                );


            target.textContent =
                "";


            let i = 0;


            const timer =
                setInterval(
                    () => {

                        target.textContent +=
                            text[i];

                        i++;


                        if (
                            i >=
                            text.length
                        ) {

                            clearInterval(
                                timer
                            );

                        }

                    },
                    35
                );

        }



        /* =====================================
           CURSOR
        ===================================== */

        const cursor =
            document.getElementById(
                "cursorGlow"
            );


        document.addEventListener(
            "mousemove",
            event => {

                cursor.style.left =
                    event.clientX + "px";

                cursor.style.top =
                    event.clientY + "px";

            }
        );



        /* =====================================
           BOTÓN INICIAL
        ===================================== */

        openButton.addEventListener(
            "click",
            () => {

                iniciarMusica();

                mostrarEscena(
                    escenas.birthday
                );

            }
        );



        /* =====================================
           CUMPLEAÑOS → FOTOS
        ===================================== */

        continueButton.addEventListener(
            "click",
            () => {

                fotoActual = 0;

                mostrarFoto();

                mostrarEscena(
                    escenas.memories
                );

            }
        );



        /* =====================================
           SIGUIENTE FOTO
        ===================================== */

        nextMemoryButton.addEventListener(
            "click",
            () => {

                fotoActual++;


                if (
                    fotoActual <
                    fotos.length
                ) {

                    mostrarFoto();

                } else {

                    videoActual = 0;

                    cargarVideo();

                    mostrarEscena(
                        escenas.videos
                    );

                }

            }
        );



        /* =====================================
           SIGUIENTE VIDEO
        ===================================== */

        nextVideoButton.addEventListener(
            "click",
            () => {

                videoActual++;


                if (
                    videoActual <
                    videos.length
                ) {

                    cargarVideo();

                } else {

                    video.pause();

                    mostrarEscena(
                        escenas.letter
                    );

                }

            }
        );



        /* =====================================
           CARTA → GALAXIA
        ===================================== */

        letterContinueButton
            .addEventListener(
                "click",
                () => {

                    iniciarGalaxia();

                    mostrarEscena(
                        escenas.galaxy
                    );

                }
            );



        /* =====================================
           GALAXIA → DETALLES
        ===================================== */

        galaxyContinueButton
            .addEventListener(
                "click",
                () => {

                    if (
                        fraseTimer
                    ) {

                        clearInterval(
                            fraseTimer
                        );

                        fraseTimer =
                            null;

                    }


                    mostrarEscena(
                        escenas.details
                    );

                }
            );



        /* =====================================
           REINICIAR
        ===================================== */

        restartButton
            .addEventListener(
                "click",
                () => {

                    location.reload();

                }
            );



        /* =====================================
           INICIALIZAR
        ===================================== */

        mostrarFoto();

        console.log(
            "❤️ Todo listo."
        );

    }
);