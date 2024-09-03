import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors.ios";




function PrimaryButton({ children, onPress }){
    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable 
           style={({ pressed }) => 
           pressed 
           ? [styles.buttonInnerContainer, styles.preesed] 
           :  styles.buttonInnerContainer} 
           onPress={onPress} 
           android_ripple={{color: Colors.primary700 }}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({

 buttonOuterContainer:{
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
 },

  buttonInnerContainer:{
    backgroundColor : Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: 'black',
    shadowOffset: {width : 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 2

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  preesed:{
    opacity: 0.75,

  },
});