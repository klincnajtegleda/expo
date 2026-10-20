import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Okrogel okvir z začetnicami ali ikono */}
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>3D</Text>
        </View>

        {/* Tvoje ime in vloga */}
        <Text style={styles.name}>Marcel Klinc</Text>
        <Text style={styles.role}>Avtor aplikacije</Text>

        <View style={styles.divider} />

        {/* Preprost in jedrnat opis */}
        <Text style={styles.bio}>
          Sem avtor te mobilne aplikacije. Izdelal sem jo v ogrodju Expo z uporabo TypeScripta.
          Moj najljubši hobi je 3D tiskanje, zato sem to tehnologijo želel predstaviti v tej aplikaciji.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0f172a', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  card: { 
    backgroundColor: '#1e293b', 
    borderRadius: 20, 
    padding: 24, 
    width: '100%', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#334155' 
  },
  avatarContainer: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#0284c7', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 16 
  },
  avatarText: { 
    fontSize: 24, 
    fontWeight: '800', 
    color: '#ffffff' 
  },
  name: { 
    fontSize: 22, 
    fontWeight: '800', 
    color: '#f8fafc', 
    marginBottom: 4 
  },
  role: { 
    fontSize: 14, 
    color: '#38bdf8', 
    fontWeight: '600', 
    marginBottom: 16 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#334155', 
    width: '100%', 
    marginVertical: 16 
  },
  bio: { 
    fontSize: 14, 
    color: '#94a3b8', 
    textAlign: 'center', 
    lineHeight: 22 
  },
});