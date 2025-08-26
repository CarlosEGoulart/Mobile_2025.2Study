import { View, Text, Button } from 'react-native'
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
    <View style={{marginBottom: 16}}>
      <Text>Author: {author}</Text>
      <Text>Title: {title}</Text>
      <Text>Content: {content}</Text>
      {myLikes && <Text>Likes: {myLikes}</Text>}
      
      <Button title='curtir' onPress={(handleLikes)}/>
    </View>
  )
}