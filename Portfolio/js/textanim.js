const txtanim = document.querySelector('.textanim');
            new Typewriter(txtanim, {
               loop: true,
                deleteSpeed: 200
            })
            .changeDelay(200)
            .typeString('Developpeur Web debutante')
            .pauseFor(400)
            .deleteChars(9)
            .typeString('Senior')
            .pauseFor(400)
            .deleteChars(6)
            .typeString('Junior')
            .pause(1000)
            .deleteChars(6)
            .start();