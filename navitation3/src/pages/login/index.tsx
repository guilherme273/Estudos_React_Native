
import { Image, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
import Logo from '../../assets/logo.png';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

export default function Login (){

    interface ConsoleLog {
        email:string,
        password:string
    }

    const [consoleLog, setConsoleLog] = useState<ConsoleLog | null>(null);

    interface formLogin {
        email:string,
        password:string
    }
   
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<formLogin>();

    const onSubmit = (data:formLogin) => {
        setConsoleLog(data)
    }

    return (
        <>
                <View style={styles.container}>
                <View style={styles.logoAndWelcome}>
                    <Image source={Logo} />
                    <Text style={styles.textLogo}>Seja Bem Vindo!</Text>
                    <Text style={styles.textLogo}>{consoleLog?consoleLog.email:''}</Text>
                    <Text style={styles.textLogo}>{consoleLog?consoleLog.password:''}</Text>
                </View>
                <View style={styles.formContainer}>
                    <View>
                        <Text style={styles.labelInput}>ENDEREÇO DE EMAIL:</Text>
                        <View style={styles.inputAndIcon}>
                            <Controller
                                control={control}
                                name="email"
                                rules={{ required: 'Email é obrigatório' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    />
                                )}
                            />
                            <MaterialIcons name="email" size={20} color={themas.colors.lightGray1} />
                        </View>
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                    </View>
                    <View>
                        <Text style={styles.labelInput}>SENHA:</Text>
                        <View style={styles.inputAndIcon}>
                            <Controller
                                control={control}
                                name="password"
                                rules={{ required: 'Senha é obrigatória' }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    />
                                )}
                            />
                          <MaterialIcons name={"remove-red-eye"} size={20} color={themas.colors.lightGray1} />
                        </View>
                            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                    </View>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                        <Text  style={styles.textButton}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                 
                </View>
                <View style={styles.footer}>
                    <View style={styles.register}>
                        <Text style={styles.textLink}>Não tem uma conta? </Text>
                        <TouchableOpacity>
                            <Text style={styles.registerLink}>Crie Agora</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
           
        </>
    )

}