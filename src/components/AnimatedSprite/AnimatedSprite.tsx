import React, { useEffect, useState } from "react";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import PokeballIcon from "../PokeballIcon";
import Layout from "../../constants/Layout";

interface AnimatedSpriteProps {
  style: StyleProp<ViewStyle>;
}

export default function PokemonAnimated({ style }: AnimatedSpriteProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setError] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const {
    window: { width: screenWidth },
  } = Layout;

  useEffect(() => {
    if (imageLoaded) {
      console.log("get image!");
      Image.getSize(
        "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/wingull.gif",
        (width, height) => setImageSize({ width, height })
      );
    }
  }, [imageLoaded]);

  return (
    <View style={[style]}>
      {!imageLoaded && (
        <PokeballIcon size={screenWidth / 5} animated thinStroke />
      )}
      <Image
        style={{
          ...imageSize,
          minHeight: 50,
          maxHeight: "50%",
          maxWidth: "50%",
          opacity: imageLoaded ? 1 : 0,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/wingull.gif",
        }}
        onLoad={() => {
          setImageLoaded(true);
        }}
        onError={() => {
          setError(true);
        }}
      />
    </View>
  );
}
