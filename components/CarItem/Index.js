import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faFan,
  faKey,
  faLock,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Index";

export const CarItem = () => {
  const {
    carContainer,
    header,
    headerTitle,
    icon,
    backgroudImage,
    batterySection,
    batteryImage,
    batteryText,
    status,
    statusText,
    controls,
    controlButton,
  } = styles;

  const [locked, setLocked] = useState(false);

  const lockingFunction = () => {
    setLocked(!locked);
  };
  return (
    <View style={carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={backgroudImage}
      />
      <View style={header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCog} size={24} style={icon} />
        </TouchableOpacity>
        <Text style={headerTitle}>Drip style</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} size={24} style={icon} />
        </TouchableOpacity>
      </View>
      <View style={batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={batteryImage}
        />

        <Text style={batteryText}>150 mi</Text>
      </View>

      <View style={status}>
        <Text style={statusText}>Parked</Text>
      </View>

      <ScrollView>
        <View style={controls}>
          <TouchableOpacity>
            <View style={controlButton}>
              <FontAwesomeIcon icon={faFan} size={24} style={icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={controlButton}>
              <FontAwesomeIcon icon={faKey} size={24} style={icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={lockingFunction}>
            <View style={controlButton}>
              <FontAwesomeIcon
                icon={locked ? faLock : faUnlock}
                size={24}
                style={icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Menu />
      </ScrollView>
    </View>
  );
};
