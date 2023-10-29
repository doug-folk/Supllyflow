import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme/theme';

export const styles = StyleSheet.create({
    appBar: {
        backgroundColor: THEME.COLORS.PRIMARY,
        marginTop: 40,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    editTextBtn: {
        color: '#fff',
        fontSize: 18,
        marginRight: 10
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 20
    },

})
