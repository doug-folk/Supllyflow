import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

function ButtonSecondary({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 
     button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    text: {
        color: THEME.COLORS.TEXT,
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    }, 
});

export default ButtonSecondary;
