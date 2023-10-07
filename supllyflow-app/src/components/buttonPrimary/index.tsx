import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

function ButtonPrimary({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 
    button: {
        backgroundColor: THEME.COLORS.PRIMARY,
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 8,
        marginTop: 40
    },
    text: {
        color: '#ffff',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        
    },
});

export default ButtonPrimary;
