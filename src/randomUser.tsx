import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageData {
  src: string;
  text: string;
}

const images: ImageData[] = [
  { src: "/images/1.jpg", text: "Este dia fue especial para mi porque conecte con tu familia un poquito mas, esa noche me di cuenta que queria quedarme contigo para siempre, me quisiste y aceptaste incluso sabiendo de las pendejadas que causaron mi mano jodida ." },
  { src: "/images/2.jpg", text: "Esta foto me encanta, literalmente capta la escencia de tu sonrisa que amo y mi cara de enamorado, perdidamente enamorado." },
  { src: "/images/3.jpg", text: "Porfin somos novios, me tarde poquillo puede ser, pero que dia tan mas feliz, muchos sentimientos pasaron por mi ese dia. Me haces tan feliz !!!!!" },
  { src: "/images/4.jpg", text: "Ya somos novios pero esta foto es la definicion de nosotros, tu siendo tu y yo siendo yo. Te amo tanto de verdad" },
  { src: "/images/5.jpg", text: "No de verdad que buena peda JAJAJAJAJ, nos pasamos con las fotos pero fue algo muy bonito. Nos dijimos que nos amabamos porfin despues de haberlo tenido atorado por un tiempo." },
  { src: "/images/6.jpg", text: "Este tipo de fotos me gustan mucho porque me encanta besarte, ese dia me encanto como te veias, estoy muy enamorado fernanda es increible." },
  { src: "/images/7.jpg", text: "El primer mes juntitos y nuestra primer maniobra juntos, me encanto ese dia." },
  { src: "/images/8.jpg", text: "BIEN TIESOTES, si esa foto fuera hoy tu estarias jugando blockblast. Que nostalgia ver estos momentos y pensar que ya estamos mas cerca de casarnos que de conocernos jiji." },
  { src: "/images/9.jpg", text: "Este dia fue muy especial, una estrella fugaz nunca antes vista y unas mariposas en la panza mas fuertes que la estrella fugaz. Nuestro primer beso que hicieron explotar mi mente." },
  { src: "/images/10.jpg", text: "TE AMO, TE AMO, TE AMO." },
  { src: "/images/11.jpg", text: "No se si esta fue la vez que llore, pero realmente fue algo especial para mi, eres un pilar para mi y te agradezco siempre tus brazos abiertos." },
  { src: "/images/12.jpg", text: "Que bonito dia pisteando y skincare con el amor de mi vida, agusticidad al 100, te amo muchisimo." },
  { src: "/images/13.jpg", text: "Los modelos en accion, eres tan hermosa, me encantas, de verdad que estoy perdidamente enamorado de ti hermosa, mi ultimo dia de pistear tmb lol." },
  { src: "/images/14.jpg", text: "En esta relacion amamos los del gordo, vamos mas seguido. Un dia despues de que conocieras a mi familia." },
  { src: "/images/15.jpg", text: "Estas fotos de verdad que las amo, siento que estan demasiado badass, que deberias de darme una copia." },
  { src: "/images/16.jpg", text: "Amo esta foto curiosamente. Amo como se ven tus ojos, tus pestañas, tus labios, tu todo." },
  { src: "/images/17.jpg", text: "AY NO FERNANDA ESQUE COMO NO ENAMORARME COMO ESA SONRISA TAN HERMOSA!!!!!." },
  { src: "/images/18.jpg", text: "Nombre yo veo esta foto y me acuerdo de derretirme por tu mirada, de verdad que tus ojos me matan, me enamoro siempre mas." },
  { src: "/images/19.jpg", text: "Tan clavado me tienes que ahi estoy a las 7 de la mañana viendo jugar a Emilio gritando a todo pulmon para sacarte una sonrisa." },
  { src: "/images/20.jpg", text: "De mis fotos favoritas de verdad que NO PUEDO, estoy muy loco por ti wow con todo de esta foto." },
  { src: "/images/21.jpg", text: "Uno de los varias facetimes que tuvimos y tendremos por la puta distancia la odio ya casemonos porfavor." },
  { src: "/images/22.jpg", text: "Nosotros en una foto, tu molestandome y yo de streamer." },
  { src: "/images/23.jpg", text: "AMOR ETERNO." },
  { src: "/images/24.jpg", text: "Te diria que amo esta foto pero la verdad no me gusta nada porque estos momentos los odio, tener que irme a mi casa despues de estar contigo que tu eres mi hogar." },
  { src: "/images/25.jpg", text: "No sabes lo mucho que significo esto para mi, mi fiel compañera de vida apoyando un sueño frutrado aunque el gaming no sea lo tuyo, bien enamorados." },


];

export default function LoveAnniversary() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-300 p-6 text-center">
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-red-600 mb-6">6 Meses</h1>
        <motion.img
          src={currentImage.src}
          alt="Nosotros"
          className="rounded-lg shadow-lg mb-6 w-80 h-80 object-cover"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <p className="text-xl text-gray-700 mb-6 font-semibold">{currentImage.text}</p>
        
        <button
          onClick={changeImage}
          className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg"
        >
          Cambiar Imagen
        </button>
      </motion.div>
    </div>
  );
}
