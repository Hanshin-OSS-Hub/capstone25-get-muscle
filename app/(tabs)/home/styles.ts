import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContent: {
    paddingBottom: 100,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logoBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  logoImage: {
    width: "100%",
    height: "100%",
  },

  headerText: {
    alignItems: "flex-start",
  },

  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  appSubName: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },

  notificationButton: {
    padding: 8,
  },

  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    gap: 12,
  },

  quickActionButton: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 8,
  },

  routineButton: {
    backgroundColor: "#FF6B35",
  },

  reservationButton: {
    backgroundColor: "#4169E1",
  },

  recordButton: {
    backgroundColor: "#10B981",
  },

  quickActionIcon: {
    marginBottom: 4,
  },

  quickActionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },

  emptyCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    gap: 12,
  },

  emptyCardIcon: {
    marginBottom: 4,
  },

  emptyCardText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },

  recommendationCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    gap: 12,
  },

  recommendationIcon: {
    marginBottom: 4,
  },

  recommendationText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },

  floatingButton: {
    position: "absolute",
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  chatbotIcon: {
    width: 32,
    height: 32,
  },
});

