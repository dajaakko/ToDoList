import {Appbar} from 'react-native-paper'
import { StyleSheet } from 'react-native'
export default function AppHeader() {
    return(
        <Appbar.Header>
            <Appbar.Content title="Todo App" style={varit.appbar}/>
        </Appbar.Header>

    )
}
const varit = StyleSheet.create({
    appbar: {
        
        marginBottom: 10 }
})