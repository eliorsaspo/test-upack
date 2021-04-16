import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { theme } from '../core/theme';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'


const LostReportScreen = ({navigation}) => {

    return (
    <ScrollView>
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Signaler une Perte/Vol</Header>
    
        
        <Icon name="gear" size={30} color = '#EB5D35'/>
      
        
            <TextInput  
            label="Description de l'objet perdu"
            returnKeyType="done"
            autoCapitalize="none"
            />
        
     
           <TextInput  
             label="Lieu de perte"
             returnKeyType="next"
             autoCapitalize="none"
            />
        
        
           <TextInput  
             label="Ville"
             returnKeyType="next"
             autoCapitalize="none"
            />
        
        <TextInput  
              label="Code Postal"
              returnKeyType="next"
              autoCapitalize="none"
            />
        <Text>Ajouter une photo de votre carte d'identité </Text>
      <Button 
      title="Pick an image from camera roll" 
      mode="contained"
      onPress={pickImage} 
      style={{ marginTop: 24 }} >Cliquer pour Ajouter</Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <Button
        mode="contained"
        onPress={() => navigation.navigate('dashboard')}
        style={{ marginTop: 24 }}
      >
        Valider
      </Button>
    
    </Background>
    </ScrollView>
       
  );
} 

const styles = StyleSheet.create({
    title : {
        alignSelf: "center",
    },
    
    container: {
        flex: 1,
        padding: 24,
        
    },


    text : {
        marginTop: 15,
        color : 'grey'
    },

    text1: {
        marginTop: 5,
        color : 'grey'
    },


    

    ConnexionButton: {
        backgroundColor: theme.colors.text,
        padding: 10,
        marginTop: 30,
        height: 40,
        marginRight: 80,
        marginLeft: 80,
        borderRadius: 70,
     },
     ConnexionButtonText:{
        color: 'white',
        alignSelf:'center',
     },

     font: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
    },

    fontImage: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 2,
    },
  });

  export default LostReportScreen