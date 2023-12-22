import React, { useContext } from "react";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/Products/Products";
import { ProjectContext } from "../../context/ProjectContext";

const HomePage = () => {
  const slideImages = [
    {
      url: "https://wallpapercave.com/wp/wp11553118.jpg",
      title: "Basketbol",
      description:
        "Bir zamanlar, eski çınar ağacının gölgesindeki bahçede, renk renk meyvelerle dolu bir sepet vardı. Her sabah, genç köylüler sepeti doldurmak için yarışırdı.",
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg",
      title: "Samuray",
      description:
        "Efsanevi ormanın derinliklerinde, doğanın kalbinde, yüzyıllardır unutulmuş bir samuray hikayesi yatar. Onun hikayesi sessizlikte ve yaprakların fısıltılarında saklıdır.",
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg",
      title: "Şehir",
      description:
        "Gece, şehrin sokakları canlanır. Neon ışıklar altında, geleceğin şehri gizemli bir cazibeyle parlar. Her köşede bir hikaye, her sokakta bir macera vardır.",
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
      title: "Dağ",
      description:
        "Bir zamanlar, insanların tanrıların yükseldiğine inandığı, dağlarla çevrili bir dünya vardı. Bu dağ, cesur keşifçilerin hayallerini süsleyen, zaferin doruklarına ulaşma arzusunu yayan bir simgeydi.",
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg",
      title: "Mavi Şehir",
      description:
        "Rüyaların ve gerçekliğin kesiştiği yerde, mavi tonlarda bir şehir var. Bu şehir, zamanın durduğu ve her anın büyüsünün yaşandığı bir yerdir.",
    },
  ];

  const {products} = useContext(ProjectContext)

  return (
    <div>
      <Slider slideImages={slideImages} />
      <br />
      <Products products={products}/>
    </div>
  );
};

export default HomePage;
