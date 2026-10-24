import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";

// const quotes = [
//   {
//     category: "😂 FUNNY",
//     emoji: "🤣",
//     quote: "You are not lazy. You are just running in battery-saving mode.",
//     author: "Life Coach: Your Bed",
//     color: "#FFF0E5",
//     accent: "#E97835",
//   },
//   {
//     category: "🚀 MOTIVATION",
//     emoji: "🔥",
//     quote: "Your future is created by what you do today, not tomorrow.",
//     author: "Your Future Self",
//     color: "#EAEAFF",
//     accent: "#6558E8",
//   },
//   {
//     category: "💎 SUCCESS",
//     emoji: "🏆",
//     quote: "Dream big, start small, and keep moving forward.",
//     author: "The Winning Mindset",
//     color: "#FFF5D9",
//     accent: "#B8860B",
//   },
//   {
//     category: "😊 POSITIVE VIBES",
//     emoji: "☀️",
//     quote: "A small smile can make an ordinary day extraordinary.",
//     author: "A Little Positivity",
//     color: "#E4F8EC",
//     accent: "#21965B",
//   },
//   {
//     category: "💪 SELF-CONFIDENCE",
//     emoji: "👑",
//     quote:
//       "Stop comparing your chapter one with someone else’s chapter twenty.",
//     author: "Believe in Yourself",
//     color: "#FFE8F0",
//     accent: "#D94C82",
//   },
//   {
//     category: "🧠 SMART THINKING",
//     emoji: "💡",
//     quote: "Work smarter, learn faster, and never stop asking questions.",
//     author: "The Curious Mind",
//     color: "#E2F6FA",
//     accent: "#17869B",
//   },
//   {
//     category: "❤️ FRIENDSHIP",
//     emoji: "🤝",
//     quote:
//       "Good friends know your stories. Best friends helped you create them.",
//     author: "Friendship Club",
//     color: "#FCE7F3",
//     accent: "#BE4786",
//   },
//   {
//     category: "😎 ATTITUDE",
//     emoji: "⚡",
//     quote: "I am not perfect, but my limited edition is priceless.",
//     author: "Your Inner Superstar",
//     color: "#ECE8FF",
//     accent: "#7754D9",
//   },
//   {
//     category: "🌱 GROWTH",
//     emoji: "🌳",
//     quote:
//       "You do not have to be great to start, but you have to start to grow.",
//     author: "Keep Growing",
//     color: "#E8F5DF",
//     accent: "#568B35",
//   },
//   {
//     category: "🤣 MORE HUMOUR",
//     emoji: "☕",
//     quote: "My plan for today? Stay positive and pretend my coffee is working.",
//     author: "The Sleepy Genius",
//     color: "#F9EADD",
//     accent: "#A76A3D",
//   },
// ];

const quotes = [
  {
    category: "Funny",
    emoji: "😂",
    quote:
      "My bed and I are perfect for each other, but my alarm clock keeps trying to break us up.",
    author: "Sleep Lover",
    color: "#FFF0E6",
    accent: "#F97316",
  },
  {
    category: "Savage",
    emoji: "😎",
    quote: "I am not lazy. I am on energy-saving mode.",
    author: "Battery Saver",
    color: "#EDE9FE",
    accent: "#7C3AED",
  },
  {
    category: "Student Life",
    emoji: "📚",
    quote:
      "I studied for 2 hours… and then rewarded myself with 6 hours of rest.",
    author: "Every Student",
    color: "#DBEAFE",
    accent: "#2563EB",
  },
  {
    category: "Motivation 😂",
    emoji: "💸",
    quote: "Dream big, work hard, and check your bank balance less often.",
    author: "Future Crorepati",
    color: "#D1FAE5",
    accent: "#059669",
  },
  {
    category: "Single Life",
    emoji: "💔",
    quote:
      "My crush said, 'You deserve better.' So I started looking for a better crush.",
    author: "Heartbroken Legend",
    color: "#FCE7F3",
    accent: "#DB2777",
  },
  {
    category: "Coding",
    emoji: "💻",
    quote: "99 bugs in my code, fix one bug, 127 bugs in my code.",
    author: "Developer Life",
    color: "#E0F2FE",
    accent: "#0284C7",
  },
  {
    category: "Food Lover",
    emoji: "🍕",
    quote: "I follow a balanced diet: one pizza in each hand.",
    author: "Foodie",
    color: "#FEF3C7",
    accent: "#D97706",
  },
  {
    category: "Attitude",
    emoji: "🕶️",
    quote:
      "I don't have an attitude problem. You have a problem with my attitude.",
    author: "Mr. Cool",
    color: "#F3F4F6",
    accent: "#374151",
  },
  {
    category: "Salary Day",
    emoji: "💰",
    quote: "Salary comes like a king and leaves like a thief.",
    author: "Middle-Class Life",
    color: "#DCFCE7",
    accent: "#16A34A",
  },
  {
    category: "Gym Life",
    emoji: "🏋️",
    quote: "I don't need a personal trainer. My guilt trains me every morning.",
    author: "Fitness Expert 😂",
    color: "#FFE4E6",
    accent: "#E11D48",
  },
  {
    category: "Friendship",
    emoji: "🤝",
    quote:
      "A true friend helps you hide your problems… and then tells everyone the story.",
    author: "Best Friend",
    color: "#F3E8FF",
    accent: "#9333EA",
  },
  {
    category: "Monday Mood",
    emoji: "😴",
    quote: "Monday is proof that weekends are never long enough.",
    author: "Office Warrior",
    color: "#E2E8F0",
    accent: "#475569",
  },
];
const getRandomIndex = (previousIndex) => {
  if (quotes.length <= 1) return 0;

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * quotes.length);
  } while (nextIndex === previousIndex);

  return nextIndex;
};

