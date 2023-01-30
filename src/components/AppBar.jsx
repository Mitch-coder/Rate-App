import { View,StyleSheet, Touchable, ScrollView } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants'
import theme from "../theme";
import { Link, useLocation } from 'react-router-native'
import { TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.appBar.primary,
        flexDirection:'row',
        paddingTop:Constants.statusBarHeight + 10,
        paddingBottom:10,
        paddingLeft:10
    },
    active:{
        color:theme.appBar.textPrimary
    },
    text:{
        color:theme.appBar.secondary,
        paddingHorizontal:10
    }
})

const AppBarTab = ({children,to}) =>{
    const {pathname} = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]


    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () =>{
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
            <AppBarTab active to="/">Repositories</AppBarTab>
            <AppBarTab active to="/signin">Sign in</AppBarTab> 
            </ScrollView>
        </View>
    )
}

export default AppBar