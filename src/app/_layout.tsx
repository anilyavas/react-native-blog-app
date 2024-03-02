import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Posts' }} />
      <Stack.Screen name='[slug]' options={{ title: 'Post Details' }} />
    </Stack>
  );
};

export default RootLayout;