export default function App() {
  const [name, setName] = useState("");
  const [greetingName, setGreetingName] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [hasGreeted, setHasGreeted] = useState(false);

  const showGreeting = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      setHasGreeted(false);
      setGreetingName("");
      Keyboard.dismiss();
      return;
    }

    setGreetingName(trimmedName);
    setQuoteIndex(getRandomIndex(quoteIndex));
    setHasGreeted(true);
    Keyboard.dismiss();
  };

  const anotherQuote = () => {
    setQuoteIndex((previous) => getRandomIndex(previous));
  };

  const resetApp = () => {
    setName("");
    setGreetingName("");
    setHasGreeted(false);
    setQuoteIndex(0);
    Keyboard.dismiss();
  };

  const currentQuote = quotes[quoteIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6FF" />

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={styles.heroCard}>
          <Text style={styles.heroEmoji}>👋✨</Text>
          <Text style={styles.heroTitle}>A quote just for you.</Text>
          <Text style={styles.heroDescription}>
            Enter your name, discover your vibe, and take a little happiness
            with you.
          </Text>
        </View>

        {/* Name Form */}
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Who are we cheering for?</Text>

          <Text style={styles.label}>YOUR NAME</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name..."
            placeholderTextColor="#9CA3B8"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            maxLength={50}
            returnKeyType="done"
            onSubmitEditing={showGreeting}
          />

          <TouchableOpacity
            style={styles.greetButton}
            onPress={showGreeting}
            activeOpacity={0.85}
          >
            <Text style={styles.greetButtonText}>Surprise Me</Text>
            <Text style={styles.buttonArrow}> ✨</Text>
          </TouchableOpacity>

          {hasGreeted && (
            <TouchableOpacity style={styles.editButton} onPress={resetApp}>
              <Text style={styles.editButtonText}>Try another name</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Personalized Quote */}
        {hasGreeted && (
          <View>
            <Text style={styles.welcomeText}>Hey, {greetingName}! 🎉</Text>
            <Text style={styles.welcomeSubtitle}>
              Today's little message for you
            </Text>

            <View
              style={[
                styles.quoteCard,
                { backgroundColor: currentQuote.color },
              ]}
            >
              <View style={styles.quoteTopRow}>
                <Text style={[styles.category, { color: currentQuote.accent }]}>
                  {currentQuote.category}
                </Text>
                <Text style={styles.quoteEmoji}>{currentQuote.emoji}</Text>
              </View>

              <Text style={[styles.quoteMark, { color: currentQuote.accent }]}>
                “
              </Text>

              <Text style={styles.quoteText}>{currentQuote.quote}</Text>

              <View
                style={[
                  styles.quoteDivider,
                  { backgroundColor: currentQuote.accent },
                ]}
              />

              <Text style={styles.quoteAuthor}>— {currentQuote.author}</Text>
            </View>

            <Text style={styles.bottomMessage}>
              Keep smiling, {greetingName}. Your story is still being written.
              💜
            </Text>
          </View>
        )}

        {/* Footer */}
        <Text style={styles.footer}>MADE WITH ♥ AND A LITTLE MAGIC</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F6FF",
  },
  container: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginBottom: 24,
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: "#6759E8",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  appName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#202748",
  },
  appSubtitle: {
    fontSize: 12,
    color: "#8187A2",
    marginTop: 4,
  },
  heroCard: {
    backgroundColor: "#6759E8",
    borderRadius: 26,
    padding: 24,
    marginBottom: 22,
  },
  heroEmoji: {
    fontSize: 38,
    marginBottom: 13,
  },
  heroTitle: {
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: "#E8E5FF",
  },
  heroPill: {
    alignSelf: "flex-start",
    backgroundColor: "#8176EF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 18,
  },
  heroPillText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EBEDFA",
    marginBottom: 25,
    elevation: 3,
    shadowColor: "#333A70",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  formTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#202748",
    marginBottom: 19,
  },
  label: {
    fontSize: 11,
    fontWeight: "800",
    color: "#7D84A0",
    letterSpacing: 1.5,
    marginBottom: 9,
  },
  input: {
    backgroundColor: "#F7F8FE",
    borderWidth: 1,
    borderColor: "#E5E8F6",
    borderRadius: 13,
    height: 53,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#202748",
    marginBottom: 15,
  },
  greetButton: {
    height: 54,
    backgroundColor: "#6759E8",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  greetButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  buttonArrow: {
    fontSize: 18,
  },
  editButton: {
    alignSelf: "center",
    paddingTop: 14,
  },
  editButtonText: {
    color: "#7166CF",
    fontWeight: "600",
    fontSize: 13,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "800",
    color: "#202748",
    marginBottom: 5,
  },
  welcomeSubtitle: {
    color: "#858BA6",
    fontSize: 13,
    marginBottom: 15,
  },
  quoteCard: {
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  quoteTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  category: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
  quoteEmoji: {
    fontSize: 29,
  },
  quoteMark: {
    fontSize: 68,
    lineHeight: 72,
    fontWeight: "800",
    marginTop: 8,
  },
  quoteText: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "700",
    color: "#242744",
    marginBottom: 22,
  },
  quoteDivider: {
    width: 42,
    height: 4,
    borderRadius: 4,
    marginBottom: 13,
  },
  quoteAuthor: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666B84",
  },
  anotherButton: {
    height: 54,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E3F6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  anotherButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#6759E8",
  },
  bottomMessage: {
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    color: "#858BA6",
    marginTop: 19,
    paddingHorizontal: 8,
  },
  footer: {
    textAlign: "center",
    color: "#A0A6BD",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.3,
    marginTop: 28,
    marginBottom: 8,
  },
});
