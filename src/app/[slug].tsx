import { View, Text, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { getPost } from '../repository/postRepository';
import Markdown from 'react-native-markdown-display';

const PostDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  if (!post) {
    return <Text>Post not found</Text>;
  }
  return (
    <ScrollView
      contentContainerStyle={{
        maxWidth: 960,
        marginHorizontal: 'auto',
        width: '100%',
        padding: 20,
      }}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 20 }}>{post.title}</Text>
      <Markdown>{post.content}</Markdown>
    </ScrollView>
  );
};

export default PostDetailsPage;
