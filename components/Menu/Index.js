import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { MenuStyle } from "./Styles";
import items from "./items";

export default function Menu() {
  const {
    menuItems,
    menuRow,
    iconStyle,
    menuTextBox,
    menuText,
    arrowIcon,
    subTitleStyle,
  } = MenuStyle;
  return (
    <View style={menuItems}>
      {items.map(({ id, icon, title, subTitle }) => {
        return (
          <TouchableOpacity>
            <View style={menuRow} key={id}>
              <FontAwesomeIcon icon={icon} size={24} style={iconStyle} />
              <View style={menuTextBox}>
                <Text style={menuText}>{title}</Text>
                {subTitle && <Text style={subTitleStyle}>{subTitle} </Text>}
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={24}
                style={arrowIcon}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
