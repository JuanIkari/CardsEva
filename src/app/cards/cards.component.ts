import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor, NgForOf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  Personajes = [
    {
      nombre: "Shinji Ikari",
      img: "https://wiki.evageeks.org/images/thumb/c/ca/26_C343_shinji-grin.jpg/260px-26_C343_shinji-grin.jpg",
      descripcion: "Shinji Ikari es el protagonista principal de Neon Genesis Evangelion. Es un adolescente de 14 años al comienzo de la serie. Shinji es introspectivo y emocionalmente complejo. Vive con su tutora, Misato Katsuragi, y se une al proyecto Evangelion como piloto del EVA Unidad-01. A lo largo de la serie, lucha con su sentido de autovaloración, la relación con su padre distante, y el peso de la responsabilidad como piloto para proteger la humanidad de los ataques de los Ángeles."
    },
    {
      nombre: "Rei Ayanami",
      img: "https://pm1.aminoapps.com/6646/541105f468e7a264cacf65bb1abcc6eaf7e3fe67_00.jpg",
      descripcion: "Rei Ayanami es una de las pilotos del proyecto Evangelion, asignada a pilotar el EVA Unidad-00. Es un enigma para muchos, con una personalidad reservada y misteriosa. Rei muestra poco interés en las relaciones interpersonales y parece tener una conexión especial con los Evangelion. A lo largo de la serie, se exploran los misterios de su origen y su relación con el Comandante Gendo Ikari, así como su papel crucial en el destino de la humanidad."
    },
    {
      nombre: "Asuka Langley Soryu",
      img: "https://somoskudasai.com/wp-content/uploads/2022/10/portada_evangelion-133.jpg",
      descripcion: "Asuka Langley Soryu es una piloto de origen alemán asignada al EVA Unidad-02. Es conocida por su personalidad extrovertida, competitiva y a menudo arrogante. Asuka se enorgullece de sus habilidades como piloto y se esfuerza por destacar en la lucha contra los Ángeles. Sin embargo, bajo su fachada segura de sí misma, Asuka lucha con profundas inseguridades y traumas del pasado, que eventualmente la llevan a una crisis emocional a medida que avanza la serie."
    },
    {
      nombre: "Misato Katsuragi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQml8FjS9rX0mBHbKXdPz301CSmkzdUvDBDWURggW4X4UWporO_610jkiGq_0_8EEADc",
      descripcion: "Misato Katsuragi es una oficial de NERV y la supervisora de los pilotos de Evangelion, incluido Shinji Ikari. Es conocida por su personalidad amigable, extrovertida y a menudo despreocupada. Sin embargo, detrás de su fachada de despreocupación, Misato alberga profundas cicatrices emocionales debido a su pasado y a la naturaleza de su trabajo. Desempeña un papel importante como figura materna para los pilotos jóvenes, proporcionando apoyo emocional y liderazgo durante momentos de crisis."
    },
    {
      nombre: "Gendo Ikari",
      img: "https://pm1.aminoapps.com/6467/e4a3887e28f1cfe85c3cf654ceafe18fac1ccdf5_hq.jpg",
      descripcion: "Gendo Ikari es el Comandante de NERV y el padre distante de Shinji Ikari. Es un individuo enigmático y calculador que rara vez muestra sus verdaderas emociones. Gendo está obsesionado con su propio plan para el Instrumentality Humano y utiliza a los Evangelion como herramientas para alcanzar sus objetivos. Su relación con Shinji es tensa y compleja, marcada por la falta de comunicación y el dolor emocional."
    },
    {
      nombre: "Ryoji Kaji",
      img: "https://www.sosyncd.com/wp-content/uploads/2022/07/154.png",
      descripcion: "Ryoji Kaji es un agente de inteligencia asignado a investigar los secretos detrás de NERV y los Evangelion. Es conocido por su encanto, su habilidad para leer a las personas y su actitud despreocupada. Kaji tiene una relación complicada con Misato Katsuragi, así como con otros personajes clave en la serie. A medida que avanza la trama, se revelan sus verdaderas lealtades y motivaciones."
    },
    {
      nombre: "Toji Suzuhara",
      img: "https://i.pinimg.com/474x/15/57/f5/1557f5a2e3222cef0fbfb09ee9eb3b21.jpg",
      descripcion: "Toji Suzuhara es un estudiante de secundaria y amigo de Shinji Ikari. Es seleccionado brevemente como piloto del EVA Unidad-03 durante una de las misiones de NERV. Toji inicialmente resiente a Shinji por sus acciones como piloto de Evangelion, pero a medida que la serie avanza, su relación se desarrolla y se profundiza. Toji enfrenta desafíos personales y emocionales significativos a lo largo de la serie."
    },
    {
      nombre: "Kaworu Nagisa",
      img: "https://animeargentina.net/wp-content/uploads/2022/09/feliz-cumplean%CC%83os-Kaworu-Nagisa.jpeg",
      descripcion: "Kaworu Nagisa es un misterioso personaje que aparece en la serie más tarde como el Quinto Niño. Se convierte en el piloto del EVA Unidad-02 en sustitución de Asuka Langley Soryu. Kaworu es enigmático y muestra una fascinación inexplicable por Shinji Ikari. A medida que se desarrolla la trama, se revela la verdadera naturaleza y propósito de Kaworu, lo que lleva a un momento crucial en la historia de Evangelion."
    }
  ]
}
