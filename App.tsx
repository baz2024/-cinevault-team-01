import React, { useState } from "react";
import { View, Text, TextInput, ScrollView,
  StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from
  "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MovieDiscovery from "./components/MovieDiscovery";

export default function App() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.logo}>CINE
            <Text style={styles.accent}>VAULT</Text>
          </Text>
          <Text style={styles.subtitle}>
            Your personal movie universe
          </Text>
          <TextInput
            style={styles.search}
            placeholder="Search for a movie..."
            placeholderTextColor="#A5A7BE"
            value={search}
            onChangeText={setSearch}
          />
          <LinearGradient
            colors={["#624BC9", "#27254F"]}
            style={styles.featured}
          >
            <Text style={styles.label}>FEATURED PREMIERE</Text>
            <Text style={styles.poster}>🚀</Text>
            <Text style={styles.headline}>Beyond Orion</Text>
            <Text style={styles.description}>
              An extraordinary journey beyond the stars.
            </Text>
            <Text style={styles.rating}>Sci-Fi  •  ★ 9.1</Text>
          </LinearGradient>
          <MovieDiscovery search={search} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#10121D" },
  content: { padding: 20, paddingBottom: 36 },
  logo: { color: "white", fontWeight: "900",
    fontSize: 28, marginTop: 12 },
  accent: { color: "#B5A3FF" },
  subtitle: { color: "#AAA9BE", marginTop: 6,
    marginBottom: 22 },
  search: { backgroundColor: "#252638", color: "white",
    padding: 15, borderRadius: 14, marginBottom: 20 },
  featured: { borderRadius: 22, padding: 21 },
  label: { color: "#E2DCFF", fontWeight: "bold",
    fontSize: 11, letterSpacing: 1 },
  poster: { fontSize: 70, textAlign: "center",
    marginVertical: 18 },
  headline: { color: "white", fontWeight: "bold",
    fontSize: 27 },
  description: { color: "#E4DEFF", marginTop: 9,
    lineHeight: 20 },
  rating: { color: "#FFD26C", marginTop: 12,
    fontWeight: "bold" },
});
