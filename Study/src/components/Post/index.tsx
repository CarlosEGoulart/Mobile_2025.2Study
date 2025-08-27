import {StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

interface PostProps {
  author: string;
  title: string;
  content: string;
  likes?: number;
}

export default function Post({author, title, content, likes}:PostProps){
  const [myLikes, setMyLikes] = React.useState<number>(likes || 0);

  const handleLikes = () =>{
    setMyLikes(myLikes + 1)
  }
  
  return (
    <View>
      <Text>Author: {author}</Text>
      <Text>Title: {title}</Text>
      <Text>Content: {content}</Text>
      {myLikes && <Text>Likes: {myLikes}</Text>}
      
      <TouchableOpacity style={styles.button} onPress={handleLikes}>
          <Text style={styles.buttonText}>Curtir</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#303030ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#202020ff',
    backgroundColor: '#dbdbdbff',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1d1d1dff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});