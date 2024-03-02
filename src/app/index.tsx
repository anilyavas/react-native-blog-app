import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllPosts } from '../repository/postRepository';
import { useState } from 'react';

export default function Page() {
  // const posts = getAllPosts();
  const [posts, setPosts] = useState(getAllPosts());

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          contentContainerStyle={{ gap: 20 }}
          data={posts}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 16, fontWeight: '500' }}>
              {item.title}
            </Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    // justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
