import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme/theme';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        width: '80%',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 80
    },
    title: {
        color: THEME.COLORS.PRIMARY,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20%',

    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})
