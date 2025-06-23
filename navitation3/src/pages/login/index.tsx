import { Image, Text, View, TextInput, Linking, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Logo from '../../assets/logo.png';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login (){

    return (
        <>
                <View style={styles.container}>
                <View style={styles.logoAndWelcome}>
                    <Image source={Logo} />
                    <Text style={styles.textLogo}>Seja Bem Vindo!</Text>
                </View>
                <View style={styles.formContainer}>
                    <View>
                        <Text style={styles.labelInput}>ENDEREÇO DE EMAIL:</Text>
                        <View style={styles.inputAndIcon}>
                            <TextInput style={styles.input}/>
                            <MaterialIcons name="email" size={20} color={themas.colors.lightGray1} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.labelInput}>SENHA:</Text>
                        <View style={styles.inputAndIcon}>
                            <TextInput style={styles.input}/>
                            <MaterialIcons name={"remove-red-eye"} size={20} color={themas.colors.lightGray1} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <View style={styles.register}>
                        <Text style={styles.textLink}>Não tem uma conta?</Text>
                        <TouchableOpacity>
                            <Text style={styles.registerLink}>Crie Agora</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
           
        </>
    )

}