import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: '80%',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    title: {
        color: THEME.COLORS.PRIMARY,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    input: {
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        color: THEME.COLORS.TEXT,
        fontSize: 18,
        height: 48,
        borderRadius: 8,
        paddingLeft: 20,
        marginTop: 25,
        fontWeight: '500'
    },
    forgotPasswordBtn: { 
        color: THEME.COLORS.PRIMARY,
        fontWeight: '800',
        marginTop: 10,
        fontSize: 16
    },
})
