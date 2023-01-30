import React from "react"
import {Image, View,StyleSheet } from "react-native"
import StyledText from "./StyledText"
import RepositoryStats from './RepositoryStats.jsx'
import theme from "../theme"

const RepositoryItemHeader = ({ownerAvatarUrl,fullName,description,language}) => (
    <View style={{flexDirection:'row',paddingBottom:2}}>
        <View style={{paddingRight:10}}>
            <Image style={styles.image} source={{uri:ownerAvatarUrl}}/>
        </View>
        <View style={{flex:1}}>
            <StyledText fontSize='subheading' fontWeight='bold'>Fullname:{fullName}</StyledText>
            <StyledText color='secondary'>Description:{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props}/>
    <RepositoryStats {...props} />
</View>
)
const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingVertical:5
    },  
    language:{
        backgroundColor:theme.colors.primary,
        alignSelf:'flex-start',
        padding:4,
        color:theme.colors.white,
        borderRadius:4,
        overflow:'hidden',
        marginVertical:4
    },
    image:{
        width:48,
        height:48,
        borderRadius:4
    }
})
export default RepositoryItem