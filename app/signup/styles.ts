import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logoImage: {
    width: 180,
    height: 180,
    marginTop: 0,
    marginBottom: 8,
    backgroundColor: "transparent",
  },

  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
    marginBottom: 8,
  },

  tagline: {
    fontSize: 16,
    color: "#666",
  },

  formCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    backgroundColor: "#F9F9F9",
  },

  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },

  eyeButton: {
    padding: 10,
  },

  optionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 4,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#4169E1",
    borderRadius: 4,
    backgroundColor: "#4169E1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  checkboxLabel: {
    fontSize: 14,
    color: "#666",
  },

  signUpButton: {
    backgroundColor: "#4169E1",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },

  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  loginButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#4169E1",
    alignItems: "center",
  },

  loginButtonText: {
    color: "#4169E1",
    fontSize: 16,
    fontWeight: "bold",
  },
});

