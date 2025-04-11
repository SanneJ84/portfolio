/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// Alusta kielenvalinta
let currentLanguage = 'fi'; // Suomi

// Funktio vaihtaa kielen
function changeLanguage() {
    const languageSelect = document.getElementById("languageSelect");
    const selectedLanguage = languageSelect.value;
    const elements = document.querySelectorAll('[data-translate]');
    
    // Tarkista, onko kieltä jo vaihdettu
    if (selectedLanguage !== currentLanguage) {
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[selectedLanguage][key];
        });

        // Päivitä nykyinen kieli
        currentLanguage = selectedLanguage;
    }

    // Päivitä painikkeen teksti vastaamaan valittua kieltä
    const languageButton = document.querySelector('#languageButton');
    languageButton.textContent = selectedLanguage === 'fi' ? 'Vaihda kieli' : 'Switch Language';

    // Vaihda kielen suunta
    document.documentElement.lang = selectedLanguage;
}

// Käännökset
const translations = {
    'fi': {
        'navportfolio': 'Portfolio',
        'navgalleria': 'Galleria',
        'navyhteys': 'Yhteystiedot',
        'get_in_touch': 'Ollaan yhteydessä!',
        'send_message': 'Lähetä viesti, niin palaan asiaan mahdollisimman pian!',
        'GALLERY': 'GALLERIA',
        'pythongame': 'PYTHON PELIPROJEKTI',
        'pythongame2': 'Pieni peli Pygamen avulla jonka tein ohjelmoinnin jatkokurssin päätteeksi. Tavoitteena pelissä on kerätä kolikoita ja välttää ruudulla liikkuvia hirviöitä. Aina kerättyäsi tietyn määrän kolikoita, pelissä tapahtuu pieni muutos joka lisää peliin haastetta. Kolikoista kertyy pisteitä ja pelin loputtua ne jäävät näkyviin jotta voit yrittää parantaa tulostasi.',
        'hangman': 'HIRSIPUU',
        'hangman2': 'Perinteinen hirsipuu peli toteutettuna pygamen avulla. Pelissä tietokone arpoo sanalistoista sanan ja pelaaajat yrittävät arvata koko sanan tai siinä olevan kirjaimen. Peli on ohjelmoitu python kielellä käyttössä on myös Pygame kirjasto.',
        'hedelmapeli': 'HEDELMÄPELI',
        'hedelmapeli2': 'Hedelmäpeli, jossa on tavoitteena saada tiettyjä kuviosarjoja. Pelin alussa on käytössä rahaa x euroa. Pelissä on neljä arvottavaa rullaa. Pelissä voidaan asettaa panos, joka on minimissään 1€. Kun painetaan Pelaa-painiketta arvotaan rullien paikalle kuvat. Kun kuvat on arvottu ohjelma kertoo, saadaanko sillä voittoa. Jokainen pelikierros kuluttaa panoksen verran peljaalla olevia rahoja. Kierroksen voitoista tulee ilmoittaa pelaajalle ja voitot lisätään pelaajan käytössä olevaan rahamäärään. Peliä ei voi jatkaa jos panos on suurempi kuin käytössä olevat rahat.',
        'clicker': 'CLICKER PELI',
        'clicker2': 'Clicker-peli jossa pelaaja klikkailee nappulaa ja kerää pisteitä. Pelin edetessä pelaajalle avautuu uusia näppäimiä käyttöön joita painamalla pelaaja saa lisättyä erilaisia esineitä tai asioita peliin.',
        'voting': 'ÄÄNESTYSSOVELLUS',
        'voting2': 'Sovelluksessa on kaksi erilaista käyttäjätyyppiä: tavallisia käyttäjiä sekä ylläpitäjiä. Ylläpitäjät voivat tehdä uusia äänestyksiä muiden äänestettäviksi sekä halutessaan myös poistaa äänestyksen. Tavalliset käyttäjät voivat selailla äänestyksiä ja äänestää niitä jonka jälkeen näkevät äänestystuloksen.',
        'peliprojekti': 'PELIPROJEKTIT',
        'website': 'VERKKOSIVUT',
        'move': 'Siirry katsomaan koko sivusto!',
        'esittely': 'Hei, olen Jenna, tervetuloa sivuilleni! Tämä portfolio esittelee joitakin projektejani ja saavutuksiani tähän mennessä. Ensikosketukseni koodaukseen oli vuonna 2022, kun osallistuin alaan liittyvään koulutukseen. Siitä innostus todella lähti, ja syyskuussa 2023 aloitin opinnot Tieto- ja viestintätekniikassa. Tavoitteeni on oppia ja kehittyä taitavaksi koodariksi ja myös työllistyä alalle.',
        // Lisää käännökset tarpeen mukaan
    },
    'en': {
        'navportfolio': 'Portfolio',
        'navgalleria': 'Gallery',
        'navyhteys': 'Contact',
        'get_in_touch': 'Get In Touch!',
        'send_message': 'Send me a message and I will get back to you as soon as possible!',
        'GALLERY': 'GALLERY',
        'pythongame': 'PYTHON GAME PROJECT',
        'pythongame2': 'A small game created using Pygame that I made at the end of an advanced programming course. The goal of the game is to collect coins and avoid moving monsters on the screen. Each time you collect a certain number of coins, the game undergoes a small change that adds challenge. Coins accumulate points, and after the game ends, they remain visible so you can try to improve your score.',
        'hangman': 'HANGMAN - GAME',
        'hangman2': 'Traditional hangman game. In the game, the computer randomly selects a word from word lists, and players try to guess the entire word or a letter in it. If the player guesses the word before the character is fully drawn, an animation is added where the character escapes (i drew the character by myself \u{1F600}). The game is programmed in Python and utilizes the Pygame library.',
        'hedelmapeli': 'FRUIT GAME',
        'hedelmapeli2': 'A slot machine game where the goal is to achieve specific combinations of symbols. At the beginning of the game, there is x euros available. The game has four reels that spin. Players can place a bet, which starts at a minimum of 1€. Pressing the Play- button spins the reels and displays symbols. After spinning, the program determines if there is a win. Each game round deducts the bet amount from the players available money. Winnings from each round are announced to the player and added to their total. The game cannot continue if the bet amount exceeds the available money.',
        'clicker': 'CLICKER GAME',
        'clicker2': 'A clicker game where the player clicks a button and collects points. As the game progresses, new buttons become available to the player, and by pressing them, the player can add different items or things to the game.',
        'voting': 'VOTING APP',
        'voting2': 'The application has two different user types: regular users and administrators. Administrators can create new polls for others to vote on and, if desired, also delete a poll. Regular users can browse polls, vote on them, and then see the poll results.',
        'peliprojekti': 'GAME PROJECTS',
        'website': 'WEBSITES',
        'move': 'Move to see the whole site!',
        'esittely': 'Hello, I am Jenna, welcome to my site! This portfolio showcases some of my projects and achievements so far. My first introduction to coding was in 2022 when i participated in a training program related to the field. That is where the excitement really began, and in September 2023, I started my studies in Information and Communication Technology. My goal is to learn and grow into a skilled coder and eventually secure a job in the field.',
        // Add more translations as needed
    }
};

function showPdf(pdfPath, containerId) {
    var pdfContainer = document.getElementById(containerId);
    
    pdfContainer.style.display = "block";
    
    var pdfEmbed = pdfContainer.querySelector("embed");
    pdfEmbed.src = pdfPath;
}

function closePdf(containerId) {
    var pdfContainer = document.getElementById(containerId);

    pdfContainer.style.display = "none";
}
