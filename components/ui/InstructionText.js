import { Text, StyleSheet } from "react-native"; 
import Colors from "../../constants/colors.ios";




function InstrucionText({children, style}){
    return  <Text style={[styles.instructionText, style ]}>{children}</Text>;
}

export default InstrucionText;

const styles =  StyleSheet.create({
    instructionText:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
      },
});