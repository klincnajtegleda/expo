import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.mainTitle}>Tehnologija & Materiali</Text>
      <Text style={styles.intro}>
        3D tiskanje zajema različne metode in široko paleto materialov za izdelavo uporabnih predmetov.
      </Text>

      {/* Prva sekcija s sliko na sredini */}
      <Animated.View entering={FadeInRight.duration(600)} style={styles.sectionCentered}>
        <Image 
          source={require('@/assets/52f8641c-63f0-4e58-b1a4-a9fcd956ba3f.jpg')} 
          style={styles.sectionImageVertical} 
          resizeMode="cover" 
        />
        
        {/* Tekst pod sliko z normalno, berljivo velikostjo */}
        <View style={styles.textCenterAlign}>
          <Text style={styles.sectionTitle}>FDM Tehnologija</Text>
          <Text style={styles.sectionText}>
            Deluje na principu taljenja filamenta skozi ogrevano šobo, ki polaga material plast za plastjo.
          </Text>
        </View>
      </Animated.View>

      {/* Druga sekcija z materiali */}
      <Animated.View entering={FadeInRight.duration(600).delay(200)} style={styles.section}>
        <Text style={styles.sectionTitle}>Materiali za 3D tisk</Text>
        <Text style={styles.materialDesc}>• PLA: Enostaven za začetnike, biološko razgradljiv.</Text>
        <Text style={styles.materialDesc}>• PETG: Odporen na udarce in temperaturo.</Text>
        <Text style={styles.materialDesc}>• TPU: Fleksibilen in gumijast material.</Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0f172a' 
  },
  content: { 
    padding: 20 
  },
  mainTitle: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#f8fafc', 
    marginBottom: 8, 
    marginTop: 10 
  },
  intro: { 
    fontSize: 15, 
    color: '#94a3b8', 
    marginBottom: 24, 
    lineHeight: 22 
  },
  section: { 
    backgroundColor: '#1e293b', 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#334155' 
  },
  sectionCentered: { 
    backgroundColor: '#1e293b', 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#334155',
    alignItems: 'center', // Centrira sliko na sredino
  },
  textCenterAlign: {
    alignSelf: 'stretch',
    marginTop: 14,
    alignItems: 'center', // Centriramo tudi tekst, da lepo paše pod sliko
  },
  sectionImageVertical: { 
    width: '75%', // Slika je lepo velika (75% širine kartice)
    aspectRatio: 0.6667, // Format 2:3 (720x1080)
    borderRadius: 12, 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: '#38bdf8', 
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionText: { 
    fontSize: 14, // Normalna, berljiva velikost teksta
    color: '#cbd5e1', 
    lineHeight: 22,
    textAlign: 'center',
  },
  materialDesc: { 
    fontSize: 14, 
    color: '#cbd5e1', 
    marginBottom: 6, 
  },
});