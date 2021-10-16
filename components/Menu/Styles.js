import { StyleSheet } from "react-native";

export const MenuStyle = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  iconStyle: {
    color: "white",
  },

  menuTextBox: {
    flexGrow: 1,
  },

  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    textTransform: "uppercase",
  },

  arrowIcon: {
    color: "#4D4D4E",
  },

  subTitleStyle: {
    color: "gray",
    fontSize: 14,
    marginLeft: 15,
  },
});
