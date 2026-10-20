import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Zgornji banner brez slike z ikono */}
      <Animated.View entering={FadeInUp.duration(800)} style={styles.heroBanner}>
        <Ionicons name="cube" size={64} color="#38bdf8" />
        <Text style={styles.heroTitle}>3D Tisk</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(800).delay(200)} style={styles.textContainer}>
        <Text style={styles.badge}>HOBI & TEHNOLOGIJA</Text>
        <Text style={styles.title}>Predstavitev 3D Tiskanja</Text>
        <Text style={styles.description}>
          Dobrodošli v aplikaciji, posvečeni aditivni proizvodnji. 3D tisk omogoča pretvorbo
          digitalnih modelov v fizične objekte plast za plastjo.
        </Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Kaj ponuja ta aplikacija?</Text>
          <Text style={styles.cardText}>
            • Pregled tehnologij in postopkov{'\n'}
            • Predstavitev materialov (PLA, PETG, TPU){'\n'}
            • Avtorska predstavitev
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0f172a', 
  },
  content: { 
    paddingBottom: 40, 
  },
  heroBanner: {
    width: '100%',
    height: 180,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  heroTitle: {
    color: '#f8fafc',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
  },
  textContainer: { 
    padding: 24, 
  },
  badge: { 
    color: '#38bdf8', 
    fontSize: 12, 
    fontWeight: '700', 
    letterSpacing: 1.2, 
    marginBottom: 8, 
  },
  title: { 
    fontSize: 32, 
    fontWeight: '800', 
    color: '#f8fafc', 
    marginBottom: 12, 
  },
  description: { 
    fontSize: 16, 
    color: '#94a3b8', 
    lineHeight: 24, 
    marginBottom: 24, 
  },
  card: { 
    backgroundColor: '#1e293b', 
    borderRadius: 16, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#334155', 
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#38bdf8', 
    marginBottom: 10, 
  },
  cardText: { 
    fontSize: 14, 
    color: '#cbd5e1', 
    lineHeight: 22, 
  },
});