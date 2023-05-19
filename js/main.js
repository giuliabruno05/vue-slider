

// VUE 

const {createApp} = Vue

createApp({
    data(){
       
        return{
            activeImage: 0,
            movie:{
                images: [
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp',
                ],
            title: [
                'Marvel\\s Spiderman Miles Morale',
                'Ratchet & Clank: Rift Apart',
                'Fortnite',
                'Stray',
                "Marvel's Avengers",
            ],

            text: [
                'Experience the rise of Miles Morales as the new hero masters ,incredible, explosive new powers to become his own Spider-Man.',
                'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            ]
            }
        }
    },
    methods: {
        btnNext() {
            this.activeImage++;
            if (this.activeImage === this.movie.images.lenght) {
                this.activeImage = 0;
            }
        },

        btnPrev () {
            this.activeImage--;
            if (this.activeImage < 0) {
                this.activeImage = this.movie.images.lenght 
            }
        } 
    }
}) .mount("#app")