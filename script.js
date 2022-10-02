let songIndex = 1;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterplay');
let updowngif = document.getElementById('gifimgplay');
let masterSong = document.getElementById('masterSong');
let myProgressBar = document.getElementById("myProgressbar");
let previousbtn = document.getElementById('previous')
let nextbtn = document.getElementById('next')


let songItemContainer = document.querySelector('.songItemContainer')







// Remember  song 1 will be 2 |  8 will be 9 
let songs = [
    { songName: "Sukhkarta Dukhkarta", filePath: "songs/1.mp3", coverPath: "covers/sukhkarta.jpg", genres:"gen-1" },
    { songName: "Govinda Re", filePath: "songs/2.mp3", coverPath: "covers/govinda.jpg", genres:"gen-1" },
    { songName: "Majha Bappa", filePath: "songs/3.mp3", coverPath: "covers/majhabappa.jpg", genres:"gen-1" },
    { songName: "Morya", filePath: "songs/4.mp3", coverPath: "covers/mryarebappa.jpg", genres:"gen-1" },
    { songName: "Apna Time Ayega", filePath: "songs/5.mp3", coverPath: "covers/apnatimeayega.jpg", genres:"gen-2" },
    { songName: "Azadi", filePath: "songs/6.mp3", coverPath: "covers/azadi.jpg", genres:"gen-2" },
    { songName: "Chichore Song", filePath: "songs/7.mp3", coverPath: "covers/controlchichore.jpg", genres:"gen-3" },
    { songName: "Aa Ra Ra Ra [Tanaji]", filePath: "songs/8.mp3", coverPath: "covers/tanajiarara.jpg", genres:"gen-3" },
    { songName: "Lungi Dance", filePath: "songs/9.mp3", coverPath: "covers/lungidance.jpg", genres:"gen-3" },
    { songName: "Namo Namo", filePath: "songs/10.mp3", coverPath: "covers/namonamo.jpg", genres:"gen-3" },
    { songName: "We Go UnderGround", filePath: "songs/11.mp3", coverPath: "covers/wegounderground.jpg", genres:"gen-2" },
]
let idindex = 0
songs.forEach((e, i) => {
    songItemContainer.appendChild(document.createElement("div"))
})

songItemContainer.childNodes.forEach((element, i) => {
        element.appendChild(document.createElement("img"))
        element.appendChild(document.createElement("span"))
        element.appendChild(document.createElement("span"))
        
        element.classList.add('songItem')
        element.classList.add('gen-all')
        element.classList.add(songs[idindex].genres)
        element.childNodes[1].classList.add("SongName")
        element.childNodes[2].appendChild(document.createElement("i"))
        element.childNodes[2].firstChild.classList.add("songItemPlay")
        element.childNodes[2].firstChild.classList.add("far")
        element.childNodes[2].firstChild.classList.add("fa-play-circle")
        element.childNodes[2].firstChild.id = parseInt(idindex)
        idindex++
})

let SongItems = Array.from(document.getElementsByClassName('songItem'));

SongItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByTagName("span")[0].innerText = songs[i].songName
    console.log(songs[i].songName)

})

// audioElement.play()
// Handle play/pause

document.onkeydown = function (e) {
    if (e.key === " " && e.target === document.body) {
        e.preventDefault();
    }
}
document.onkeydown = function (e) {


    console.log(e.key)
    if (e.key == " ") {
        e.preventDefault();  
        masterPlay.classList.add('hoverd')
        setTimeout(() => {
            masterPlay.classList.remove('hoverd')
        }, 150);
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play()
            masterPlay.classList.remove('fa-play-circle')
            masterPlay.classList.add('fa-pause-circle')
            updowngif.style.opacity = 1
        }
        else {
            updowngif.style.opacity = 0
            masterPlay.classList.add('fa-play-circle')
            masterPlay.classList.remove('fa-pause-circle')
            audioElement.pause()
        }
    }

}
masterPlay.addEventListener("click", () => {
    masterPlay.classList.add('hoverd')
    setTimeout(() => {
        masterPlay.classList.remove('hoverd')
    }, 150);
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        updowngif.style.opacity = 1
    }
    else {
        updowngif.style.opacity = 0
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        audioElement.pause()
    }
})

// Update Progress Bar Acoording to music
audioElement.addEventListener('timeupdate', () => {
    progress = parseFloat((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})


const makeAllplays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllplays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex + 1}.mp3`
        masterSong.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        updowngif.style.opacity = 1
        masterPlay.classList.add('fa-pause-circle')
        masterPlay.classList.remove('fa-play-circle')
    })

})

previousbtn.addEventListener("click", () => {
    if (songIndex >= 1) {
        console.log("Hi Prev")
        songIndex = songIndex - 1
        audioElement.src = `songs/${songIndex + 1}.mp3`
        masterSong.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        updowngif.style.opacity = 1
        masterPlay.classList.add('fa-pause-circle')
        masterPlay.classList.remove('fa-play-circle')
    }
})
nextbtn.addEventListener("click", () => {
    if (songIndex <= 8) {
        console.log("Hi Next")
        songIndex = songIndex + 1
        audioElement.src = `songs/${songIndex + 1}.mp3`
        masterSong.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        updowngif.style.opacity = 1
        masterPlay.classList.add('fa-pause-circle')
        masterPlay.classList.remove('fa-play-circle')
    }
})
setInterval(() => {

    if (audioElement.duration - audioElement.currentTime == 0) {
        updowngif.style.opacity = 0
        console.log("yes")

    }
}, 10);


// Dropdownup







// Genres
let rel_songs = Array.from(document.getElementsByClassName('gen-1'));
let rap_songs = Array.from(document.getElementsByClassName('gen-2'));
let simple_songs = Array.from(document.getElementsByClassName('gen-3'));
let all_songs = Array.from(document.getElementsByClassName('gen-all'));




function religous_song() {



    rel_songs.forEach((element, i) => {
        if (element.style.display == 'none') {
            element.style.display = ''
        }
    })
    rap_songs.forEach((element, i) => {
        element.style.display = 'none'

    })
    simple_songs.forEach((element, i) => {
        element.style.display = 'none'

    })


}

function rap_song() {

    rap_songs.forEach((element, i) => {
        if (element.style.display == 'none') {
            element.style.display = ''
        }
    })
    simple_songs.forEach((element, i) => {
        element.style.display = 'none'

    })
    rel_songs.forEach((element, i) => {
        element.style.display = 'none'

    })
}

function simple_song() {

    simple_songs.forEach((element, i) => {
        if (element.style.display == 'none') {
            element.style.display = ''
        }
    })
    rap_songs.forEach((element, i) => {
        element.style.display = 'none'

    })
    rel_songs.forEach((element, i) => {
        element.style.display = 'none'

    })
}

function all_song() {

    all_songs.forEach((element, i) => {
        element.style.display = ''

    })
}

